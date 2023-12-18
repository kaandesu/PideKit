<script setup lang="ts">
import { DialogContent, type DialogContentProps } from "radix-vue";
interface Props extends DialogContentProps { }

const props = defineProps<Props>();
</script>

<template>
    <DialogContent v-bind="props">
        <slot />
    </DialogContent>
</template>