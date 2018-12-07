import { assert } from './utils';
export default function (router) {
  for (var _len = arguments.length, argv = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    argv[_key - 1] = arguments[_key];
  }

  assert(typeof(router) === 'object' && typeof router.afterEach === 'function', "require 'vue-router' as first argument");
  var orgin = document.title;
  router.afterEach(function (to) {
    document.title = function () {
      if (to && to.meta && to.meta.title) {
        var title = to.meta.title;

        switch (typeof(title)) {
          case 'function':
            return title.apply(to, argv || []);

          case 'string':
            return title;
        }
      }
    }() || orgin || '';
  });
}
