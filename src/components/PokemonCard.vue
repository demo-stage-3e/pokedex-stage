<script setup>
// Un "composant" = une pièce réutilisable de la page.
// Il reçoit un Pokémon de la part de App.vue (c'est une "prop").
defineProps({
  pokemon: { type: Object, required: true },
})
</script>

<template>
  <article class="carte">
    <img :src="pokemon.sprites.front_default" :alt="pokemon.nomFr" />
    <h2>{{ pokemon.nomFr }}</h2>
    <span v-for="t in pokemon.typesFr" :key="t" class="type">
      {{ t }}
    </span>
  </article>
</template>
