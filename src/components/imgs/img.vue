<template>
    <div>
        <div class='cate'>
            <ul :style="{width:ulWidth+'px'}" class='imgnav'>
                <li @click="getimgs(0)">全部</li>
                <li @click='getimgs(id=item.id)' v-for='(item,index) in list' :key='index'>
                    {{item.title}}
                </li>
            </ul>
        </div>
        <div class="imgbox">
            <ul class="imglist">
                <router-link :to="'/imginfo'+item.id" class="imgli" v-for='(item,index) in imgs' :key='index'>
                    <img v-lazy="item.img_url" :src="item.img_url">
                    <div class="imgtext">
                        <h4>{{item.title}}</h4>
                        <p>{{item.zhaiyao}}</p>
                    </div>
                </router-link>
            </ul>
        </div>
        
    </div>
</template>

<script>
import common from '../common'
import {Toast} from 'mint-ui'
export default {
    data(){
        return{
            ulWidth:320,
            list:{},
            imgs:{},
            id:0
        }
    },
    created(){
        this.getnav();
        this.getimgs(this.id);
    },
    methods:{
        getnav:function(){
            var url = common.testApi+'/api/getimgcategory'
            this.$http.get(url).then(function(response){
                this.list=response.body.message
                this.ulWidth = (response.body.message.length+1) * 65;
            })
        },
        getimgs:function(id){
            var url = common.testApi+'/api/getimages/'+id;
            this.$http.get(url).then(function(response){
                if(response.body.status!=0){
                    Toast('获取图片列表失败')
                }
                this.imgs=response.body.message
            })
        }

    }
}
</script>

<style scoped>
.cate {
    width: 320px;
    max-width: 320px;
    overflow-x: auto;
    color:rgb(0,132,232)
}
.imgnav li{
    list-style: none;
    display: inline;
    font-size: 14px;
}
.imglist img {
    width: 100%;
    min-width: 320px;
    max-height:300px;
}
image[lazy=loading] {
  width: 40px;
  height: 300px;
  margin: auto;
  color:rgb(0,132,232)
}
.imglist .imgli {
    position: relative;
}
.imglist .imgtext {
    width: 100%;
    position: absolute;
    bottom: 5px;
    background-color: rgba(0,0,0,0.4);
    color: white;
}
.imgtext p {
    display: inline-block;
    max-height: 80px;
    overflow: hidden;
    color: white;
}
</style>
