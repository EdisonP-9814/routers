import { createRouter, createWebHistory } from 'vue-router'
import Home from '../Components/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../Components/AboutView.vue')
    },
    {
      path: '/captura/:value',
      name: 'captura',
      component: () => import('../Components/CapturaView.vue'),
      props: route => ({
        value: isNaN(Number(route.params.value)) 
          ? route.params.value 
          : Number(route.params.value)
      })
    }

  ]
})

export default router
