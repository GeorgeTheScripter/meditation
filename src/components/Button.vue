<template>
  <button class="button">
    <slot />
    <slot name="icon" />
  </button>
</template>

<script setup lang="ts"></script>

<style scoped>
.button {
  background-color: var(--color-bg-primary);
  color: var(--color-text-primary);
  padding: 14px 18px 14px 26px;
  border-radius: 10px;
  border: none;
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
}

.button:hover {
  background-color: var(--color-bg-primary-hover);
}
</style>
