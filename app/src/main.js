import { createApp } from 'vue'
import App from './App.vue'
import VueGtag from "vue-gtag";
import './index.css'

createApp(App).use(VueGtag, {
    config: { id: "G-CY8YY9LK9V" }
  }).mount('#app')
