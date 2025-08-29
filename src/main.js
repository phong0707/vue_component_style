import { createApp } from 'vue'
import App from './App.vue'
import router from '@/route.js'
import './assets/tailwind.css'

const app = createApp(App)
app.use(router)
app.mount('#app')
