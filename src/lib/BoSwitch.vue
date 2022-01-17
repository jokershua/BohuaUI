<template>
    <button :disabled="disabled" class="bo-switch" @click="toggle" :class="{'checked': value, disabled: disabled}"><span></span></button>
</template>

<script lang="ts">
export default {
    name: 'bo-switch',
    props: {
        value: {
          type: Boolean,
          default: false
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },
    emits: ['update:value'],
    setup(props, context) {
        let toggle = () => {
            context.emit('update:value', !props.value);
        }
        return {
            toggle
        }
    }
}
</script>

<style lang="scss">
$h: 22px;
$h2: $h - 4px;
.bo-switch {
    cursor: pointer;
    height: $h;
    width: $h*2;
    border: none;
    background: #e3e3e3;
    border-radius: $h/2;
    position: relative;
    transition: background .3s;
    &:focus{
        outline: none;
    }
    &:active{
        span {
            width: calc(#{$h2} + 6px);
        }
    }
    span {
        position: absolute;
        top: 2px;
        left: 2px;
        height: $h2;
        width: $h2;
        background: #fff;
        border-radius: $h2/2;
        transition: all .3s;
    }
    &.checked>span {
        left: 100%;
        margin-left: -2px;
        transform: translateX(-100%);
    }
    &.checked {
        background: #009afe;
    }
}
.disabled {
    cursor: auto;
    &:active{
        span {
            width: $h2;
        }
    }
}
</style>