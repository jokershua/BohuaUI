<template>
  <div class="start">
      <h2>使用</h2>
      <div class="content">
          <p>安装完本组件库之后在main.js中引入以下文件</p>
          <p style="color: #039bfe">完整引用</p>
          <div class="code">
              <p>import { createApp } from 'vue'</p>
              <p>import App from './App.vue'</p>
              <p style="color: darkred">import&nbsp;&nbsp;'bohua-ui/dist/lib/bohua.css'</p>
              <p style="color: darkred">import { BohuaUI } from 'bohua-ui'</p>
              <p style="color: darkred">createApp(App).use(BohuaUI).mount('#app')</p>
              <p style="color: #666">// 以上代码便完成了BohuaUI的完整引入</p>
          </div>
            <p style="color: #039bfe">部分引用（按需引用）</p>
            <div class="code">
                <p style="color: #666">// 如果你只希望引入部分组件，比如Button，那么需要在main.js中写入以下内容</p>
                <p>import { createApp } from 'vue'</p>
                <p>import App from './App.vue'</p>
                <p style="color: darkred">import&nbsp;&nbsp;'bohua-ui/dist/lib/bohua.css'</p>
                <p style="color: darkred">import { BoButton } from 'bohua-ui'</p>
                <p style="color: darkred">createApp(App).use(BoButton).mount('#app')</p>
            </div>
      </div>
  </div>
</template>

<script lang="ts">
export default {
    name: 'Start'
}
</script>

<style lang="scss" scoped>
.start {
    padding: 10px 0;
    h2 {
        margin-top: 30px;
        padding-bottom: 10px;
        border-bottom: 1px solid #eaecef;
    }
    .content {
        margin-top: 30px;
        > p {
            margin-bottom: 20px;
        }
        .code {
            box-shadow: 0 8px 24px #ebedf0;
            border-radius: 12px;
            position: relative;
            margin-bottom: 25px;
            padding: 15px;
            color: #999;
            // background: #f6f8fa;
            // font-size: 16px;
            p {
                margin-bottom: 10px;
            }
        }
    }
}
</style>