<script setup lang="ts">
import { SliderRoot, type SliderRootProps, useEmitAsProps, SliderRootEmits } from "radix-vue";
import { cn } from "../../../utils";

const props = defineProps<SliderRootProps & { class?: string }>();
const emits = defineEmits<SliderRootEmits>()
const emitsAsProps = useEmitAsProps(emits)
</script>

<template>
    <SliderRoot v-bind="{ ...props, ...emitsAsProps }" :class="cn(
        'relative flex w-full touch-none select-none items-center',
        $attrs.class ?? '',
    )">
        <slot />
    </SliderRoot>
</template>