<demo>
示例
</demo>

<template>
  <div>
      <bo-button @click="handleFn" class="right bottom">默认按钮</bo-button>
      <bo-button theme="success" class="right bottom">成功按钮</bo-button>
      <bo-button theme="primary" class="right bottom">主要按钮</bo-button>
      <bo-button theme="warn" class="right bottom">警告按钮</bo-button>
      <bo-button theme="danger" class="right bottom">危险按钮</bo-button>
      <bo-button theme="info" class="bottom">信息按钮</bo-button>
  </div>
</template>

<script lang="ts">
import BoButton from '../lib/BoButton.vue';
export default {
    name: 'ButtonDemo',
    components: {
        BoButton
    },
    setup() {
        let handleFn = () => {
            // 业务代码
        }
        return {
            handleFn
        }
    }
}
</script>

<style lang="scss" scoped>
.right {
    margin-right: 15px;
}
.bottom {
    margin-bottom: 15px;
}
</style>>
