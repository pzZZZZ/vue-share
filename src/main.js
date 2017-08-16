// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import vueTouch from './plugin/index.js'

// console.log(MyPlugin.$myMethod)
// Vue.prototype.ajax = function () {
//   alert('aaaaaaa');
// };
// var  MyPlugin = require('./plugin/index.js')
import MyPlugin from './plugin/index.js'
Vue.use(MyPlugin)

var everyone = require('everyone');
console.log(everyone)


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
