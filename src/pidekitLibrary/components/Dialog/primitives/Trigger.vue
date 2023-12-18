<script setup lang="ts">
import { DialogTrigger, type DialogTriggerProps } from "radix-vue";
interface Props extends DialogTriggerProps { }

const props = defineProps<Props>();
</script>

<template>
    <DialogTrigger v-bind="props">
        <slot />
    </DialogTrigger>
</template>