import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Post from './views/Post.vue'
import Category from './views/Category.vue'
import Admin from './views/Admin.vue'
import viewAdmin from './views/ViewAdmin.vue'
import View from './views/View.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/view',
      name: 'view',
      component: View,
      children: [
        {
          path: '/home',
          name: 'home',
          component: Home
        },
        {
          path: '/category/:category/:data',
          name: 'post',
          component: Post
        },
        {
          path: '/category/:category',
          name: 'category',
          component: Category
        }
      ]
    },
    {
      path: '/viewAdmin',
      name: 'viewAdmin',
      component: viewAdmin,
      children: [
        {
          path: '/admin',
          name: 'admin',
          component: Admin
        }
      ]
    }
  ]
})
