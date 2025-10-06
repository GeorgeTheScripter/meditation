<script setup lang="ts">
import { useMeditationStore } from '@/stores/meditation.store';
import ButtonMenu from './ButtonMenu.vue';
import ButtonFiling from './ButtonFiling.vue';

const store = useMeditationStore();
</script>

<template>
  <div class="welcome">
    <img src="@/assets/avatar.png" alt="" />

    <div class="welcome__titles">
      <h3>Добро пожаловать, Наталья!</h3>
      <p>Как вы сегодня себя чувствуете?</p>
    </div>

    <div class="welcome__fillings">
      <ButtonFiling v-for="filing in store.filings" :key="filing.id">
        <div class="welcome__filing-wrapper">
          <component :is="`${filing.icon}-icon`"></component>
        </div>

        <p>{{ filing.text }}</p>
      </ButtonFiling>
    </div>
  </div>
</template>

<style scoped>
.welcome__titles {
  margin-top: 30px;
}

.welcome__titles h3 {
  font-size: 30px;
  font-weight: 500;
}

.welcome__titles p {
  font-size: 22px;
  font-weight: 400;
  opacity: 0.5;
}

.welcome__fillings {
  margin-top: 40px;
  display: flex;
  gap: 22px;
}

.welcome__filing-wrapper {
  background-color: #fff;
  width: 65px;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
}
</style>
