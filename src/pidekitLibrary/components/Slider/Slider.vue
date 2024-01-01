<script setup lang="ts">
import { Range, Root, Thumb, Track } from './primitives'
import './styles.css'

const modelValue = defineModel<number[]>()
</script>

<template>
  <Root v-model="modelValue" class="SliderRoot">
    <Track class="SliderTrack">
      <Range class="SliderRange" />
    </Track>
    <Thumb class="SliderThumb" />
  </Root>
</template>
