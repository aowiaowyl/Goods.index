import Vue from 'vue'
import VueRouter from 'vue-router';
import Mint from 'mint-ui';
import VueResource from 'vue-resource';
import Moment from 'moment';
import 'mint-ui/lib/style.css';
import '../static/mui/dist/css/mui.min.css';

import App from './App.vue'
import home from './components/home/home.vue'
import newsmsg from './components/news/newsmsg.vue'
import newsinfo from './components/news/newsinfo.vue'

Vue.use(Mint);
Vue.use(VueRouter);
Vue.use(VueResource);

Vue.filter('datafmt',function(input,fmt){
  return Moment(input).format(fmt);
})

var router = new VueRouter({
  routes:[
    {path:'/',redirect:'/home'},
    {path:'/home',component:home},
    {path:'/newsmsg',component:newsmsg},
    {path:'/newsinfo:id',component:newsinfo}
  ]
});

new Vue({
  el:'#app',
  render:function (create) {
      return create(App);
  },
  router,
})
