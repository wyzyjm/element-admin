import Vue from 'vue'
import VueRouter from 'vue-router'
import Test from '@/views/Test.vue'
import List from '@/views/List'
import Createa from '@/views/Createa'


Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'List',
    redirect: '/list'
  },
  // 测试路由
  {
    path: '/test',
    name: Test,
    component: Test
  },
  {
    path: '/',
    name: List,
    component: List
  },
  // 文章列表
  {
    path: '/list',
    name: List,
    component: List
  },
  // 创建文章
  {
    path: '/list/create',
    name: Createa,
    component: Createa
  }

]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router