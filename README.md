## vue-router-title

[![Greenkeeper badge](https://badges.greenkeeper.io/chiaweilee/vue-router-title.svg)](https://greenkeeper.io/)

### Install

`npm install @chiaweilee/vue-router-title`

### Usage

```JavaScript
// main.js
import RouterTitle from 'vue-routertitle'
// ...

const router = new Router({
    routes: [
        {
          path: '/',
          meta: {
            // default, use <title> or empty ''
          }
        },
        {
          path: '/t',
          meta: {
            title: 'string title'
          }
        },
        {
          path: '/t2',
          meta: {
            title: function () {
              // this -> to in router.afterEach(to)
              return this.name
            }
          }
        }
      ]
})

RouterTitle(router)

new Vue({
    router
    // ...
})
```

##### Advance

```JavaScript
const store = new Vuex.Store({
    state: { test: 1 }
})

const router = new Router({
    routes: [
        {
          path: '/',
          meta: {
            title: function (store, customObject, num /*, ...*/) {
                return `${store.state.test}${customObject.test}${num}` // '123'
            }
          }
        }
      ]
})

RouterTitle(router, store, {
    // custom
    test: 2
}, 3 /*, ...*/)
```
