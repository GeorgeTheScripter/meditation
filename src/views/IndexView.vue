<script setup lang="ts">
import MeditationCards from '@/components/MeditationCards.vue';
import WelcomePanel from '@/components/WelcomePanel.vue';
</script>

<template>
  <div class="container">
    <WelcomePanel />
    <MeditationCards />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
}
</style>
