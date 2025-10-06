<script setup lang="ts"></script>
<template>
  <button class="button">
    <slot name="icon" />

    <slot />
  </button>
</template>

<style scoped>
.button {
  color: var(--color-text-primary);
  font-family: 'Alegreya', serif;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 12px;
}

.button_icon_wrapper {
  background-color: var(--color-text-primary);
  width: 65px;
  height: 65px;
}

.button:hover {
  opacity: 50%;
}
</style>
