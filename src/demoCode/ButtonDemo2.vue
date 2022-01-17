<demo>
示例
</demo>

<template>
  <div>
      <bo-button class="right bottom">默认大小</bo-button>
      <bo-button size="small" class="right bottom">中等大小</bo-button>
      <bo-button size="mini" class="bottom">迷你大小</bo-button>
  </div>
</template>

<script lang="ts">
import BoButton from '../lib/BoButton.vue';
export default {
    name: 'ButtonDemo2',
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