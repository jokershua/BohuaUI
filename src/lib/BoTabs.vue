<template>
  <div class="bo-tabs">
      <div class="bo-tabs-header" ref="nav">
          <div class="bo-tabs-title" @click="select(node)" 
          :ref="el => { if (node.props.title === selected) selectedItem = el }" 
          :class="{'selected': node.props.title === selected, 'disabled': node.props.disabled}" 
          v-for="(node,i) in defaults" :key="i">{{node.props.title}}
          </div>
          <div class="bo-tabs-nav-indicator" ref="indicator"></div>
      </div>
      <div class="bo-tabs-content">
        <component :is="current" :key="current.props.title" /> 
      </div>
  </div>
</template>

<script lang="ts">
import BoTab from './BoTab.vue';
import {onMounted, ref, computed, watchEffect} from 'vue';
export default {
    name: 'bo-tabs',
    props: {
        selected: {
            type: String
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },
    emits: ['update:selected'],
    setup(props, context) {
        let nav = ref<HTMLDivElement>(null);
        let selectedItem = ref<HTMLDivElement>(null);
        let indicator = ref<HTMLDivElement>(null);
        onMounted(() => {
            watchEffect(() => {
                let {width, left: left1} = selectedItem.value.getBoundingClientRect();
                let {left: left2} = nav.value.getBoundingClientRect();
                let left = left1 - left2;
                indicator.value.style.width = width + 'px';
                indicator.value.style.left = left + 'px';
            }, // 解决异步
            {
                flush: "post", //效果更新需要缓冲时间
            })
        })

        // 获取tabs下的所有的tab标签
        let defaults = context.slots.default();
        // 对tabs下的标签进行判断，如果不是tag标签则报错
        defaults.forEach(tag => {
            if (tag.type !== BoTab) {
                throw new Error('The <bo-tabs> sub-label must be <bo-tab>');
            }
        })


        // 被选择的节点
        let current = computed(() => {
            return defaults.filter((tag) => {
                return tag.props.title === props.selected;
            })[0];
        });

        let select = (node) => {
            if (node.props.disabled) {
                return
            }
            context.emit('update:selected', node.props.title);
        }

        return {
            defaults,
            selectedItem,
            indicator,
            nav,
            current,
            select
        }
    }
}
</script>

<style lang="scss">
.bo-tabs {
    .bo-tabs-header {
        display: flex;
        color: #4a4a4a;
        border-bottom: 2px solid #eee;
        position: relative;
        .bo-tabs-title {
            cursor: pointer;
            padding: 8px 16px;
            &.selected {
                color: #009afe;
            }
            &.disabled {
                color: #ccc;
                user-select: none;
                cursor: not-allowed;
            }
        }
        .bo-tabs-nav-indicator {
            height: 2px;
            position: absolute;
            left: 0;
            bottom: -1px;
            background: #009afe;
            transition: all .25s cubic-bezier(1, 1.67, 0.21, 0.84);
        }
    }
    .bo-tabs-content {
        padding: 8px 0;
    }
}
</style>