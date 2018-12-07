import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        // use <title>
        // title: 'home title'
      },
      component: () => import(/* webpackChunkName: "home" */ './views/Home.vue')
    },
    {
      path: '/test',
      name: 'test',
      meta: {
        title: 'string title'
      },
      component: () => import(/* webpackChunkName: "home" */ './views/Home.vue')
    },
    {
      path: '/test2',
      name: 'test2',
      meta: {
        title: function (store) {
          return `${store.state.test} @${this.name}`
        }
      },
      component: () => import(/* webpackChunkName: "home" */ './views/Home.vue')
    }
  ]
})
