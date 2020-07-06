<template>
    <div class="goods-container">
        <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<myswiper></myswiper>
					</div>
				</div>
		</div>

        <div class="mui-card">
				<div class="mui-card-header">页眉</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						包含页眉页脚的卡片，页眉常用来显示面板标题，页脚用来显示额外信息或支持的操作（比如点赞、评论等）
					</div>
				</div>
		</div>


        <div class="mui-card">
				<div class="mui-card-header">页眉</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						包含页眉页脚的卡片，页眉常用来显示面板标题，页脚用来显示额外信息或支持的操作（比如点赞、评论等）
					</div>
				</div>
				<div class="mui-card-footer">页脚</div>
			</div>
    </div>
</template>

<script>

import myswiper from '../overall/MySwiper.vue'

export default {
    data() {
        return {
            
        }
    },
    methods: {
        
    },
    components:{
        myswiper
    }
}
</script>

<style scoped>
    .goods-container{
        background-color: #efefef;
        overflow: hidden;
    }
</style>