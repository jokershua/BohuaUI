<demo>
示例
</demo>

<template>
    <div class="wrapper">
        <bo-input clearable placeholder="请输入内容" v-model:value="text" />
        <div class="inputshow">{{ text }}</div>
    </div>
</template>

<script lang="ts">
import BoInput from '../lib/BoInput.vue'
import {ref} from 'vue'
export default {
    name: 'InputDemo',
    components: {
        BoInput
    },
    setup() {
        let text = ref('123');
        return {
            text
        }
    }
}
</script>

<style lang="scss" scoped>
.wrapper {
    display: flex;
    align-items: center;
}
.inputshow {
    display: inline-block;
    margin-left: 20px;
    width: 280px;
    height: 50px;
    line-height: 50px;
    box-sizing: border-box;
    padding: 0 15px;
    box-shadow: 0 0 3px #999;
    border-radius: 5px;
    color: #009afe;
    overflow: hidden;
}
</style>