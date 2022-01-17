<template>
  <div>
    <div class="desc">
      ok 和 cancel 两个回调函数中，只要return false则不关闭对话框，默认return true
    </div>
    <demo-doc title="基础用法" description="普通Dialog示例" :component="DialogDemo"></demo-doc>
    <demo-doc title="函数式调用对话框" description="使用openDialog函数调用Dialog组件" :component="DialogDemo1"></demo-doc>
    <attr :columns="columns" :data="data"></attr>
  </div>
</template>

<script lang="ts">
import DialogDemo from '../demoCode/DialogDemo.vue'
import DialogDemo1 from '../demoCode/DialogDemo1.vue'
import DemoDoc from "../components/Demo.vue";
import Attr from "../components/Attr.vue";
import {columns} from "../utils/data";
export default {
    name: 'DialogDoc',
    components: {
      DialogDemo,
      DialogDemo1,
      DemoDoc,
      Attr
    },
    setup() {
      const data = [
        {
          params: 'visible',
          desc: '是否展示',
          type: 'boolean',
          select: 'true / false',
          default: 'false'
        },
        {
          params: 'closeOnClickOverlay',
          desc: '是否点击遮罩层关闭对话框',
          type: 'boolean',
          select: 'true / false',
          default: 'true'
        },
        {
          params: 'ok',
          desc: '确认的触发函数',
          type: 'function',
          select: 'return true / return false',
          default: 'return true'
        },
        {
          params: 'cancel',
          desc: '取消的触发函数',
          type: 'function',
          select: 'return true / return false',
          default: 'return true'
        }
      ]
      return {
        DialogDemo,
        DialogDemo1,
        columns,
        data
      }
    }
}
</script>

<style lang="scss" scoped>
.desc {
  position: relative;
  margin-top: 50px;
  padding: 20px 50px;
  background: #fff6f7;
  border-radius: 10px;
  color: #5e6d82;
  &::after {
    content: '';
    position: absolute;
    width: 5px;
    height: 100%;
    left: 0;
    top: 0;
    background: #fe6c6f;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }
}
</style>