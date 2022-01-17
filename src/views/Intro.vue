<template>
  <div class="intro">
    <h2>介绍</h2>
    <div class="content">
        <p><span>BohuaUI</span> 是一个简洁的前端 UI 框架,基于 vue3.0 的开源 UI 组件库, 使用Vue3、TypeScript、Vite搭建，如果你不满意框架的原生样式，大可不必担心类名命名的问题，覆盖样式也是可以的，同时 BohuaUI 还 <span>支持移动端</span> 显示，如果你对官网和 UI 组件源码有兴趣，那么可以访问我的 <a>GitHub</a>  或 <a>码云</a> 查看源码。</p>
    </div>
      <h2>版本提示</h2>
    <div class="content">
        <p>您当前浏览的是 <span>BohuaUI 1.x 版本</span>的文档，适用于 <span>Vue 3.x</span> 开发，如果你在使用 Vue 3.x，那么就再好不过了。</p>
    </div>
  </div>
</template>

<script lang="ts">
export default {
    name: 'Intro'
}
</script>

<style lang="scss" scoped>
.intro {
    padding: 10px 0;
    h2 {
        margin-top: 30px;
        padding-bottom: 10px;
        border-bottom: 1px solid #eaecef;
    }
    .content {
        margin-top: 30px;
        // background: rgba(232, 244, 248, .3);
        padding: 15px;
        // background: #f6f8fa;
        box-shadow: 0 8px 12px #ebedf0;
        border-radius: 12px;
        p {
            line-height: 2;
            span {
                color: #009afe;
            }
            a {
                cursor: pointer;
                color: #009afe;
            }
        }
    }
}
</style>