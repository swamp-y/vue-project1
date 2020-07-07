<template>
    <div>
         <mt-swipe :auto="4000" class="swiper-banner"> 
            <mt-swipe-item v-for="item in list" :key="item.id">
                <img :src="item.src" alt="" :class="{'full':isfull}">
            </mt-swipe-item>
                  
        </mt-swipe>
    </div>
</template>

<script>
export default {
    props:["list","isfull"]
}
</script>

<style scoped>
    .swiper-banner{
        height: 200px;
        text-align: center;
    }
    .swiper-banner img{
       
        height: 100%;
    }
    .mui-table-view{
        background-color: #fff;
        border: none;
        overflow-x: hidden;
    }
    .mui-grid-view.mui-grid-9 .mui-table-view-cell{
        border: none;
    }

    .full{
        width: 100%;
    }
</style>