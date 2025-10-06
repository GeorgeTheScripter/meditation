<script setup lang="ts">
import type { Meditation } from '@/interfaces/meditation.interface';
import Button from './Button.vue';
import IconSmallPlay from './icons/regular_icons/IconSmallPlay.vue';
import { useRouter } from 'vue-router';

const { meditation } = defineProps<{ meditation: Meditation }>();

const router = useRouter();

const goToMeditation = () => {
  router.push(`main/${meditation.id}`);
};
</script>

<template>
  <div class="card">
    <div class="card__info">
      <h3>{{ meditation.title }}</h3>
      <p>{{ meditation.description }}</p>
    </div>

    <div class="card__controller">
      <Button @click="goToMeditation">
        Начать
        <IconSmallPlay name="icon" />
      </Button>

      <p>{{ meditation.duration_min }} мин</p>
    </div>
  </div>
</template>

<style scoped>
.card {
  background-color: var(--color-bg-card);
  color: var(--color-text-secondary);
  padding: 24px 30px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.card__info {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.card__info h3 {
  font-size: 25px;
  font-weight: 500;
}

.card__info p {
  font-size: 15px;
  font-weight: 500;
  line-height: 110%;
}

.card__controller {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card__controller p {
  font-size: 15px;
  font-weight: 500;
  opacity: 0.75;
}
</style>
