<script setup>
import { ref, onMounted } from 'vue'
import { chargerPokemon } from './serviceBug.js'

const pokemon = ref(null)

onMounted(async () => {
  pokemon.value = await chargerPokemon(25)
})
</script>

<template>
  <div>
    <p v-if="!pokemon">Chargement…</p>
    <ul v-else>
      <li>Nom : {{ pokemon.nom }}</li>
      <li>Poids : {{ pokemon.poids }} kg</li>
    </ul>
  </div>
</template>
