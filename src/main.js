import Vue from 'vue'
import VueRouter from 'vue-router';
import Mint from 'mint-ui';
import VueResource from 'vue-resource';
import 'mint-ui/lib/style.css'
import '../static/mui/dist/css/mui.min.css'

import App from './App.vue'
import home from './components/home/home.vue'
import newsmsg from './components/news/newsmsg.vue'

Vue.use(Mint);
Vue.use(VueRouter);
Vue.use(VueResource);

var router = new VueRouter({
  routes:[
    {path:'/',redirect:'/home'},
    {path:'/home',component:home},
    {path:'/newsmsg',component:newsmsg}
  ]
});

new Vue({
  el:'#app',
  render:function (create) {
      return create(App);
  },
  router,
})
