import VueRouter from 'vue-router'
// Vue.use(VueRouter)

//导入页面路由组件
import home from './component/tab/Home.vue'
import member from './component/tab/Member.vue'
import search from './component/tab/Search.vue'
import shop from './component/tab/Shop.vue'

//创建路由
var router = new VueRouter({
    //配置路由规则
    routes:[
        {path:'/', redirect: '/home'},
        {path: '/home', component: home},
        {path: '/member', component: member},
        {path: '/search',component: search},
        {path: '/shop', component: shop}
    ],
    linkActiveClass: 'mui-active'
})

export default router