// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {sum,minus} from './util'
import axios from 'axios'
import VueLazyload from 'vue-lazyload'

Vue.use( VueLazyload , {
	loading: './../static/loading/loading-bars.svg'
})
Vue.config.productionTip = false

console.log(`sum:${sum(1,2)}`);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',   
  components: { App }
})
