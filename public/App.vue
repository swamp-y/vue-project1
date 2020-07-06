<template>
    <div class="app-container">
        <!-- 顶部栏 -->
        <mt-header fixed title="大雄的顶部栏" class="mt-header"></mt-header>

        <!-- 中部占位路由 -->
        <transition >
			<router-view></router-view>
		</transition>
        

        <!-- 底部栏 -->
        <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item " to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/member">
				<span class="mui-icon mui-icon-email"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" to="/shop">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">9</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/search">
				<span class="mui-icon mui-icon-search   "></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
		 
    </div>
</template>

<script>
    
</script>

<style  scoped>
    .app-container{
        padding-top: 40px;
		padding-bottom: 50px;
		overflow-x: hidden;
    }

	.v-enter{
		opacity: 0;
		transform: translateX(100%);
	}
	.v-leave-to{
		transform: translateX(-100%);
		position: absolute;
	}
	.v-enter-active,.v-leave-active{
		transition: all .5s ease;
		overflow-x: hidden;
	}



	.mint-header.is-fixed{
		z-index: 99;
	}
</style>