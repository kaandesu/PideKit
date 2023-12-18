<script setup lang="ts">
import { DialogTitle, type DialogTitleProps } from "radix-vue";
interface Props extends DialogTitleProps { }

const props = defineProps<Props>();
</script>

<template>
    <DialogTitle v-bind="props">
        <slot />
    </DialogTitle>
</template>