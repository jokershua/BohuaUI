<template>
    <demo-doc title="基础用法" description="普通Table示例" :component="TableDemo"></demo-doc>
    <demo-doc title="隔行变色效果" description="添加 highlighted 属性，表格起到隔行变色效果" :component="TableDemo2"></demo-doc>
    <demo-doc title="边框表格" description="border属性控制表格的边框" :component="TableDemo1"></demo-doc>
    <attr :columns="columns" :data="data"></attr>
</template>

<script lang="ts">
import TableDemo from '../demoCode/TableDemo.vue';
import TableDemo1 from '../demoCode/TableDemo1.vue';
import TableDemo2 from '../demoCode/TableDemo2.vue';
import DemoDoc from "../components/Demo.vue";
import Attr from "../components/Attr.vue";
import {columns} from "../utils/data";
export default {
    name: 'TableDoc',
    components: {
        TableDemo,
        DemoDoc,
        Attr
    },
    setup() {
        const data = [
            {
                params: 'columns',
                desc: '字段名称',
                type: 'array',
                select: '-----',
                default: '-----'
            },
            {
                params: 'date',
                desc: '显示的数据',
                type: 'array',
                select: '-----',
                default: '-----'
            },
            {
                params: 'border',
                desc: '是否显示边框',
                type: 'boolean',
                select: 'true / false',
                default: 'false'
            },
            {
                params: 'highlighted ',
                desc: '是否隔行变色',
                type: 'boolean',
                select: 'true / false',
                default: 'false'
            }
        ]

        return {
            TableDemo,
            TableDemo1,
            TableDemo2,
            columns,
            data
        }
    }
}
</script>

<style>

</style>