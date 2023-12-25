<script setup lang="ts">
import { SliderThumb, type SliderThumbProps } from "radix-vue";
import { cn } from "../../../utils";

const props = defineProps<SliderThumbProps & { class?: string }>();
</script>

<template>
    <SliderThumb v-bind="props" :class="cn(props.class)">
        <slot />
    </SliderThumb>
</template>