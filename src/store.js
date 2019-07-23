import Vue from 'vue'
import Vuex from 'vuex'
import { link } from './data/articles.js'
import { set, toggle } from './utils/vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    link: link,
    articles: link,
    drawerAdmin: null,
    color: 'success',
    image: 'https://demos.creative-tim.com/vue-material-dashboard/img/sidebar-2.32103624.jpg',
    sidebarBackgroundColor: 'rgba(27, 27, 27, 0.74)',
    drawer: false,
    items: [
      {
        text: 'Home',
        to: '/home'
      },
      {
        text: 'About',
        to: '/about'
      }
    ]
  },
  getters: {
    categories: state => {
      const categories = []

      for (const article of state.articles) {
        if (
          !article.category ||
          categories.find(category => category.text === article.category)
        ) continue

        const text = article.category

        categories.push({
          text,
          to: `/category/${text.toLowerCase()}/`
        })
      }

      return categories.sort().slice(0, 4)
    },
    links: (state, getters) => {
      return state.items.concat(getters.categories)
    }
  },
  mutations: {
    setDrawer: (state, payload) => (state.drawer = payload),
    toggleDrawer: state => (state.drawer = !state.drawer),
    eventSearch: (state, data) => {
      let link = state.link.filter(element => {
        if (element.author && element.category && element.title && element.description) {
          return element.category.toUpperCase().includes(data.toUpperCase()) ||
          element.title.toUpperCase().includes(data.toUpperCase()) ||
          element.author.toUpperCase().includes(data.toUpperCase()) ||
          element.description.toUpperCase().includes(data.toUpperCase())
        }
      })
      Vue.set(state, 'articles', link)
    },
    setDrawerAdmin: set('drawer'),
    setImage: set('image'),
    setColor: set('color'),
    toggleDrawerAdmin: toggle('drawer')
  },
  actions: {}
})
