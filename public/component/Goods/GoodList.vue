<template>
    <div>
        <Ul class="goodslist">
            <li v-for="item in this.msg1" :key="item.id" @click="getpush(item.id)">
                <img :src="item.src" alt="">
                <h3>{{ item.dec }}</h3>
            </li>
            
        </Ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            msg1:[
                {id: 0, src: "https://img13.360buyimg.com/n7/jfs/t1/120243/10/5235/142295/5eec30a7E8ce0d2f5/064a42343b13771a.jpg", dec:"iphone 1"},
                {id: 1, src: "https://img13.360buyimg.com/n7/jfs/t1/51521/12/10437/169738/5d780c40Eda0f0e1d/ccbc7745b343f87d.jpg", dec: "iphone 2"},
                {id: 2, src: "https://img14.360buyimg.com/n7/jfs/t1/114483/37/1360/145854/5e973ab1Ec8dc3e91/cdab3422b2886eed.jpg", dec: "iphone 3"},
                {id: 3, src: "https://img14.360buyimg.com/n7/jfs/t1/114483/37/1360/145854/5e973ab1Ec8dc3e91/cdab3422b2886eed.jpg", dec: "iphone 4"},
                {id: 4, src: "https://img14.360buyimg.com/n7/jfs/t1/149299/22/1873/61370/5efd806dE57b891f3/7cf53969e30ec7d3.jpg", dec: "ihpone 5"},
                {id: 5, src: "https://img11.360buyimg.com/n7/jfs/t1/137877/16/806/129100/5ee88654Ecb4c2543/90a92712d9b1ac71.jpg", dec: "iphone 6"},
                {id: 6, src: "https://img11.360buyimg.com/n7/jfs/t8755/265/1373043207/84322/3686a33a/59b8c305N63b991b2.jpg", dec: "iphone 7"}
            ]
        }
    },
    methods: {
         getpush(id){
            this.$router.push("/home/goodsinfo/"+id)
        }
    },
}
</script>

<style  scoped>
    li{
        list-style: none ;
        width: 49%;
        border:1px solid #ccc;
        box-shadow: 0 0 10px #ccc;
        padding: 3px;
        margin-bottom: 5px;
        }    
    .goodslist{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;;
        padding: 8px;
        margin: 0;
    }
    img{
        width: 100%;
    }
</style>