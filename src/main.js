import { createApp } from 'vue'
import App from './App.vue'
import mitt from 'mitt';
import router from "./router";

const emitter = mitt();
const app = createApp(App);

app.config.globalProperties.$bus = emitter;
app.use(router).mount("#app");
