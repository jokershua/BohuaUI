
<template>
  <div>
    <demo-doc title="基础用法" description="普通Button示例" :component="ButtonDemo"></demo-doc>
    <demo-doc title="加载中..." description="点击按钮进行数据加载操作，在按钮上面显示加载状态" :component="ButtonDemo3"></demo-doc>
    <demo-doc title="大小尺寸" description="可支持不同尺寸大小的Button" :component="ButtonDemo2"></demo-doc>
    <demo-doc title="禁用状态" description="使用disabled属性改变Button组件的状态" :component="ButtonDemo1"></demo-doc>
    <attr :columns="columns" :data="data"></attr>
  </div>
</template>

<script lang="ts">
import ButtonDemo from '../demoCode/ButtonDemo.vue'
import ButtonDemo1 from '../demoCode/ButtonDemo1.vue'
import ButtonDemo2 from '../demoCode/ButtonDemo2.vue'
import ButtonDemo3 from '../demoCode/ButtonDemo3.vue'
import DemoDoc from "../components/Demo.vue";
import Attr from "../components/Attr.vue";
import {columns} from "../utils/data";
export default {
    name: 'ButtonDoc',
    components: {
      ButtonDemo,
      ButtonDemo1,
      ButtonDemo2,
      ButtonDemo3,
      DemoDoc,
      Attr
    },
    setup() {
      const data = [
        {
          params: 'size',
          desc: '尺寸',
          type: 'string',
          select: 'normal / small / mini',
          default: 'normal',
        },
        {
          params: 'theme',
          desc: '按钮类型',
          type: 'string',
          select: 'default / success / primary / warn / danger / info',
          default: 'default',
        },
        {
          params: 'loading',
          desc: '加载中',
          type: 'boolean',
          select: 'false / true',
          default: 'false',
        },
        {
          params: 'disabled',
          desc: '禁用',
          type: 'boolean',
          select: 'false / true',
          default: 'false',
        }
      ]
      return {
        ButtonDemo,
        ButtonDemo1,
        ButtonDemo2,
        ButtonDemo3,
        columns,
        data
      }
  }
}
</script>

<style lang="scss" scoped>

</style>