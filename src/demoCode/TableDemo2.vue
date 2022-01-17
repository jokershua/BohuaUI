<demo>
示例
</demo>

<template>
  <bo-table :columns="columns" :data="data" highlighted></bo-table>
</template>

<script lang="ts">
import BoTable from "../lib/BoTable.vue";
export default {
    components: {
        BoTable
      },
    setup() {
        const data = [
            {
                course: '高等数学',
                name: '张三',
                score: '96.00',
                college: '数学与信息科技学院'
            },
            {
                course: '高等数学',
                name: '李四',
                score: '88.00',
                college: '数学与信息科技学院'
            },
            {
                course: '高等数学',
                name: '王五',
                score: '75.00',
                college: '数学与信息科技学院'
            },
            {
                course: '高等数学',
                name: '赵六',
                score: '98.00',
                college: '数学与信息科技学院'
            },
            {
                course: '高等数学',
                name: '孙七',
                score: '69.00',
                college: '数学与信息科技学院'
            }
        ]

        const columns = [
            {
                title: '课程名称',
                key: 'course'
            },
            {
                title: '姓名',
                key: 'name'
            },
            {
                title: '分数',
                key: 'score'
            },
            {
                title: '开课院系',
                key: 'college'
            }
        ]

        return {
            data,
            columns
        }
    }
}
</script>