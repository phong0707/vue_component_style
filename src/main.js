import { createApp } from 'vue'
import App from './App.vue'
import router from '@/route.js'
import './assets/tailwind.css'
import {createPinia} from 'pinia'
const app = createApp(App)
const pinia = createPinia()
app.use(pinia)
app.use(router)
app.mount('#app')
