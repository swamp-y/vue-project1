<template>
    <div>
        <div class="mui-card" v-for="item in list" :key="item.id">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<mt-switch ></mt-switch>
                         <img src="https://img13.360buyimg.com/n7/jfs/t1/51521/12/10437/169738/5d780c40Eda0f0e1d/ccbc7745b343f87d.jpg" alt="">
                         <div class="info">
                             <p>iphone 11 pro max 全网通黑色款</p>
                             <div>
                                 <span class="price">￥{{ item.price}}</span>
                                <shopnumberbox :goodscount= $store.getters.getOneCount[item.id] :countId = item.id></shopnumberbox>
                                <a href="" @click.prevent="remove(item.id)">删除 </a>
                             </div>
                         </div>
					</div>
                   
				</div>
		</div>
         <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner allprice">
						<div class="left">
                            <p>总计（不含运费）</p>
                            <p>已勾选<span class="red">{{this.$store.getters.getAllPrice.count}}</span>件，总价<span class="red">￥{{this.$store.getters.getAllPrice.price}}</span></p>
                        </div>
                        <mt-button type="danger">结算</mt-button>
					</div>
				</div>
		</div>
    </div>
</template>

<script>
import shopnumberbox from '../overall/ShopNumberBox.vue'
export default{
    data() {
        return { 
           
            list: []
        }
    },
    created() {
        this.getlist()
    },
    methods: {
        getlist(){
            this.list = this.$store.state.car 
        },
        remove(id){
            this.$store.commit("remove",id)
        }
    },
    components:{
        shopnumberbox
    }
}
</script>

<style scoped>
    .mui-card img{
        width:60px;

    }
    .mui-card-content-inner{
        display: flex;
        align-items: center;
    }
    .price{
        color: red;
    }
    .info p{
        color: #333;
        font-size: 15px;
        font-weight: bold;
    }
    .allprice{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .red{
        color: red;
    }
</style>