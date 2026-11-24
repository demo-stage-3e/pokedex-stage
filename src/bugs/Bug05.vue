<script setup>
import { ref, computed } from 'vue'

const noms = ['Pikachu', 'Salamèche', 'Carapuce', 'Bulbizarre', 'Rondoudou']
const recherche = ref('')

const resultats = computed(() =>
  noms.filter((nom) => nom.includes(recherche.value))
)
</script>

<template>
  <div>
    <input v-model="recherche" placeholder="Chercher un Pokémon" />
    <ul>
      <li v-for="nom in resultats" :key="nom">{{ nom }}</li>
    </ul>
    <p v-if="resultats.length === 0">Aucun résultat.</p>
  </div>
</template>
