<script setup>
import { ref } from 'vue'

const MAX = 6
const equipe = ref([])

function recruter() {
  if (equipe.value.length <= MAX) {
    equipe.value.push(`Pokémon n°${equipe.value.length + 1}`)
  }
}

function vider() {
  equipe.value = []
}
</script>

<template>
  <div>
    <p>Équipe : {{ equipe.length }} / {{ MAX }}</p>
    <button @click="recruter">Recruter</button>
    <button @click="vider">Vider l'équipe</button>
    <ul>
      <li v-for="nom in equipe" :key="nom">{{ nom }}</li>
    </ul>
  </div>
</template>
