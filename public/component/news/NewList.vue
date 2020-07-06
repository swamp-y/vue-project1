<template>
    <div>
        <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="item in this.datalist" :key="item.id">
					<router-link :to="'/home/listinfo/' + item.id">
						<img class="mui-media-object mui-pull-left" :src="item.src">
						<div class="mui-media-body">
							{{item.title}}
							<p class='mui-ellipsis'>{{ item.msg }}</p>
						</div>
					</router-link>
				</li>
				

			</ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            datalist:[
                {msg:'今天天气真好好好',title:'就感觉', id:1, src:'https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3984473917,238095211&fm=26&gp=0.jpg'},
                {msg:'双手成就梦想',title:'该公司', id:2 ,src:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1285491933,53561870&fm=26&gp=0.jpg'},
                {msg:'故人西辞黄鹤楼',title:'二哥哥', id:3, src:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2184108575,3206905320&fm=26&gp=0.jpg'},
                {msg:'烟花三月下扬州',title:'的百分比', id:4, src:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3460796675,1098175894&fm=26&gp=0.jpg'},
                {msg:'天若有情天亦老',title:'爽肤水', id:5, src:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3243269279,3379379857&fm=26&gp=0.jpg'},
                {msg:'水调歌头明月几时有',title:'电放费', id:6, src:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3338683807,1075289095&fm=26&gp=0.jpg'},
                {msg:'凉风度秋海，吹我乡思飞',title:'舒服舒服', id:7, src:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1319446052,130726892&fm=26&gp=0.jpg'},
                {msg:'寒水依痕，春意渐回，沙际烟阔',title:'是懂法守法', id:8, src:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3893539643,3052658882&fm=26&gp=0.jpg'},
                {msg:'水调歌头明月几时有',title:'电放费', id:9, src:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3338683807,1075289095&fm=26&gp=0.jpg'},
                {msg:'凉风度秋海，吹我乡思飞',title:'舒服舒服', id:10, src:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1319446052,130726892&fm=26&gp=0.jpg'},
                {msg:'寒水依痕，春意渐回，沙际烟阔',title:'是懂法守法', id:11, src:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3893539643,3052658882&fm=26&gp=0.jpg'},
                {msg:'吏情更觉沧洲远，老大徒伤未拂衣',title:'水电费费', id:12,src:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3446250321,568772210&fm=26&gp=0.jpg'}
            ]
        }
    },
}
</script>

<style  scoped>

</style>