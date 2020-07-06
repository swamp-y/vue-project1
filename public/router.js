import VueRouter from 'vue-router'
// Vue.use(VueRouter)

//导入页面路由组件
import home from './component/tab/Home.vue'
import member from './component/tab/Member.vue'
import search from './component/tab/Search.vue'
import shop from './component/tab/Shop.vue'
import newlist from './component/news/NewList.vue'
import listinfo from './component/news/ListInfo.vue'
import imglist from './component/imglist/ImgList.vue'
import imginfo from './component/imglist/ImgInfo.vue'
import goodslist from './component/Goods/GoodList.vue'
import goodsinfo from './component/Goods/GoodsInfo.vue'
//创建路由
var router = new VueRouter({
    //配置路由规则
    routes:[
        //主页路由
        {path:'/', redirect: '/home'},
        {path: '/home', component: home,},
        {path: '/member', component: member},
        {path: '/search',component: search},
        {path: '/shop', component: shop},
        // 新闻路由
        {path: '/home/newlist',component: newlist},
        {path: '/home/listinfo/:id', component: listinfo},
        //图片分享路由
        {path: '/home/imglist',component: imglist},
        {path: '/home/imginfo/:id', component: imginfo},
        // 商品购买路由
        {path: '/home/goodslist', component: goodslist},
        {path: '/home/goodsinfo/:id', component: goodsinfo}
        
    ],
    linkActiveClass: 'mui-active'
})

export default router