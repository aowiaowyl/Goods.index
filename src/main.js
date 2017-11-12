import Vue from 'vue'
import App from '@/App.vue'
import router from './router'

import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(Mint)

import VuePreview from 'vue-preview'
Vue.use(VuePreview)

import VueResource from 'vue-resource'
Vue.use(VueResource)

import './assets/mui/dist/css/mui.min.css'
import '@/filter/filter'

new Vue({
  el:'#app',
  render:function (create) {
      return create(App);
  },
  router,
})