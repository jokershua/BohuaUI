<template>
  <div class="layout">
    <Topnav class="nav" />
    <div class="content">
        <aside :class="{'open': menuVisible}">
          <h2>文档</h2>
          <ul>
            <li><router-link class="link-a" to="/doc/intro">介绍</router-link></li>
            <li><router-link class="link-a" to="/doc/install">快速上手</router-link></li>
            <li><router-link class="link-a" to="/doc/start">开始使用</router-link></li>
          </ul>
          <h2>组件列表</h2>
          <ul>
            <li>
              <router-link class="link-a" to="/doc/switch">Switch 开关</router-link>
            </li>
            <li>
              <router-link class="link-a" to="/doc/button">Button 按钮</router-link>
            </li>
            <li>
              <router-link class="link-a" to="/doc/dialog">Dialog 对话框</router-link>
            </li>
            <li>
              <router-link class="link-a" to="/doc/tab">Tabs 标签页</router-link>
            </li>
            <li>
              <router-link class="link-a" to="/doc/input">Input 输入框</router-link>
            </li>
            <li>
              <router-link class="link-a" to="/doc/table">Table 表格</router-link>
            </li>
            <li>
              <router-link class="link-a" to="/doc/more">更多组件</router-link>
            </li>
          </ul>
        </aside>
        <main>
          <router-view />
        </main>
    </div>
  </div>
</template>

<script lang="ts">
import Topnav from "../components/Topnav.vue";
import { inject, Ref } from "vue";
export default {
    name: 'Doc',
    components: { Topnav },
    setup() {
      const menuVisible = inject<Ref<boolean>>('menuVisible')
      return {menuVisible}
    }
}
</script>

<style lang="scss" scoped>
.layout {
  height: 100vh;
  > .content {
    padding-top: 60px;
    padding-left: 260px;
    @media (max-width: 900px) {
      padding-left: 0; 
    }
  }
}
.content {
  display: flex;
  > main {
    width: 100%;
    padding: 16px 260px 16px 60px;
    background: #fff;
    @media (max-width: 900px) {
      padding: 16px 25px; 
    }
  }
}

aside {
  background: #fff;
  width: 260px;
  position: fixed;
  z-index: 9;
  top: 0;
  left: 0;
  padding-top: 90px;
  height: 100%;
  transition: all 0.4s;
  box-shadow: 0 0 10px rgba(0,0,0,.2);
  transform: translateX(-280px);
  @media (min-width: 900px) {
    transform: translateX(0);
  }
  h2 {
    font-size: 16px;
    color: #333;
    font-weight: 700;
    margin: 4px 0;
    padding-left: 10px;
  }
  ul {
    li {
      .link-a {
        display: inline-block;
        padding: 13px 0;
        width: 100%;
        padding-left: 20px;
        position: relative;
        color: #444;
        font-size: 15px;
      }
      .link-a:hover {
        background: rgba(179,217,233,.3);
      }
      .link-active {
        background: rgba(179,217,233,.3);
        border-right: 3px solid #33ccff;
        @media (min-width: 900px) {
          border-right: none;
          &::after {
            content: "";
            display: block;
            animation: bdrolate 0.8s;
            position: absolute;
            top: 0;
            right: 0;
            width: 3px;
            height: 100%;
            background-color: #33ccff;
          }
        }
      }
    }
  }
  &.open {
    transform: translateX(0);
  }
}

@keyframes bdrolate {
  0% {
    transform: rotateX(90deg);
  }
  100% {
    transform: rotateX(0deg);
  }
}
</style>