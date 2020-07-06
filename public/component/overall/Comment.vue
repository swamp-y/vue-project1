<template>
    <div>
        <h3>评论区</h3>
        <textarea name="" id="ipt1" cols="30" rows="5" v-model="inpval" placeholder="吐槽开始"></textarea>
        <mt-button type="primary" size="large" @click="pushm">发表评论</mt-button>
        <ul>
            <li v-for="item in this.messgs" :key="item.id">
                <p>
                    <span>{{ item.word }}</span>
                    <span>{{ item.time }}</span>
                </p>
            </li>
        </ul>
        <mt-button type="danger" size="large" @click=" " plain>加载更多</mt-button>
    </div>
</template>

<script>
import { Toast } from 'mint-ui';

export default {
    data() {
        return {
            inpval:'',
            tag:{},
            messgs:[
                {word:"今天天气不错啊", time:'2020-02-02', id:'1'},
                {word:"考试的会计考试的法拉盛", time:'2020-02-02', id:'2'},
                {word:"水电费离开的接口螺丝刀", time:'2020-02-02', id:'3'},
                {word:"看是否拉黑的发生率的", time:'2020-02-02', id:'4'}
            ]
        }
    },
    methods: {
        pushm(){
            
            if(this.inpval){
                 this.messgs.unshift({word: this.inpval, time:'2020-02-02'});
                 this.inpval=''
            }else{
                Toast('说点什么呗')
            }
            
           
           
        }
    },
}
</script>

<style lang="">
    
</style>