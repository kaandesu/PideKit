<script setup lang="ts">
import { DialogDescription, type DialogDescriptionProps } from "radix-vue";
interface Props extends DialogDescriptionProps { }

const props = defineProps<Props>();
</script>

<template>
    <DialogDescription v-bind="props">
        <slot />
    </DialogDescription>
</template>