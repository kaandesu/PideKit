<script setup lang="ts">
import { DialogClose, type DialogCloseProps } from 'radix-vue'

interface Props extends DialogCloseProps {}

const props = defineProps<Props>()
</script>

<template>
  <DialogClose v-bind="props">
    <slot />
  </DialogClose>
</template>
