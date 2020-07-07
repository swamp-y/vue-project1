<template>
    <div class="goods-container">
        <!-- 购物车动画球 -->
        <transition 
            @before-enter='beforeEnter' 
            @enter="enter"
            @after-enter="afterEnter">
            <div class="ball" v-show="flag" ref="ball"></div>
        </transition>
        
        <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<myswiper :list="list" :isfull=false></myswiper>
					</div>
				</div>
		</div>

        <div class="mui-card">
				<div class="mui-card-header">商品的标题名称</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p>
                            市场价：<del>12000</del> &nbsp;&nbsp;销售价：<span class="new-price">￥9999</span>
                        </p>
                        <div>
                            <p class="np">购买数量：</p>
                        <!-- 数字按钮位置 -->
                        <numberbox @getcount="getcarcount"></numberbox>
                        </div>
                        <p>
                            <mt-button type="primary">立即购买</mt-button>
                            <mt-button type="danger" @click="balldown">加入购物车</mt-button>
                        </p>
					</div>
				</div>
		</div>


        <div class="mui-card">
				<div class="mui-card-header">商品参数</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p>商品型号：</p>
                        <p>商品颜色：</p>
                        <p>商品大小：</p>
					</div>
				</div>
				<div class="mui-card-footer">
                    <mt-button type="primary" size="large" plain @click="getdec(id)">图文介绍</mt-button>
                    <mt-button type="danger" size="large" plain>商品评论</mt-button>
                </div>
			</div>
    </div>
</template>

<script>

import myswiper from '../overall/MySwiper.vue'
import mui from '../../lib/mui/js/mui.min.js'
import numberbox from '../overall/NumberBox.vue'
export default {
    data() {
        return {
            flag: false,
            id: this.$route.params.id,
            list: [
                {id: 0,price:9999, src: "https://img12.360buyimg.com/n1/s450x450_jfs/t1/59022/28/10293/141808/5d78088fEf6e7862d/68836f52ffaaad96.jpg"},
                {id: 1, price: 897, src: "https://img14.360buyimg.com/n0/jfs/t1/60950/5/9837/104923/5d780897E82963984/08fed8837c92433a.jpg"},
                {id: 2, price: 7664, src: "https://img14.360buyimg.com/n0/jfs/t1/80220/18/9892/163090/5d78089cEda2f9674/da3b18358e68cfca.jpg"}
            ],
            carcount:0
        }
    },
    methods: {
        getdec(id){
            this.$router.push('/home/goodsdec/'+id)
        },

        // 加入购物车动画及功能
        balldown(){
            this.flag = !this.flag

            //vuex公共储存
            var objcom = {
                id: this.id,
                count: this.carcount,
                price:9999
            }
            this.$store.commit("addcomm",objcom)
        },
        // 小球生命周期函数
        beforeEnter(el){
            el.style.transform = "translate(0, 0)"
        },
        enter(el, done){
            el.offsetWidth;
            const balldre = this.$refs.ball.getBoundingClientRect();
            const footbar = document.getElementById('badge').getBoundingClientRect();
            const runx = footbar.left - balldre.left;
            const runy = footbar.top - balldre.top;
            el.style.transform = `translate(${runx}px ,${runy}px)`;
            el.style.transition = "all 1s cubic-bezier(.37,-0.36,1,.56)";
            done()
        },
        afterEnter(el){
            this.flag = !this.flag;
        },
        //numberbox子组件向父组件传值
        getcarcount(count){
            this.carcount = count
        }
    },
    mounted() {
        mui(".mui-numbox").numbox()
    },
    components:{
        myswiper,
        numberbox
    }
}
</script>

<style scoped>
    .goods-container{
        background-color: #efefef;
        overflow: hidden;
    }
    .swiper-banner{
       height: 100%;

    }
    .new-price{
        color: red;
    }
    .np{
        display: inline-block;
    }
    
    .mui-card-footer{
        display: block;
    }
    .mui-card-footer button{
        margin: 10px 0;
    }

    .ball{
        width: 15px ;
        height: 15px ;
        background-color: red;
        border-radius: 50%;
        position: absolute;
        left: 150px;
        top: 385px;
        z-index: 99;
        
    }
</style>