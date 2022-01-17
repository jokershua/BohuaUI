<demo>
示例
</demo>

<template>
  <div>
      <bo-button :loading="true" size="small" theme="primary" class="right bottom">加载中</bo-button>
      <bo-button loading class="right bottom">加载中</bo-button>
      <bo-button class="bottom">加载完毕</bo-button>
  </div>
</template>

<script lang="ts">
import BoButton from '../lib/BoButton.vue';
export default {
    name: 'ButtonDemo3',
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