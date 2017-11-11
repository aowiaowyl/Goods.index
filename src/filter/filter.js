import Vue from 'vue'
import Moment from 'moment'

Vue.filter('datafmt',function(input,fmt){
    return Moment(input).format(fmt)
})