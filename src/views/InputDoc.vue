<template>
  <div>
    <demo-doc title="基础用法-双向绑定" description="双向绑定Input示例" :component="InputDemo"></demo-doc>
    <demo-doc title="可清空" description="使用 clearable 属性即可得到一个可清空的输入框" :component="InputDemo1"></demo-doc>
    <demo-doc title="密码框" description="使用 type 属性定义类型，支持所有原生 input 的类型" :component="InputDemo2"></demo-doc>
    <demo-doc title="支持禁用" description="使用 disabled 属性来禁用输入框" :component="InputDemo3"></demo-doc>
    <attr :columns="columns" :data="data"></attr>
  </div>
</template>

<script lang="ts">
import InputDemo from '../demoCode/InputDemo.vue';
import InputDemo1 from '../demoCode/InputDemo1.vue';
import InputDemo2 from '../demoCode/InputDemo2.vue';
import InputDemo3 from '../demoCode/InputDemo3.vue';
import DemoDoc from "../components/Demo.vue";
import Attr from "../components/Attr.vue";
import {columns} from "../utils/data";
export default {
    name: 'InputDoc',
    components: {
        InputDemo,
        DemoDoc,
        Attr
    },
    setup() {
        const data = [
            {
                params: 'name',
                desc: 'name属性',
                type: 'string',
                select: '任意字符串',
                default: '-----'
            },
            {
                params: 'type',
                desc: '输入框类型',
                type: 'string',
                select: '支持所有原生input的类型',
                default: 'text'
            },
            {
                params: 'value',
                desc: '绑定值',
                type: 'string / number',
                select: '-----',
                default: '-----'
            },
            {
                params: 'clearable ',
                desc: '绑是否可清空定值',
                type: 'boolean',
                select: 'true / false',
                default: 'false'
            },
            {
                params: 'disabled ',
                desc: '是否禁用',
                type: 'boolean',
                select: 'true / false',
                default: 'false'
            },
            {
                params: 'placeholder ',
                desc: '输入框占位文本',
                type: 'string',
                select: '任意字符串',
                default: '-----'
            },
        ]
        return {
            InputDemo,
            InputDemo1,
            InputDemo2,
            InputDemo3,
            data,
            columns,
        }
    }
}
</script>

<style lang="scss" scoped>

</style>