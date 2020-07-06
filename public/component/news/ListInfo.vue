<template>
    <div class="listinfo-con">
        <h2>前端 （网站前台部分）</h2>
        <p>
            <span>发布时间：2020-02-02</span>
            <span>作者：柯基</span>
        </p>
        <hr>
        <div>
这三个是前端开发中最基本也是最必须的三个技能。前端的开发中，在页面的布局时， HTML将元素进行定义，CSS对展示的元素进行定位，再通过JavaScript实现相应的效果和交互。虽然表面看起来很简单，但这里面需要掌握的东西绝对不会少。在进行开发前，需要对这些概念弄清楚、弄明白，这样在开发的过程中才会得心应手。
HTML
指的是超文本标记语言 (Hyper Text Markup Language)，这个也是我们网页最常用普通的语言了，经历了多个版本的发展，已经发展到5.0版了，得力于W3C建立的标准和规范，已普遍升级到了XHTML，XHTML 指可扩展超文本标签语言（EXtensible HyperText Markup Language）， XHTML 于2000年的1月26日成为 W3C 标准，是更严格更纯净的 HTML 代码，XHTML 的目标是取代 HTML。XHTML 与 HTML 4.01 几乎是相同的，XHTML 是作为一种 XML 应用被重新定义的 HTML，是一个 W3C 标准。W3C 将 XHTML 定义为最新的HTML版本。所有新的浏览器都支持 XHTML。
CSS
级联样式表（Cascading Style Sheet）简称“CSS”，通常又称为“风格样式表（Style Sheet）”，它是用来进行网页风格设计的。比如，如果想让链接字未点击时是蓝色的，当鼠标移上去后字变成红色的且有下划线，这就是一种风格。通过设立样式表，可以统一地控制HTML中各标志的显示属性。级联样式表可以使人更能有效地控制网页外观。使用级联样式表，可以扩充精确指定网页元素位置，外观以及创建特殊效果的能力。
JavaScript        
        </div>

        <comment-box></comment-box>

    </div>
    
</template>

<script>

//导入评论子组件
import comment from '../overall/Comment.vue'

export default {
    components:{
        'comment-box':comment
    }
}
</script>

<style scoped>
    .listinfo-con{
        padding: 5px 10px 0;
    }
</style>