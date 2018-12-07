// vue.config.js
module.exports = {
  pages: {
    index: {
      entry: 'example/main.js',
      title: 'web title'
    }
  },
  productionSourceMap: false,
  runtimeCompiler: true // to use the template option in Vue components, extra 10kb payload
}
