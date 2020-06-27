//导入vue
import Vue from 'vue'
//导入vue组件
import app from './App.vue'
//导入mint-ui顶部栏
import { Header } from 'mint-ui';
import 'mint-ui/lib/style.css'
Vue.component(Header.name, Header);

//导入mui
import './lib/mui/css/mui.min.css'


//导入路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)


var router = new VueRouter({
    rules:[

    ]
})

//创建vm
var vm = new Vue({
    el:'#app',
    render: c => c(app),
    router
})