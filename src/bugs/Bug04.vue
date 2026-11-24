<script setup>
import { ref, computed } from 'vue'

const points = ref(0)

const niveauSuperieur = computed(() => points.value >= 50)

function combattre() {
  points.value += 10
}
</script>

<template>
  <div>
    <p>Points d'expérience : {{ points }}</p>
    <button @click="combattre">Combattre</button>
    <p v-if="niveauSuperieur">Niveau supérieur !</p>
  </div>
</template>
