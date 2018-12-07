import { assert } from './utils'

export default function (router, ...argv) {
  assert(typeof router === 'object' && typeof router.afterEach === 'function', `require 'vue-router' as first argument`)
  const orgin = document.title
  router.afterEach(function (to) {
    document.title = (function () {
      if (to && to.meta && to.meta.title) {
        const title = to.meta.title
        switch (typeof title) {
          case 'function':
            return title.apply(to, argv || [])
          case 'string':
            return title
        }
      }
    })() || orgin || ''
  })
}
