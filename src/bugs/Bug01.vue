<script setup>
import { ref } from 'vue'

const nom = ref('Pikachu')
const niveau = ref(5)
</script>

<template>
  <p>Un {{ nom }} sauvage de niveau {{ nivau }} apparaît !</p>
</template>
