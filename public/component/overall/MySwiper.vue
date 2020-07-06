<template>
    <div>
         <mt-swipe :auto="4000" class="swiper-banner"> 
            <mt-swipe-item v-for="item in list" :key="item">
                <img :src="item" alt="">
            </mt-swipe-item>
                  
        </mt-swipe>
    </div>
</template>

<script>
export default {
    props:["list"]
}
</script>

<style scoped>
    .swiper-banner{
        height: 200px;

    }
    .swiper-banner img{
        height: 100%;
        width: 100%;
    }
    .mui-table-view{
        background-color: #fff;
        border: none;
        overflow-x: hidden;
    }
    .mui-grid-view.mui-grid-9 .mui-table-view-cell{
        border: none;
    }
</style>