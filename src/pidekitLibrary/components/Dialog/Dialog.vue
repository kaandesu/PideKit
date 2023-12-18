<script setup lang="ts">
import { Dialog } from '../../namespaced'

import './dialog.css'


</script>

<template>
    <Dialog.Root>
        <Dialog.Trigger class="Button grass">
            Edit profile
        </Dialog.Trigger>
        <Dialog.Portal>
            <Dialog.Overlay class="DialogOverlay" />
            <Dialog.Content class="DialogContent">
                <Dialog.Title class="DialogTitle">
                    Edit profile
                </Dialog.Title>
                <Dialog.Description class="DialogDescription">
                    Make changes to your profile here. Click save when you're done.
                </Dialog.Description>
                <fieldset class="Fieldset">
                    <label class="Label" for="name"> Name </label>
                    <input id="name" class="Input" defaultValue="Pedro Duarte">
                </fieldset>
                <fieldset class="Fieldset">
                    <label class="Label" for="username"> Username </label>
                    <input id="username" class="Input" defaultValue="@peduarte">
                </fieldset>
                <div :style="{ display: 'flex', marginTop: 25, justifyContent: 'flex-end' }">
                    <Dialog.Close as-child>
                        <button class="Button green">
                            Save changes
                        </button>
                    </Dialog.Close>
                </div>
                <Dialog.Close class="IconButton" aria-label="Close">
                    <span>X</span>
                </Dialog.Close>
            </Dialog.Content>
        </Dialog.Portal>
    </Dialog.Root>
</template>