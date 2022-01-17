<template>
  <div class="bo-input-wrapper">
      <input class="bo-input" :class="{'disabled':disabled}" :type="type" 
      :placeholder="placeholder" :name="name" :disabled="disabled" :value="value"
      @input="handleInput" />
      <span @click="clear" v-if="clearable" class="bo-input-close"></span>
  </div>
</template>


<script lang="ts">
export default {
    name: 'bo-input',
    props: {
        value: {
            type: String,
            default: ''
        },
        type: {
            type: String,
            default: 'text'
        },
        placeholder: {
            type: String,
            default: ''
        },
        name: {
            type: String,
            default: ''
        },
        disabled: {
            type: Boolean,
            default: false
        },
        clearable: {
            type: Boolean,
            default: false
        }
    },
    emits: ['update:value'],
    setup(props, context) {
        let handleInput = (e) => {
            context.emit('update:value', e.target.value)
        }
        let clear = () => {
            context.emit('update:value', '')
        }
        return {
            handleInput,
            clear
        }
    }
}
</script>


<style lang="scss">
.bo-input-wrapper {
    position: relative;
    font-size: 14px;
    display: inline-block;
    .bo-input {
        display: inline-block;
        background-color: #fff;
        border-radius: 4px;
        border: 1px solid #dcdfe6;
        box-sizing: border-box;
        color: #606266;
        font-size: inherit;
        height: 40px;
        line-height: 40px;
        outline: none;
        padding: 0 15px;
        transition: border-color .25s cubic-bezier(.645, .045, .355, 1);
        width: 100%;
        &:focus {
            outline: none;
            border-color: #009afe;
        }
        &.disabled {
            background-color: #f5f7fa;
            border-color: #e4e7ed;
            color: #c0c4cc;
            cursor: not-allowed;
        }
    }
    .bo-input-close {
        width: 0;
        height: 0;
        transition: all 3s;
    }
    &:hover {
        .bo-input-close {
            position: absolute;
            right: 5px;
            top: 50%;
            transform: translateY(-50%);
            display: inline-block;
            width: 20px;
            height: 20px;
            background: transparent;
            transition: all .3s;
            cursor: pointer;
            border-radius: 50%;
            &:hover {
                background: #e8f4f8;
            }
            &::before,
            &::after {
                content: "";
                position: absolute;
                height: 1px;
                width: 75%;
                top: 50%;
                left: 50%;
                background: black;
            }
            &::before {
                transform: translate(-50%, -50%) rotate(-45deg);
            }
            &::after {
                transform: translate(-50%, -50%) rotate(45deg);
            }
        }
    }
}

</style>