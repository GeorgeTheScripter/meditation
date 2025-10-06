import type { Filing } from '@/interfaces/filing.interface';
import type { Meditation } from '@/interfaces/meditation.interface';
import { API_ROUTES, http } from '@/service/api';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useMeditationStore = defineStore('meditation', () => {
  const meditations = ref<Meditation[]>();
  const filings: Filing[] = [
    { id: 1, icon: 'chill', text: 'Спокойно' },
    { id: 2, icon: 'trikvetr', text: 'Расслабленно' },
    { id: 3, icon: 'master', text: 'Фокусировано' },
    { id: 4, icon: 'circle', text: 'Тревожно' },
  ];

  const getMeditations = async () => {
    try {
      const { data } = await http.get(API_ROUTES.meditations);
      meditations.value = data.data.meditations;
      console.log(data.data);
    } catch (err) {
      console.log(err);
    }
  };

  return {
    meditations,
    getMeditations,
    filings,
  };
});
