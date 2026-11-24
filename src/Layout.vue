<script setup>
// La "coque" de l'application : le menu reste en haut,
// et <RouterView /> affiche la page qui correspond à l'adresse.
</script>

<template>
  <nav class="menu">
    <RouterLink to="/">Pokédex</RouterLink>
    <RouterLink to="/bugs">Chasse aux bugs</RouterLink>
  </nav>

  <RouterView />
</template>
