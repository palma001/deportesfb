import Vue from 'vue'
import Router from 'vue-router'
import Main from './views/Main'
import Home from './views/Home'
import About from './views/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main,
      redirect: {
        name: 'Home'
      },
      children: [
        {
          path: '/home',
          name: 'Home',
          component: Home
        },
        {
          path: '/about',
          name: 'About',
          component: About
        }
      ]
    }
  ]
})
