import './assets/main.css';

import { createApp, type Component } from 'vue';
import App from './App.vue';
import components from './components/icons';
import { createPinia } from 'pinia';
const pinia = createPinia();

const app = createApp(App);

// Регистрация компонентов
components.forEach((component: Component) => {
  app.component(component.name!, component);
});

app.use(pinia);

app.mount('#app');
