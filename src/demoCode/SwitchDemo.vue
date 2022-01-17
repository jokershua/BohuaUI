<demo>
示例
</demo>

<template>
  <div>
      <bo-switch v-model:value="bool" @click="handleFn" />
  </div>
</template>

<script lang="ts">
import BoSwitch from '../lib/BoSwitch.vue';
import {ref} from 'vue';
export default {
    name: 'SwitchDemo',
    components: {
        BoSwitch
    },
    setup() {
        const bool = ref(true);
        let handleFn = () => {
            // 业务代码
        }
        return {
            bool,
            handleFn
        }
    }
}
</script>