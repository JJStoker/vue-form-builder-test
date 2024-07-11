import FormBuilder from '@/views/FormBuilder.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'forms',
      component: FormBuilder
    },
  ]
})

export default router
