import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '../views/AboutView.vue'
import ContactView from "../views/ContactView.vue"
import HomeView from '../views/HomeView.vue'
import PrivacyView from '../views/PrivacyView.vue'
import UserPostsView from '../views/UserPostsView.vue'
import UserProfileView from '../views/UserProfileView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/privacy',
      name: 'privacy',
      alias: "/privacy-policy",
      component: PrivacyView
    },
    {
      path: "/contact",
      name: "contact",
      component: ContactView
    },
    {
      path: "/user/:userId",
      name: "user",
      redirect: { name: "user-profile" },
      children: [
        {
          path: "profile",
          name: "user-profile",
          component: UserProfileView
        },
        {
          path: "posts",
          name: "user-posts",
          component: UserPostsView
        }
      ]
    }
  ]
})

export default router
