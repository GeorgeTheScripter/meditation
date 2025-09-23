import './assets/main.css';

import { createApp, type Component } from 'vue';
import App from './App.vue';
import components from './components/icons';

const app = createApp(App);

components.forEach((component: Component) => {
  app.component(component.name!, component);
});

app.mount('#app');
