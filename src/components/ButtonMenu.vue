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
  opacity: 50%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 22px;
  padding: 20px 60px;
}

.button:hover {
  opacity: 100%;
}
</style>
