<template>
  <div>
    <demo-doc title="基础用法" description="普通Tabs示例" :component="TabDemo"></demo-doc>
    <demo-doc title="禁用Tabs" description="在Tabs组件中添加disabled属性来禁用Tabs" :component="TabDemo1"></demo-doc>
    <attr :columns="columns" :data="data"></attr>
  </div>
</template>

<script lang="ts">
import TabDemo from '../demoCode/TabDemo.vue'
import TabDemo1 from '../demoCode/TabDemo1.vue'
import DemoDoc from "../components/Demo.vue";
import Attr from "../components/Attr.vue";
import {columns} from "../utils/data";
export default {
    name: 'TabDoc',
    components: {
      TabDemo,
      TabDemo1,
      DemoDoc,
      Attr
    },
    setup() {
      const data = [
        {
          params: 'bo-tab',
          desc: 'tab标签',
          type: 'component',
          select: 'bo-tab',
          default: '-----'
        },
        {
          params: 'disabled',
          desc: '禁用标签',
          type: 'boolean',
          select: 'true / false',
          default: 'false'
        },
        {
          params: 'title',
          desc: '标签标题',
          type: 'string',
          select: '-----',
          default: '-----'
        },
        {
          params: 'selected',
          desc: '当前高亮的标签',
          type: 'string',
          select: '-----',
          default: '-----'
        }
      ]
      return {
        TabDemo,
        TabDemo1,
        columns,
        data
      }
    }
}
</script>

<style lang="scss" scoped>

</style>