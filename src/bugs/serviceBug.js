// Un mini "service" pour les bugs 08 et 09, construit comme src/services/PokeApi.js :
// les composants l'appellent sans savoir comment les données sont récupérées.
// (C'est une copie à part, pour ne pas casser le vrai Pokédex.)

const URL_API = 'https://pokeapi.co/api/v2'

// Renvoie { nom, poids } : le poids est en kilogrammes.
export async function chargerPokemon(id) {
  const reponse = await fetch(`${URL_API}/pokemon/${id}`)
  const donnees = reponse.json()
  return {
    nom: donnees.name,
    poids: donnees.weight / 10,
  }
}

// Renvoie la liste des types d'un Pokémon, par exemple : ['electric']
export async function chargerTypes(id) {
  const reponse = await fetch(`${URL_API}/pokemon/${id}`)
  const donnees = await reponse.json()
  return donnees.types.map((t) => t.type)
}
