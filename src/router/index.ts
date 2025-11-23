import { createRouter, createWebHistory } from 'vue-router'
import ArchiveView from '@/pages/ArchiveView/index.vue'
import ProfileView from '@/pages/ProfileView/index.vue'
import Home from '@/pages/Home/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: '首页',
      },
    },
    // 新增归档页面路由
    {
      path: '/archive',
      name: 'archive',
      component: ArchiveView,
      meta: {
        title: '归档',
      },
    },

    // 新增我的页面路由
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView,
      meta: {
        title: '我的',
      },
    },
  ],
})

export default router
