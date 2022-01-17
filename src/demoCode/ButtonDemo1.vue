<demo>
示例
</demo>

<template>
  <div>
      <bo-button disabled class="right bottom">禁用按钮</bo-button>
      <bo-button :disabled="true" theme="warn" class="right bottom">禁用按钮</bo-button>
  </div>
</template>

<script lang="ts">
import BoButton from '../lib/BoButton.vue';
export default {
    name: 'ButtonDemo1',
    components: {
        BoButton
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
</style>