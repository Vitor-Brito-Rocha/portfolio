import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/pages/Home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      requireAuth: false
    },
  },
    {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  }],
})
router.beforeEach((to, from, next) => {
  if(to.meta.requireAuth && localStorage.getItem('loggedIn') !== 'true') {

  } else {
    next()
  }
})
export default router
