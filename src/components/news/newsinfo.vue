<template>
    <div class="newsinfo">
        <h4 class="newstitle">{{info.title}}</h4>
        <span class="newstime">
            {{info.add_time | datafmt('YYYY-MM-DD')}} 浏览量:{{info.click}}    
        </span>
        <div class="newscontent" v-html="info.content"></div>

        <comment :id='id'></comment>
    </div>
</template>

<script>
import common from '../common.js'
import comment from '../suncom/comment'
import {Toast} from 'mint-ui'
export default {
    data(){
        return {
            id:'',
            info:{}
        }
    },
    created(){
        this.id=this.$route.params.id
        this.getinfo();
    },
    components:{
        comment:comment,
    },
    methods:{
        getinfo:function(){
            var url = common.testApi+'/api/getnew/'+this.id;
            this.$http.get(url).then(function(response){
                if(response.body.status!=0){
                    Toast('获取新闻详情失败')
                    return
                }
                this.info=response.body.message[0];
            })
        }
    }
}
</script>

<style scoped>
    .newsinfo {
        padding: 10px;
    }
    .newstitle {    
        color:rgb(0,162,232)
    }
    .newstime {
        font-size: 14px;
        color: rgba(0,0,0,0.5);
    }
    .newscontent {
        margin-top: 5px;
    }
</style>
