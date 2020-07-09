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
import './lib/mui/css/app.css'
//导入路由
import VueRouter from 'vue-router'
//安装路由
Vue.use(VueRouter)
//导入独立路由
import router from './router.js'

// 注册vuex
import Vuex from 'vuex'
Vue.use(Vuex)

// 注册resource
import VueResource from 'vue-resource'
Vue.use(VueResource)

//每次进入网站调用本地存储
var car = JSON.parse(localStorage.getItem('car') || '[]')
//创建vuex状态管理
var store = new Vuex.Store({
    state: {  //this.$store.state.****
        car: car,  //储存购物车的商品数据 
        
    },
    mutations: {  //this.$store.commit("方法名称"，参数 )
        addcomm(state,obj){
            var flag = false
            state.car.some( item =>{
                
                //如果有此商品则增加数量
                if(obj.id == item.id){
                    item.count += parseInt(obj.count);
                    flag = true
                    return true
                }
            }
            )
            if(!flag){
                state.car.push(obj)
            }
             //添加到本地储存
             localStorage.setItem("car",JSON.stringify(state.car))
        },
        updata(state,objj){
            console.log(objj);
            
            state.car.some( item =>{
                if(item.id == objj.id){
                    
                    item.count = parseInt(objj.count)
                    return true
                    
                }

            })
            //添加到本地储存
            localStorage.setItem("car",JSON.stringify(state.car))
        },
        remove(state,id){
            state.car.some( (item, index) => {
                if(item.id == id){
                    state.car.splice( index, 1)
                    return true
                }
            })
            //添加到本地储存
            localStorage.setItem("car",JSON.stringify(state.car))
        }
    },
    getters: {  //this.$store.getters.***
        getcount(state){
            var i = 0;
            state.car.forEach(
                item =>{
                    i +=item.count
                }
            )

            return i
        },
        getOneCount(state){
            var a ={};
            state.car.forEach(
                item =>{
                    a[item.id] = item.count
                }
            )
            return a
        },
        getAllPrice(state){
            var tag = {
                count: 0,
                price : 0
            }
            state.car.forEach( item =>{
                tag.count+= item.count;
                tag.price+=item.price*item.count
            })
            return tag
        }
    }
})

//创建vm
var vm = new Vue({
    el:'#app',
    render: c => c(app),
    router,
    store
})