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
      {path:'/newsmsg',component:newsmsg},
      {path:'/newsinfo:id',component:newsinfo},
      {path:'/img',component:img},
      {path:'/imginfo:id',component:imginfo}
  ]
})