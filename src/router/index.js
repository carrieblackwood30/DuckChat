import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import userSettings from '../views/userSettings.vue'
import userSavedPosts from '../views/userSavedPosts.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/userSettings',
      name: 'userSettings',
      component: userSettings
    },
    {
      path: '/:user/userSavedPosts',
      name: 'userSavedPosts',
      component: userSavedPosts
    }
  ]
})

export default router
