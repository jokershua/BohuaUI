<template>
    <button class="bo-button" :disabled="loading ? true : disabled" :class="classstyle">
        <span v-if="loading" class="bo-button-spin"></span>
        <span><slot/></span>
    </button>
</template>

<script lang="ts">
import {computed} from 'vue';
export default {
    name: 'bo-button',
    props: {
        // 主题颜色
        theme: {
          type: String,
          default: 'default'
        },
        // 按钮大小
        size:{
            type:String,
            default: 'normal'
        },
        // 是否禁用
        disabled: {
            type: Boolean,
            default: false
        },
        // 是否加载
        loading: {
            type: Boolean,
            default: false,
        }
    },
    setup(props) {
        let classstyle = computed(() => {
            const loadingClass = props.loading ? ' bo-button-loading' : '';
            return `bo-button-${props.theme} bo-button-${props.size}${loadingClass}`;
        })
        return {
            classstyle
        }
    }
}
</script>

<style lang="scss">

@keyframes bohua-spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

.bo-button {
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    color: #606266;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    font-weight: 500;
    font-size: 14px;
    border-radius: 5px;
    border: 0;
    &:focus {
        outline: none;
    }

    &.bo-button-loading{
        pointer-events: none;
        .bo-button-spin{
          width: 14px;
          height: 14px;
          margin-right: 5px;
          border-radius: 8px;
          border-style: solid;
          border-width: 2px;
          border-color: #40a9ff #40a9ff #40a9ff transparent;
          animation: bohua-spin infinite 1s linear;
        }
    }
    >span{
        display: inline-block;
        vertical-align: middle;
    }



    &.bo-button-default{
        background: #fff;
        border: 1px solid #dcdfe6;
        transition: all .3s;
        &:hover,&:focus{
            color: #222831;
            border-color: #999;
        }
        &[disabled] {
            cursor: not-allowed;
            user-select: none;
            color: #ccc;
            &:hover,&:focus {
                color: #ccc;
                background: #fff;
                border-color: #dcdfe6;
            }
        }
    }


    &.bo-button-primary{
        background: #009afe;
        color: #fff;
        transition: all .3s;
        &:hover,&:focus{
            background: #66b1ff;
        }
        &[disabled] {
            cursor: not-allowed;
            user-select: none;
            background: #a0cfff;
            &:hover,&:focus {
                background: #a0cfff;
            }
        }
    }

    &.bo-button-success{
        background: #07c160;
        color: #fff;
        transition: all .3s;
        &:hover,&:focus{
            background: #29d37b;
        }
        &[disabled] {
            cursor: not-allowed;
            user-select: none;
            background: #a4da96;
            &:hover,&:focus {
                background: #a4da96;
            }
        }
    }


    &.bo-button-info{
        background: #909399;
        color: #fff;
        transition: all .3s;
        &:hover,&:focus{
            background: #a6a9ad;
        }
        &[disabled] {
            cursor: not-allowed;
            user-select: none;
            background: #bdbebe;
            &:hover,&:focus {
                background: #bdbebe;
            }
        }
    }


    &.bo-button-warn{
        background: #ff976a;
        color: #fff;
        transition: all .3s;
        &:hover,&:focus{
            background: #fcac89;
        }
        &[disabled] {
            cursor: not-allowed;
            user-select: none;
            background: #ffbfa4;
            &:hover,&:focus {
                background: #ffbfa4;
            }
        }
    }


    &.bo-button-danger{
        background: #ee0a24;
        color: #fff;
        transition: all .3s;
        &:hover,&:focus{
            background: #fd5669;
        }
        &[disabled] {
            cursor: not-allowed;
            user-select: none;
            background: #ff7a89;
            &:hover,&:focus {
                background: #ff7a89;
            }
        }
    }
    


    &.bo-button-normal{
        padding: 12px 20px;
    }
    &.bo-button-small{
        padding: 9px 15px;
        font-size: 14px;
        border-radius: 4px;
    }
    &.bo-button-mini{
        padding: 6px 10px;
        font-size: 11px;
        border-radius: 3px;
    }
}
</style>