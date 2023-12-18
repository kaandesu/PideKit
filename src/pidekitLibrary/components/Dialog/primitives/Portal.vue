<script setup lang="ts">
import { DialogPortal, type DialogPortalProps } from "radix-vue";
interface Props extends DialogPortalProps { }

const props = defineProps<Props>();
</script>

<template>
    <DialogPortal v-bind="props">
        <slot />
    </DialogPortal>
</template>