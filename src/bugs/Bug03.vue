<script setup>
import { ref } from 'vue'

const equipe = ref([])
const nouveau = ref('')

function ajouter() {
  if (nouveau.value) {
    equipe.value.push(nouveau.value)
    nouveau.value = ''
  }
}
</script>

<template>
  <div>
    <input v-model="nouveau" placeholder="Nom d'un Pokémon" />
    <button click="ajouter">Ajouter</button>

    <ul>
      <li v-for="nom in equipe" :key="nom">{{ nom }}</li>
    </ul>
  </div>
</template>
