<demo>
示例
</demo>

<template>
  <div>
      <bo-tabs v-model:selected="selectActive">
          <bo-tab title="标题1">内容1</bo-tab>
          <bo-tab title="标题2">内容2</bo-tab>
          <bo-tab title="标题3" :disabled="true">内容3</bo-tab>
      </bo-tabs>
  </div>
</template>

<script lang="ts">
import BoTabs from '../lib/BoTabs.vue';
import BoTab from '../lib/BoTab.vue';
import {ref} from 'vue';
export default {
    name: 'TabDemo1',
    components: {
        BoTabs,
        BoTab
    },
    setup() {
        let selectActive = ref('标题2');
        return {
            selectActive
        }
    }
}
</script>