<template>
    <div class="imginfo">
        <h4 class="imginfoTt">title</h4>
        <span class="imginfoTime">time 0次浏览</span>
        <div class="mui-content">
		        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <a href="#">
		                    <span class="mui-icon mui-icon-home"></span>
		                </a>
                    </li>
		        </ul> 
		</div>
        <p>摘要</p>
        <comment :id='id'></comment>
    </div>
</template>

<script>
import comment from '../commet/comment'
export default {
    data(){
        return {
            id:37,
        }
    },
    components:{
        comment:comment,
    },
    created(){
        
    },

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
</style>
