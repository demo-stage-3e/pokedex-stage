// Un "service" : une classe qui s'occupe de parler à la PokéAPI.
// Les composants Vue n'ont pas besoin de savoir COMMENT on récupère les données,
// ils appellent simplement une méthode, par exemple `pokeApi.chargerPokemons(20)`.

const URL_API = 'https://pokeapi.co/api/v2'

class PokeApi {
  // Renvoie une liste de Pokémon avec leur nom et leurs types en français.
  async chargerPokemons(limite = 1000) {
    // 1) On demande la liste (nom + adresse de chaque Pokémon)
    const liste = await this.#lireJson(`${URL_API}/pokemon?limit=${limite}`)

    // 2) Pour chaque Pokémon, on va chercher ses détails (image, types...)
    //    et aussi son "espèce", qui contient le nom en français
    const pokemons = await Promise.all(
      liste.results.map((p) => this.#chargerUnPokemon(p.url))
    )

    // 3) On traduit les types en français
    const typesFr = await this.#chargerNomsDesTypes(pokemons)

    // 4) On ajoute la liste des types en français à chaque Pokémon
    return pokemons.map((p) => ({
      ...p,
      typesFr: p.types.map((t) => typesFr[t.type.name]),
    }))
  }

  // --- Méthodes privées (le # veut dire "utilisable seulement dans cette classe") ---

  async #chargerUnPokemon(url) {
    const detail = await this.#lireJson(url)
    const espece = await this.#lireJson(detail.species.url)

    // On ajoute le nom français (si absent, on garde le nom anglais)
    return { ...detail, nomFr: this.#traductionFr(espece.names) ?? detail.name }
  }

  // Renvoie un dictionnaire : { grass: 'Plante', poison: 'Poison', ... }
  async #chargerNomsDesTypes(pokemons) {
    // Liste des types différents (sans doublons) : on demande chacun UNE seule fois
    const urls = new Set(pokemons.flatMap((p) => p.types.map((t) => t.type.url)))

    const typesFr = {}
    await Promise.all(
      [...urls].map(async (url) => {
        const type = await this.#lireJson(url)
        typesFr[type.name] = this.#traductionFr(type.names) ?? type.name
      })
    )
    return typesFr
  }

  // Cherche la traduction française dans une liste `names` de la PokéAPI
  #traductionFr(names) {
    return names.find((n) => n.language.name === 'fr')?.name
  }

  async #lireJson(url) {
    const reponse = await fetch(url)
    if (!reponse.ok) throw new Error(`Erreur ${reponse.status} sur ${url}`)
    return reponse.json()
  }
}

// On exporte UNE instance, prête à l'emploi partout dans l'application
export const pokeApi = new PokeApi()
