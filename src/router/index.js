import Vue from 'vue'
import Router from 'vue-router'

import home from '@/components/home/home.vue'
import newsmsg from '@/components/news/newsmsg.vue'
import newsinfo from '@/components/news/newsinfo.vue'
import img from '@/components/imgs/img.vue'
import imginfo from '@/components/imgs/imginfo.vue'

Vue.use(Router)

export default new Router({
  routes: [
      {path:'/',redirect:'/home'},
      {path:'/home',component:home},
      {path:'/news/newsmsg',component:newsmsg},
      {path:'/news/newsinfo:id',component:newsinfo},
      {path:'/img/imglist',component:img},
      {path:'/img/imginfo:id',component:imginfo}
  ]
})