<script setup>
import { ref, onMounted } from 'vue'
import { chargerTypes } from './serviceBug.js'

const types = ref([])

onMounted(async () => {
  types.value = await chargerTypes(25)
})
</script>

<template>
  <div>
    <p>Types de Pikachu :</p>
    <span v-for="t in types" :key="t" class="type">{{ t }}</span>
  </div>
</template>
