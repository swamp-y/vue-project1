<template >
    <div>
        <!-- 顶部栏 -->
        <div id="slider" class="mui-slider ">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll">
						<a :class="['mui-control-item ', item.id == 0 ? 'mui-active' : '']" v-for="item in this.msg1" :key="item.id">
							{{ item.name }}
						</a>
						
					</div>
				</div>

		</div>
        <!-- 内容列表 -->
        <ul>
            <li v-for= "item in this.msg2" :key="item.id">
                <router-link :to="'/home/ImgInfo/'+item.id">
                    <img v-lazy="item.src">
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
//导入muijs文件
import mui from '../../lib/mui/js/mui.min.js'


export default {
    data() {
        return {
            msg1:[
                {id:0, name:'全部'}, {id: 1, name:  '旅游'}, {id: 2, name: '美食'}, 
                {id: 3, name: '宠物'}, {id: 4, name: '情感'}, {id: 5, name: '军事'},{id: 6, name: '科技'}, {id: 7, name: '其他'}],
            msg2: [
                {id: 0, src: 'https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3984473917,238095211&fm=26&gp=0.jpg'},
                {id: 1, src: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1285491933,53561870&fm=26&gp=0.jpg'},
                {id: 2, src: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2184108575,3206905320&fm=26&gp=0.jpg'},
                {id: 3, src: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3460796675,1098175894&fm=26&gp=0.jpg'},
                {id: 4, src: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3243269279,3379379857&fm=26&gp=0.jpg'}
            ]
        }
    },
    mounted() {
        //初始化
        mui('.mui-scroll-wrapper').scroll({
	    deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
    },
    methods: {
       
    },
}
</script>

<style scoped>
    *{
        touch-action: pan-y;
    }
    image[lazy=loading] {
        width: 40px;
        height: 300px;
        margin: auto;
    }
    img{
        max-width: 100%;

    }
    ul{
        padding: 0;
        margin: 0;
        padding: 5px 10px;
    }
    li{
        list-style: none;
    }
</style>