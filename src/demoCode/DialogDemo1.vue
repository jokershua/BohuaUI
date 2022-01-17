<demo>
示例
</demo>

<template>
  <div>
      <bo-button @click="showDialog" theme="warn">一键打开Dialog</bo-button>
      <bo-dialog></bo-dialog>
  </div>
</template>

<script lang="ts">
import BoButton from '../lib/BoButton.vue';
import BoDialog from '../lib/BoDialog.vue';
import {openDialog} from '../lib/openDialog';
export default {
    name: 'DialogDemo1',
    components: {
        BoButton,
        BoDialog
    },
    setup() {
        let showDialog = () => {
            openDialog({
                title: '标题',
                content: '这里是内容',
                closeOnClickOverlay: false,
                ok() {
                    // 业务代码
                },
                cancel() {
                    // 业务代码
                }
            })
        }
        return {
            showDialog
        }
    }
}
</script>