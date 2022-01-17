<demo>
示例
</demo>

<template>
    <!-- ok和cancel两个回调函数中，只要return false则不关闭对话框，默认return true -->
    <div>
        <bo-button @click="toggle">打开对话框</bo-button>
        <bo-dialog v-model:visible="showDialog" :ok="f1" :cancel="f2">
            <template v-slot:title>
                <div>我是标题</div>
            </template>
            <template v-slot:content>
                <div>我是内容1</div>
                <div>我是内容22</div>
            </template>
        </bo-dialog>
    </div>
</template>

<script lang="ts">
import BoDialog from '../lib/BoDialog.vue';
import BoButton from '../lib/BoButton.vue';
import {ref} from 'vue';
export default {
    name: 'DialogDemo',
    components: {
        BoDialog,
        BoButton
    },
    setup() {
        const showDialog = ref(false);
        let toggle = () => {
            showDialog.value = true;
        }
        let f1 = () => {
            // 确定的业务代码
            return false;
        }
        let f2 = () => {
            // 取消的业务代码
        }
        return {
            showDialog,
            toggle,
            f1,
            f2
        }
    }
}
</script>