<template>
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item  v-for="(item,index) in list" :key="index">
                <img :src="item.img">
            </mt-swipe-item>
        </mt-swipe>

        <div class="mui-content">
		        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <router-link to="/newsmsg">
		                    <span class="mui-icon mui-icon-home"></span>
		                    <div class="mui-media-body">新闻资讯</div>
                        </router-link>
                    </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <a href="#">
		                    <span class="mui-icon mui-icon-email"></span>
		                    <div class="mui-media-body">图片分享</div>
                        </a>
                    </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <a href="#">
		                    <span class="mui-icon mui-icon-chatbubble"></span>
		                    <div class="mui-media-body">商品购买</div>
                        </a>
                    </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <a href="#">
		                    <span class="mui-icon mui-icon-location"></span>
		                    <div class="mui-media-body">留言</div>
                         </a>
                    </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <a href="#">
		                    <span class="mui-icon mui-icon-search"></span>
		                    <div class="mui-media-body">视频专区</div>
                        </a>
                    </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <a href="#">
		                    <span class="mui-icon mui-icon-phone"></span>
		                    <div class="mui-media-body">联系我们</div>
                        </a>
                    </li>
		        </ul> 
		</div>
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
        this.getImg();
    },
    methods:{
        getImg(){
            var url = common.testApi+'/api/getlunbo';
            this.$http.get(url).then(function(response){
                var data = response.body;
                if(data.status!=0){
                    Toast('数据加载异常')
                    return;
                }
                this.list=data.message;
            })
        }
    }
}
</script>

<style scoped>
.mint-swipe {
    height: 300px;
    width: 100%;
}
.mint-swipe img{
    height: 300px;
    width: 100%;
}
.mui-grid-view.mui-grid-9{
    background-color: #fff;
    border-top: 0;
    border-left: 0;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
    border-right: 0;
    border-bottom: 0;
}
.mui-icon-home:before,
.mui-icon-email:before,
.mui-icon-chatbubble:before,
.mui-icon-location:before,
.mui-icon-search:before,
.mui-icon-phone:before{
    content: '';
    display: inline-block;
    width: 40px;
    height: 40px;
}
.mui-icon-home:before{
    background: url('../../../static/img/1.png');
    background-repeat: round;
}
.mui-icon-email:before{
    background: url('../../../static/img/1.png');
    background-repeat: round;
}
.mui-icon-chatbubble:before{
    background: url('../../../static/img/2.png');
    background-repeat: round;
}
.mui-icon-location:before{
    background: url('../../../static/img/3.png');
    background-repeat: round;
}
.mui-icon-search:before{
    background: url('../../../static/img/4.png');
    background-repeat: round;
}
.mui-icon-phone:before{
    background: url('../../../static/img/2.png');
    background-repeat: round;
}
</style>
