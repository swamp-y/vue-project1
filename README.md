# 这是一个vue mini项目

## 技术改变世界  

## 1、制作首页路由组件

### mui、mint-ui 制作头部底部，更改linkActiveClass为路由高亮类

### 中部放置路由router-view，根据tabbar路由规则匹配不同页面主体


## 2、制作四个页面组件

### swiper轮播图、六宫格导航，页面组件切换动画

## 3、改造新闻资讯链接

### 资讯列表展示，路由传值，内容页评论

## 4、图片分享路由模块 

### 利用mui制作顶部scroll滚动控件,需初始化

```
    mui('.mui-scroll-wrapper').scroll({
	deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
});

```

## 5、商品购买页面，

### 加入购物车的小球动画以及在不同滑动距离的动画兼容
### 核心点：vuex，商品购买数量的不同组件传值

### 逻辑记录：
### 通过change事件监听商品数量输入框的不同情况下的变换，通过getcount事件调用，把商品数量传递给父组件（商品详情页面）
### 点击加入购物车，拼接出一个商品对象，加载vuex，将对象增加给vuex的state中，判断是否存在此商品，有则数量属性相加，无则创建新对象，以便于底部栏调用vuex中所保存商品信息对象的数量总和

```
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
            }
        }
    })

```

