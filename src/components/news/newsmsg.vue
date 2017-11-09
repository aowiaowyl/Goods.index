<template>
  <div>
      <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="(item,index) in list" :key='index'>
					<router-link :to='"/newsinfo"+item.id'>
						<img class="mui-media-object mui-pull-left" :src="item.img_url">
						<div class="mui-media-body">
							{{item.title}}
							<p class='mui-ellipsis'>{{item.zhaiyao}}</p>
						</div>
                        <div class="news-time">
                            <div class="news-addtime">
                                时间:{{item.add_time | datafmt('YYYY-MM-DD HH:mm:ss')}}
                            </div>
                            <p class="news-click">点击:{{item.click}}</p>
                        </div>
					</router-link>
				</li>
			</ul>
  </div>
</template>

<script>
import {Toast} from 'mint-ui'
import common from '../common.js'
export default {
    data(){
        return{
            list:{}
        }
    },
    created(){
        this.geinews();
    },
    methods:{
        geinews:function(){
            var url = common.testApi+'/api/getnewslist';
            this.$http.get(url).then(function(response){
                if(response.body.status!=0){
                    Toast('请求信息出错')
                    return
                }
                this.list=response.body.message
            })
        }
    }
};
</script>

<style scoped>
.mui-table-view .mui-media img{
    width: 60px;
    height: 60px;
    min-width:60px;
}
.news-time,.news-click {
    color:rgb(0,162,232);
    font-size: 12px;
    position: relative;
}
.news-addtime {
    display: inline-block;
    position: absolute;
}
.news-click {
    display: inline-block;
    position: absolute;
    right: 10px;
}
</style>
