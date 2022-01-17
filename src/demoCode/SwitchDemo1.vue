<demo>
示例
</demo>

<template>
  <div>
      <bo-switch disabled v-model:value="bool" @click="handleFn" />
  </div>
</template>

<script lang="ts">
import BoSwitch from '../lib/BoSwitch.vue';
import {ref} from 'vue';
export default {
    name: 'SwitchDemo1',
    components: {
        BoSwitch
    },
    setup() {
        const bool = ref(false);
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