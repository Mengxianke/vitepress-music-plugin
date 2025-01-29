import { createApp } from 'vue'
import App from './App.vue'
import elementplus from "element-plus"
import "element-plus/dist/index.css";
import axios from 'axios';
// import MusicPlayerPlugin from '../lib/index';

// const app = createApp(App)

// app.use(MusicPlayerPlugin);

// app.mount('#app')


import MusicPlayerPlugin from '../package/main.js';
const app = createApp(App)
app.config.globalProperties.$axios = axios;
console.log("************");
console.log(MusicPlayerPlugin);
console.log("************");
app.use(MusicPlayerPlugin);
app.use(elementplus);

app.mount('#app')