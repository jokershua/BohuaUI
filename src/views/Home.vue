<template>
  <div>
      <Topnav class="topnav" />
      <div class="nav">
        <img src="../assets/logo2.png" alt="">
        <div class="title">BohuaUI 组件库</div>
      </div>
      <div class="banner">
          <div class="logo"><img src="../assets/logo.png" alt=""></div>
          <h1>BohuaUI</h1>
          <h2>一款轻量、可靠、开源的 Vue 组件库</h2>
          <div class="btn">
            <a href="https://github.com/jokershua/BohuaUI" class="git github">
              <svg class="gitlogo">
                <use :xlink:href="'#icon-git'"></use>
              </svg>
              <span>Github</span>
            </a>
            <a href="https://gitee.com/cbh111/bohua-ui" class="git gitmidde">
              <svg class="giteelogo">
                <use :xlink:href="'#icon-gitee'"></use>
              </svg>
              <span>码云</span>
            </a>
            <router-link class="began" to="/doc/switch">开始使用</router-link>
          </div>
      </div>
      <div class="descimg">
        <ul>
          <li>
            <img src="../assets/vue.png" alt="">
            <div class="desctxt">
              <h2>基于Vue3</h2>
              <p>使用了Vue3 Composition API</p>
            </div>
          </li>
          <li>
            <img src="../assets/ts.jpg" alt="">
            <div class="desctxt">
              <h2>基于TypeScript</h2>
              <p>源码采用 TypeScript 书写</p>
            </div>
          </li>
          <li>
            <img src="../assets/dp.png" alt="">
            <div class="desctxt">
              <h2>轻量快捷</h2>
              <p>每个组件的源代码都极其简洁</p>
            </div>
          </li>
        </ul>
      </div>
      <div class="desc">
        <h2>代码易读，简单易用</h2>
        <p>BohuaUI 是一个简洁的前端 UI 框架,基于 vue3.0 的开源 UI 组件库, 使用Vue3、TypeScript、Vite搭建，如果你不满意框架的原生样式，大可不必担心类名命名的问题，覆盖样式也是可以的，同时 BohuaUI 还支持移动端显示，如果你对官网和 UI 组件源码有兴趣，那么可以访问我的 <a>GitHub</a>  或 <a>码云</a> 查看源码。</p>
      </div>
  </div>
</template>

<script lang="ts">
import Topnav from "../components/Topnav.vue";
export default {
    name: 'Home',
    components: { Topnav },
}
</script>

<style lang="scss" scoped>
.banner {
  user-select: none;
  width: 100%;
  padding: 150px 0 100px 0;
  clip-path: ellipse(80% 60% at 50% 40%);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: rgba(179,217,233,.3);
  // background: linear-gradient(145deg, rgba(255,255,255,1) 0%, rgba(179,217,233,1) 100%);
  h2 {
    margin: 25px 0;
    color: #666;
    font-style: italic
  }
  .btn{
    font-size: 17px;
    margin-top: 30px;
    a {
      cursor: pointer;
      margin: 0 8px;
      border-radius: 10px;
      width: 120px;
      height: 40px;
    }
    .git {
      border: 1px solid #009afe;
      color: #009afe;
      transition: all .3s;
    }
    .github {
      position: relative;
      padding: 8px 10px 8px 40px;
      .gitlogo {
        position: absolute;
        left: 9px;
        top: 2px;
        width: 30px;
        height: 30px;
      }
      &:hover {
        color: #333;
        border: 1px solid #333;
      }
    }
    .gitmidde {
      position: relative;
      padding: 8px 20px 8px 45px;
      .giteelogo {
        position: absolute;
        left: 10px;
        top: 2px;
        width: 36px;
        height: 32px;      
      }
      &:hover {
        color: #d81e06;
        border: 1px solid #d81e06;
      }
    }
    .began {
      padding: 8px 20px;
      color: #fff;
      background: #009afe;
      border: 1px solid transparent;
      transition: all .3s;
      &:hover {
        background: #66b1ff;
      }
    }
  }
}
.nav {
  display: none;
}

.logo {
  width: 300px;
  height: 150px;
  img {
    width: 100%;
  }
}

.desc {
  margin-top: 30px;
  h2 {
    position: relative;
    padding-top: 10px;
    font-size: 30px;
    text-align: center;
    margin-bottom: 30px;
  }
  h2::before {
    content: '';
    width: 1300px;
    height: 1px;
    background: #ccc;
    position: absolute;
    top: 0;
    left: 50%;
    margin-left: -650px;
  }
  p {
    width: 800px;
    color: #666;
    padding: 0 20px 30px;
    margin: 0 auto;
    a {
      cursor: pointer;
      color: #009afe;
    }
  }
}


.descimg {
  margin-top: 30px;
  ul {
    display: flex;
    justify-content: space-around;
    li {
      width: 290px;
      height: 100px;
      display: flex;
      align-items: center;
      img {
        width: 50px;
        height: 50px;
        margin-right: 15px;
      }
    }
  }
}

@media (max-width: 900px) {
  .topnav {
    display: none;
  }
  .nav {
    display: block;
    position: fixed;
    z-index: 100;
    left: 0;
    top: 0;
    width: 100%;
    height: 50px;
    background: #fff;
    img {
      width: 40px;
      height: 40px;
      margin: 5px 0 0 5px;
    }
  }
  .title {
    position: absolute;
    font-size: 20px;
    color: #009afe;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
  }
  .banner {
    margin-top: 50px;
    padding: 50px 0 60px 0;
    h2 {
      font-size: 22px;
    }
    .btn {
      margin-top: 5px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .gitmidde {
        margin: 15px 0;
        .giteelogo {
          left: 12px;
          top: 2px;
          width: 40px;
          height: 33px;
        }
      }
      .github {
        .gitlogo {
          top: 3px;
          left: 9px;
          width: 40px;
          height: 32px;
        }
      }
      .git {
        display: flex;
        justify-content: space-around;
        align-items: center;
      }
      .git,.began {
        text-align: center;
      }
    }
  }
  .descimg {
    ul {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
  .desc {
    h2::before {
      display: none;
    }
    p {
      width: 100%;
    }
  }
}
</style>
