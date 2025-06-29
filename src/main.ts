import { createApp } from 'vue';
import './assets/css/main.css'

import App from './App.vue';
import router from './router';
import i18n from './i18n'
import { createPinia } from 'pinia'
const pinia = createPinia();
const app = createApp(App)
    .use(router)
    .use(i18n)
    .use(pinia);
app.mount('#app');