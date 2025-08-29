import { createWebHistory, createRouter } from 'vue-router'

import Home from '@/pages/home.vue'
import project from '@/pages/project.vue'
const routes = [
  { path: '/', component: Home },
  { path: '/project', component: project  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router