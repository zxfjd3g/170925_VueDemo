/*
路由器对象模块
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

import About from '../views/About.vue'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

export default new VueRouter({
  // 配置多个路由
  routes: [
    {
      path: '/about',
      component: About
    },
    {
      path: '/home',
      component: Home
    },
    { // 自动跳转到指定路由
      path: '/',
      redirect: '/about'
    }
  ]
})