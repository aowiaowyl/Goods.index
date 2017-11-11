import Vue from 'vue'
import App from '@/App.vue'
import router from './router'
import Mint from 'mint-ui'
import VueResource from 'vue-resource'

import 'mint-ui/lib/style.css'
import './assets/mui/dist/css/mui.min.css'
import '@/filter/filter'

Vue.use(Mint)
Vue.use(VueResource)

new Vue({
  el:'#app',
  render:function (create) {
      return create(App);
  },
  router,
})