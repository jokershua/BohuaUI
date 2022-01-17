<demo>
示例
</demo>

<template>
    <div class="wrapper">
        <bo-input placeholder="密码类型" type="password" v-model:value="password" />
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
        let password = ref('');
        return {
            password
        }
    }
}
</script>