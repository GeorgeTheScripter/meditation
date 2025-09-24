import type { Meditation } from '@/interfaces/meditation.interface';
import { API_ROUTES, http } from '@/service/api';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useMeditationStore = defineStore('meditation', () => {
  const meditations = ref<Meditation[]>();

  const getMeditations = async () => {
    try {
      const { data } = await http.get(API_ROUTES.meditations);
      meditations.value = data.data.meditations;
    } catch (err) {
      console.log(err);
    }
  };

  return {
    meditations,
    getMeditations,
  };
});
