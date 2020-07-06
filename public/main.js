//导入vue
import Vue from 'vue'

//导入vue组件
import app from './App.vue'

//按需导入mint-ui顶部栏、轮播图
// import { Header,Swipe, SwipeItem,Button, Lazyload } from 'mint-ui';
// import 'mint-ui/lib/style.css'
// Vue.component(Header.name, Header);    
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.component(Button.name, Button);
// Vue.use(Lazyload);

//整个导入mint-ui
import Mint from 'mint-ui';
Vue.use(Mint);
import 'mint-ui/lib/style.css'


//导入mui
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

//导入路由
import VueRouter from 'vue-router'
//安装路由
Vue.use(VueRouter)
//导入独立路由
import router from './router.js'

import VueResource from 'vue-resource'
Vue.use(VueResource)

//创建vm
var vm = new Vue({
    el:'#app',
    render: c => c(app),
    router
})