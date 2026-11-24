<script setup>
const imageUrl =
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemons/25.png'
</script>

<template>
  <div>
    <img :src="imageUrl" alt="Pikachu" width="120" height="120" />
    <p>Pikachu</p>
  </div>
</template>
