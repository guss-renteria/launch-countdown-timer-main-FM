import { createRouter, createWebHistory} from 'vue-router'

export default createRouter({
  history: createWebHistory(),

  routes: [
    { path: '/', name: 'Home', component: () => import('@/views/home/home.view.vue') },
    { path: '/:catchAll(.*)', component: () => import('@/views/not_found/not_found.view.vue') }
  ]
})
