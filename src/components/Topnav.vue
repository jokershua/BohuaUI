<template>
  <div class="topnav">
    <div class="logo">
      <a class="gohome" href="./">
        <img src="../assets/logo.png" alt="">
      </a>
    </div>
    <ul class="menu">
      <li>
        <a href="https://github.com/jokershua/BohuaUI">github</a>
      </li>
      <li>
        <a href="https://gitee.com/cbh111/bohua-ui">码云</a>
      </li>
      <li>
        <a href="#/doc/intro">文档</a>
      </li>
    </ul>
    <span class="toggleAside" @click="toggleMenu"></span>
  </div>
</template>
<script lang="ts">
import { inject, Ref } from "vue";

export default {
  name: 'Topnav',
  setup() {
    const menuVisible = inject<Ref<boolean>>('menuVisible')
    let toggleMenu = () => {
      menuVisible.value = !menuVisible.value
    }
    return {toggleMenu}
  }
};
</script>
<style lang="scss" scoped>
.topnav {
  background: #fff;
  box-shadow: 0 2px 8px #f0f1f2;
  display: flex;
  padding: 16px;
  padding-left: 40px;
  padding-right: 40px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  justify-content: space-between;
  align-items: center;
  > .logo {
    cursor: pointer;
    max-width: 6em;
    height: 100%;
    img {
      width: 100%;
    }
  }
  > .menu {
    display: flex;
    align-items: center;
    > li {
      cursor: pointer;
      margin: 0 1em;
      &:hover {
        color: rgb(0, 154, 254);
      }
    }
  }
  > .toggleAside {
    width: 35px;
    height: 35px;
    background: red;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    background: url('../assets/menu.png') no-repeat;
    background-size: cover;
    display: none;
  }
  @media (max-width: 900px) {
    > .menu {
      display: none;
    }
    > .logo {
      margin: 0 auto;
    }
    > .toggleAside {
      display: block;
    }
  }
}
.gohome {
  display: block;
  width: 100%;
  height: 100%;
}
</style>
