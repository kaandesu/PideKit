<script setup lang="ts">
import { SliderRange, type SliderRangeProps } from 'radix-vue'
import { cn } from '../../../utils'

const props = defineProps<SliderRangeProps & { class?: string }>()
</script>

<template>
  <SliderRange v-bind="props" :class="cn(props.class)">
    <slot />
  </SliderRange>
</template>
