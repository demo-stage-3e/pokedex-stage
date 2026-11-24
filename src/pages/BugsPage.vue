<script setup>
import { exercices } from '../bugs/exercices.js'
</script>

<template>
  <main class="page">
    <h1>Chasse aux bugs</h1>
    <p>
      Chaque exercice est un petit composant qui ne marche pas comme prévu.
      À toi de trouver pourquoi, puis de le réparer.
      Les consignes et les indices sont dans <strong>CHASSE-AUX-BUGS.md</strong>
      (clic droit sur le fichier dans VS Code, puis « Open Preview »).
    </p>

    <ul class="liste-bugs">
      <li v-for="e in exercices" :key="e.id">
        <RouterLink :to="`/bugs/${e.id}`">
          <span class="palier">Palier {{ e.palier }}</span>
          <span>Bug {{ e.id }} : {{ e.titre }}</span>
        </RouterLink>
      </li>
    </ul>
  </main>
</template>
