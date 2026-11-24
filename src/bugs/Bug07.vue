<script setup>
import { ref } from 'vue'

const PV_MAX = 100
const pv = ref(40)

function combattre() {
  pv.value = Math.max(pv.value - 25, 0)
}

function soigner() {
  pv.value = Math.max(pv.value + 30, PV_MAX)
}
</script>

<template>
  <div>
    <p>Points de vie : {{ pv }} / {{ PV_MAX }}</p>
    <progress :value="pv" :max="PV_MAX"></progress>
    <p>
      <button @click="combattre">Combattre (-25)</button>
      <button @click="soigner">Potion (+30)</button>
    </p>
  </div>
</template>
