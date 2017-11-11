<template>
  <div>
      <h4 class="comtxt">提交评论</h4>
      <hr>
      <textarea v-model="postcontent" class='comContent' placeholder="请输入想要评论的内容..."></textarea>
      <mt-button @click="postcom" :disabled="postcontent==''" type="primary"  size="large">提交</mt-button>

      <h4 class="comtxt">评论列表</h4>
      <div v-for="(item,index) in list" :key='index'>
         <div class="title">
            <span>第{{index+1}}楼</span>
            <span>名称:{{item.user_name}}</span>
            <span>时间:{{item.add_time | datafmt('YYYY-MM-DD')}}</span>
	     </div>
	     <ul class="mui-table-view">
			 <li class="mui-table-view-cell">{{item.content}}</li>
         </ul>
      </div>
      <mt-button @click='getcom(page+=1)' type="primary"  size="large" plain>加载更多</mt-button>
  </div>
</template>

<script>
import common from '../common'
import {Toast} from 'mint-ui'
export default {
    props:['id'],
    data(){
        return{
            postcontent:'',
            page:1,
            list:[]
        }
    },
    created(){
        this.getcom();
    },
    methods:{
        postcom:function(){
            var url = common.testApi+'/api/postcomment/'+this.id
            this.$http
            .post(url,{content:this.postcontent},{emulateJSON:true})
            .then(function(response){
                Toast(response.body.message)
                var newcom = [
                    {
                        user_name:'匿名用户',
                        add_time:new Date(),
                        content:this.postcontent
                    }
                ]
                this.list=newcom.concat(this.list)
                this.postcontent=''
            })
        },
        getcom:function(){
            var url  = common.testApi+'/api/getcomments/'+this.id+'?pageindex='+this.page
            this.$http.get(url).then(function(response){
                if(this.page==1){
                    this.list=response.body.message
                }else{
                    this.list=this.list.concat(response.body.message);
                }
                
            })
        }
    }
}
</script>

<style scoped>
.comtxt {    
    margin: 10px 0;
    color:rgb(0,162,232)
    }
.comContent {
    margin: 0;
}
.title{
    margin: 10px 0;
	color: #6d6d6d;
	font-size: 15px;
}
</style>
