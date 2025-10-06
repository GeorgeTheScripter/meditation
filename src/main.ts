import './assets/main.css';

import { createApp, type Component } from 'vue';
import App from './App.vue';
import components from './components/icons';
import { createPinia } from 'pinia';
import { router } from './router/router';

const app = createApp(App);
const pinia = createPinia();

// Регистрация компонентов
components.forEach((component: Component) => {
  app.component(component.name!, component);
});

app.use(pinia);
app.use(router);

app.mount('#app');
