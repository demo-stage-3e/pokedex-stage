<script setup>
import { ref, computed, watch, onErrorCaptured } from 'vue'
import { useRoute } from 'vue-router'
import { exercices } from '../bugs/exercices.js'

const route = useRoute()
const exercice = computed(() => exercices.find((e) => e.id === route.params.id))

// Si le composant cassé plante, on affiche le message ici
// au lieu de laisser toute la page devenir blanche.
const erreur = ref(null)
onErrorCaptured((e) => {
  erreur.value = e
  return false // l'erreur est gérée, elle ne remonte pas plus haut
})

// On repart de zéro quand on change d'exercice
watch(() => route.params.id, () => (erreur.value = null))

// Ce compteur sert de `key` : en le changeant, Vue recrée le composant de zéro (bouton « Réessayer »)
const essai = ref(0)
function reessayer() {
  erreur.value = null
  essai.value++
}
</script>

<template>
  <main class="page">
    <RouterLink to="/bugs">← Tous les exercices</RouterLink>

    <p v-if="!exercice">Cet exercice n'existe pas.</p>

    <template v-else>
      <h1>Bug {{ exercice.id }} : {{ exercice.titre }}</h1>
      <span class="palier">Palier {{ exercice.palier }}</span>

      <section class="fiche-bug">
        <h2>Résultat attendu</h2>
        <p>{{ exercice.attendu }}</p>
        <h2>Fichier à ouvrir</h2>
        <p><code>{{ exercice.fichier }}</code></p>
        <h2>Consignes et indices</h2>
        <p>Dans <strong>CHASSE-AUX-BUGS.md</strong>, section « Bug {{ exercice.id }} ».</p>
      </section>

      <div v-if="erreur" class="plantage">
        <p><strong>Le composant a planté.</strong></p>
        <p>Message : <code>{{ erreur.message }}</code></p>
        <p>Ouvre la console (F12) pour voir la ligne exacte.</p>
        <button @click="reessayer">Réessayer</button>
      </div>

      <div v-else class="terrain">
        <component :is="exercice.composant" :key="`${exercice.id}-${essai}`" />
      </div>
    </template>
  </main>
</template>
