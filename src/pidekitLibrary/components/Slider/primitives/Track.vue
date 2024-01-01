<script setup lang="ts">
import { SliderTrack, type SliderTrackProps } from 'radix-vue'
import { cn } from '../../../utils'

const props = defineProps<SliderTrackProps & { class?: string }>()
</script>

<template>
  <SliderTrack v-bind="props" :class="cn(props.class)">
    <slot />
  </SliderTrack>
</template>
