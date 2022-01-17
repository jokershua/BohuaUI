<template>
  <div>
      <demo-doc title="基础用法" description="Switch的基础用法" :component="SwitchDemo"></demo-doc>
      <demo-doc title="禁用状态" description="使用disabled属性改变Switch组件的状态" :component="SwitchDemo1"></demo-doc>
      <attr :columns="columns" :data="data"></attr>
  </div>
</template>

<script lang="ts">
import SwitchDemo from '../demoCode/SwitchDemo.vue';
import SwitchDemo1 from '../demoCode/SwitchDemo1.vue';
import DemoDoc from "../components/Demo.vue";
import Attr from "../components/Attr.vue";
import {columns} from "../utils/data";

export default {
    name: 'SwchDoc',
    components: {
      SwitchDemo,
      SwitchDemo1,
      DemoDoc,
      Attr
    },
    setup() {
      const data = [
        {
          params: 'value',
          desc: '是否选中',
          type: 'boolean',
          select: 'false / true',
          default: 'false',
        },
        {
          params: 'disabled',
          desc: '是否禁用',
          type: 'boolean',
          select: 'false / true',
          default: 'false',
        }
      ]
      return {
        SwitchDemo,
        SwitchDemo1,
        columns,
        data
      }
    }
}
</script>

<style lang="scss" scoped>

</style>