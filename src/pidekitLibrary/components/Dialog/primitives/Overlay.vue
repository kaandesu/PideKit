<script setup lang="ts">
import { DialogOverlay, type DialogOverlayProps } from 'radix-vue'
interface Props extends DialogOverlayProps {}

const props = defineProps<Props>()
</script>

<template>
  <DialogOverlay v-bind="props">
    <slot />
  </DialogOverlay>
</template>
