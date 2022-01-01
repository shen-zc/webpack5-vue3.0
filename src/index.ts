  

import { createApp } from "vue";
import App from "./app.vue";
import { router } from './router';
import store from './store/index';
import compt from "./modules";
const app=createApp(App);
compt(app);
app.use(router).use(store).mount('#app')