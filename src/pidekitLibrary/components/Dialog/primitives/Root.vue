<script setup lang="ts">
import { DialogRoot, type DialogRootProps } from "radix-vue";
interface Props extends DialogRootProps { }

const props = defineProps<Props>();
</script>

<template>
    <DialogRoot v-bind="props">
        <slot />
    </DialogRoot>
</template>