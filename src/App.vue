<script setup>
import { ref, onMounted, computed } from 'vue'
import PokemonCard from './components/PokemonCard.vue'
import { pokeApi } from './services/PokeApi.js'

// ref = une variable "réactive" : quand elle change, la page se met à jour toute seule.
const pokemons = ref([])
const chargement = ref(true)
const recherche = ref('')
const choisi = ref(null)

const pokemonsAffiches = computed(() =>
  pokemons.value.filter((p) =>
    p.nomFr.toLowerCase().includes(recherche.value.toLowerCase())
  )
)

// ============================================================
// DÉJÀ FAIT : afficher une grille de Pokémon (lis-le pour le comprendre)
// ============================================================
async function chargerPokemons() {
  // Toute la complexité (appels à l'API, traductions...) est cachée dans le service
  pokemons.value = await pokeApi.chargerPokemons(1350)
  chargement.value = false
}

onMounted(chargerPokemons) // lancé automatiquement à l'ouverture de la page

// ============================================================
// PALIER 0 : jouer avec ce qui existe (aucun JavaScript !)
// - Change le titre "Mon Pokédex" plus bas, dans le <template>
// - Change la couleur --rouge dans src/style.css
// - Change le 20 de `pokeApi.chargerPokemons(20)` en 6, puis en 50
// Observe ce qui change dans la page à chaque enregistrement.
// ============================================================

// ============================================================
// PALIER 1 : ajouter une information sur la carte (juste du HTML)
// Dans src/components/PokemonCard.vue, ajoute sous le nom :
//     <p>Taille : {{ pokemon.height / 10 }} m</p>
//     <p>Poids : {{ pokemon.weight / 10 }} kg</p>
// Les {{ ... }} affichent une valeur. `pokemon` est le Pokémon de la carte.
// ============================================================

// ============================================================
// PALIER 2 : une barre de recherche (premier vrai JavaScript)
// Étape A : crée la variable (en haut, à côté de `pokemons`) :
//     const recherche = ref('')
// Étape B : dans le <template>, au-dessus de la grille :
//     <input v-model="recherche" placeholder="Chercher un Pokémon" />
//     (v-model relie ce que tu tapes à la variable `recherche`)
// Étape C : crée la liste filtrée (ajoute `computed` dans l'import de 'vue') :
//     const pokemonsAffiches = computed(() =>
//       pokemons.value.filter((p) =>
//         p.nomFr.toLowerCase().includes(recherche.value.toLowerCase())
//       )
//     )
// Étape D : dans la grille, remplace `pokemons` par `pokemonsAffiches`.
// Teste : tape "pi" dans la barre.
// ============================================================

// ============================================================
// PALIER 3 : la fiche détail (un peu plus dur)
// Idée : quand on clique sur une carte, on affiche ses stats dessous.
// - Variable : const choisi = ref(null)
// - Sur la carte dans le template : @click="choisi = p"
// - Un bloc <section v-if="choisi"> qui affiche {{ choisi.nomFr }}
//   et une liste : <li v-for="s in choisi.stats" :key="s.stat.name">
//                    {{ s.stat.name }} : {{ s.base_stat }}
//                  </li>
// ============================================================

// ============================================================
// PALIER 4 (pour aller plus loin) : "Mon équipe"
// Un bouton "Ajouter à mon équipe" sur chaque carte, 6 Pokémon maximum,
// sauvegardés avec localStorage pour les retrouver au rechargement.
// À faire à deux avec l'aide de l'encadrant ou de l'IA.
// ============================================================

// ============================================================
// BONUS : jeu "Qui est ce Pokémon ?"
// Idée : afficher l'image en silhouette (CSS : filter: brightness(0))
//        et proposer 4 noms, avec un score.
// ============================================================
</script>

<template>
  <header>
    <h1>Mon Pokédex</h1>
  </header>
  <input v-model="recherche" placeholder="Chercher un Pokémon" />
  <main>
    <p v-if="chargement">Chargement…</p>
    <div v-else class="grille">
      <PokemonCard v-for="p in pokemonsAffiches" :key="p.id" :pokemon="p" @click="choisi = p"/>
    </div>
    <div v-if="choisi" class="fond-modale" @click="choisi = null">
  <section class="modale" @click.stop>
    <button class="fermer" @click="choisi = null">✕</button>
    <h2>{{ choisi.nomFr }}</h2>
    <ul>
      <li v-for="s in choisi.stats" :key="s.stat.name">
        {{ s.stat.name }} : {{ s.base_stat }}
      </li>
    </ul>
  </section>
</div>
  </main>
</template>
