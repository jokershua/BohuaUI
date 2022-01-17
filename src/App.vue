<template>
  <router-view></router-view>
</template>

<script lang="ts">
import {provide, ref} from 'vue';
import {router} from './router'
export default {
  name: 'App',
  setup() {
    const width = document.documentElement.clientWidth
    const menuVisible = ref(width <= 900 ? false : true)
    provide('menuVisible',menuVisible)


    router.afterEach(() => {
      if(width<=900){
        menuVisible.value = false
      }
      window.scrollTo(0, 0)
    })
  }
}
</script>

<style lang="scss" scoped>

</style>
