import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Post from './views/Post.vue'
import Category from './views/Category.vue'
import Admin from './views/Admin.vue'
import viewAdmin from './views/ViewAdmin.vue'
import View from './views/View.vue'
import TableList from './views/TableList.vue'
import formDynamic from './views/formDynamic.vue'
import Brave from './views/Brave.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'view',
      component: View,
      redirect: {
        name: 'home'
      },
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
        },
        {
          path: '/brave/',
          name: 'brave',
          component: Brave
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
        },
        {
          path: '/table-list',
          name: 'table-list',
          component: TableList
        },
        {
          path: '/user-profile',
          name: 'form-dynamic',
          component: formDynamic
        }
      ]
    }
  ]
})
