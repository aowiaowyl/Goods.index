<template>
    <div class="imginfo">
        <h4 class="imginfoTt">{{imginfo.title}}</h4>
        <span class="imginfoTime">{{imginfo.add_time | datafmt('YYYY-MM-DD')}} {{imginfo.click}}次浏览</span>
        <hr>
        <div class="mui-content">
		        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li v-for="(item,index) in minimgs" :key='index'
                        class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
		                <img class="preview-img" @click="$preview.open(index,minimgs)" :src="item.src">
                    </li>
		        </ul> 
		</div>
        <div class="imgdesc" v-html="imginfo.content"></div>
        <comment :id='id'></comment>
    </div>
</template>

<script>
import comment from '../suncom/comment'
import common from '../common'
export default {
    data(){
        return {
            id:'',
            minimgs:[],
            imginfo:{}
        }
    },
    components:{
        comment:comment,
    },
    created(){
        this.id = this.$route.params.id,
        this.getimginfo(),
        this.getminimg()
    },
    methods:{
        getminimg:function(){
            var url = common.testApi+'/api/getthumimages/'+this.id
            this.$http.get(url).then(function(response){
                response.body.message.forEach(function(element) {
                   
                    var img = new Image()
                    img.src = element.src
                    element.w=img.width
                    element.h=img.height
                });
                this.minimgs=response.body.message
            })
        },
        getimginfo:function(){
            var url = common.testApi+'/api/getimageInfo/'+this.id
            this.$http.get(url).then(function(response){
                this.imginfo=response.body.message[0]
            })
        }
    }

}
</script>

<style scoped>
.imginfo {
        padding: 10px;
    }
.imginfoTt {
    color: rgb(0, 132, 232)
}
.imginfoTime {
    font-size: 12px;
    color: rgba(0,0,0,0.5)
}
.mui-grid-view.mui-grid-9 {
    border-top: 0;
    border-left: 0;
    background-color:white;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell {
    border-right: 0;
    border-bottom: 0;
}
hr {
    border: 0;
    background-color: rgba(0,0,0,0.3);
    height: 3px;
}
</style>
