<template>
  <div class="fold-code" @mouseenter="enter" @mouseleave="leave">
    <div class="demo-wrapper">
      <component :is="component"></component>
    </div>
    <div class="per-wrapper">
      <div class="per-content" :style="{height:height+'px'}">
        <pre ref="codePer" class="language-html" v-html="html"></pre>
      </div>
      <div class="demo-block-control" @click="toggle">
        <svg class="down">
          <use :xlink:href="showCode===false?'#icon-idown':'#icon-iup'"></use>
        </svg>
        <transition name="fade">
          <span class="show-world" v-show="show">{{ showCode === true ? '隐藏代码' : '显示代码' }}</span>
        </transition>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {ref, computed, nextTick, onMounted} from 'vue'
import 'prismjs'
import '../assets/scss/prism.css';

const Prism = (window as any).Prism

export default {
  name: 'code-per',
  props: {
    component: {
      type: Object
    }
  },
  setup(props, context) {
    let codePer = ref<HTMLDivElement>(null);
    let html = ref('');
    let computedHeight = ref(0);
    let height = ref(0);
    const show = ref(false);
    const enter = () => {
      show.value = true;
    }
    const leave = () => {
      show.value = false;
    }

    // 获取组件的源代码，然后并获取展示源代码容器的高度
    onMounted(() => {
      html.value = Prism.highlight(props.component.__sourceCode, Prism.languages.html, 'html');
      nextTick(() => {
        let { height } = codePer.value.getBoundingClientRect()
        computedHeight.value = height
      })
    })

    // 控制页面显示隐藏代码还是显示代码的文字
    let showCode = computed(() => {
      if (height.value === 0) {
        return false
      } else {
        return true
      }
    })

    // 控制显示代码还是隐藏代码，通过高度来控制
    let toggle = () => {
      if (height.value === 0) {
        height.value = computedHeight.value
      } else {
        height.value = 0
      }
    }

    return {
      show,
      enter,
      leave,
      codePer,
      html,
      height,
      showCode,
      computedHeight,
      toggle
    }
  }
}
</script>

<style lang="scss" scoped>

.language-html {
  margin: 0;
  background-color: #fdfdfd;
  font-size: 15px;
  padding: 18px 24px;
}

.demo-wrapper {
  padding: 24px
}

.fold-code {
  overflow: hidden;
  border: 1px solid #ebebeb;
  border-radius: 3px;
  transition: all .2s;

  &:hover {
    box-shadow: 0 0 8px 0 rgba(232, 237, 250, .6), 0 2px 4px 0 rgba(232, 237, 250, .5);

    .down {
      transform: translateX(-35px);
    }
  }
}

.per-wrapper {
  .per-content {
    background-color: #fafafa;
    border-top: 1px solid #eaeefb;
    overflow: hidden;
    height: 0;
    transition: height .5s;
  }

  .demo-block-control {
    border-top: 1px solid #eaeefb;
    height: 44px;
    box-sizing: border-box;
    background-color: #fff;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    text-align: center;
    margin-top: -1px;
    color: #d3dce6;
    cursor: pointer;
    position: relative;
    text-align: center;
    left: 0;

    &:hover {
      color: #78d6f5;
      background-color: #f9fafc;
    }

    .down {
      width: 16px;
      height: 44px;
      fill: currentcolor;
      transition: all .3s;
    }

    .show-world {
      position: absolute;
      font-size: 14px;
      line-height: 44px;
      transition: all 0.3s;
      transform: translateX(-30px);

      &.fade-enter {
        opacity: 0;
        transform: translateX(10px);
      }

      &.fade-enter-to {
        opacity: 1;
        transform: translateX(-30px);
      }

      &.fade-leave {
        opacity: 1;
        transform: translateX(-30px);
      }

      &.fade-leave-to {
        opacity: 0;
        transform: translateX(0px);
      }
    }
  }
}
</style>
