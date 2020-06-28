<template>
    <div>
        <!-- <h1>home组件</h1> -->

        <!-- 轮播图部分 -->
        <mt-swipe :auto="4000" class="swiper-banner"> 
            <mt-swipe-item>
                <img src="../../lib/img/bg1.jpg" alt="">
            </mt-swipe-item>
            <mt-swipe-item>
                <img src="../../lib/img/bg2.jpg" alt="">
            </mt-swipe-item>        
        </mt-swipe>

        <!-- 导航六宫格 -->
         <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-home"></span>
		                    <div class="mui-media-body">新闻资讯</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-email"></span>
		                    <div class="mui-media-body">图片分享</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-chatbubble"></span>
		                    <div class="mui-media-body">商品购买</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-location"></span>
		                    <div class="mui-media-body">留言反馈</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-search"></span>
		                    <div class="mui-media-body">视频专区</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-phone"></span>
		                    <div class="mui-media-body">联系我们</div></a></li>
		           
		        </ul> 
    </div>
</template>

<script>
        export default{
            data() {
                return {
                    
                }
            },
            created() {
                this.gitlunbo()
            },
            methods: {
                gitlunbo(){
                    console.log("轮播图数据");                     
                    // this.$http.get('../../api/').then(result =>{                                          
                    // console.log("数据"+result.body)
                    // })
                }
            },
        }
</script>

<style  scoped>
    .swiper-banner{
        height: 200px;

    }
    .swiper-banner img{
        height: 100%;
        width: 100%;
    }
    .mui-table-view{
        background-color: #fff;
        border: none;
    }
    .mui-grid-view.mui-grid-9 .mui-table-view-cell{
        border: none;
    }
</style>