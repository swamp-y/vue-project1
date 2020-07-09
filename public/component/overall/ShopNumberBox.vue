<template>
   
        <div class="mui-numbox" data-numbox-min='1' data-numbox-max='99'>
               <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
               <input id="test" class="mui-input-numbox" type="number"   :value="goodscount" @change="countChange" ref="nbox" />
               <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
		</div>
    
</template>

<script>
import mui from '../../lib/mui/js/mui.min.js'

export default {
    data() {
        return {
            
        }
    },
    methods:{
        countChange(){
            // console.log(this.$refs.nbox.value);
            this.$store.commit("updata", {id: this.countId, count:this.$refs.nbox.value})            
        }
    },
    mounted() {
        mui(".mui-numbox").numbox()
    },
    props:["goodscount","countId"]
}
</script>

<style >
    
    .mui-numbox {
        height: 25px;
    }
</style>