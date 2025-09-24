<script setup lang="ts">
import { useMeditationStore } from '@/stores/meditation.store';
import { onMounted } from 'vue';
import MeditationCard from './MeditationCard.vue';

const store = useMeditationStore();

onMounted(() => {
  store.getMeditations();
});
</script>

<template>
  <div class="cards">
    <MeditationCard
      v-if="store.meditations"
      v-for="meditation in store.meditations"
      :key="meditation.id"
      :meditation="meditation"
    />
    <div v-else>Медитации не найдены</div>
  </div>
</template>

<style scoped>
.cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  max-width: 700px;
}
</style>
