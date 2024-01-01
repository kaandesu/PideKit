<template>
  <div style="display: flex; gap: 1rem; flex-flow: column nowrap; width: 100%">
    <Slider v-model="sliderVal" />
    sliderVal from parent: {{ sliderVal }}
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const sliderVal = ref([50])
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
