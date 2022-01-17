<demo>
示例
</demo>

<template>
    <div class="wrapper">
        <bo-input :disabled="true" placeholder="禁用状态" v-model:value="text" />
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
        let text = ref('');
        return {
            text
        }
    }
}
</script>