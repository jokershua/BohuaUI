<template>
    <template v-if="visible">
        <Teleport to="body">
            <div class="bo-overlay" @click="OnClickOverlay" 
            @touchmove.prevent @mousewheel.prevent>
            </div>
            <div class="bo-dialog-wrapper" @touchmove.prevent @mousewheel.prevent>
                <div class="bo-dialog">
                    <header>
                        <div class="bo-dialog-title"><slot name="title" /></div>
                        <span @click="close" class="bo-dialog-close"></span>
                    </header>
                    <main>
                        <slot name="content" /> 
                    </main>
                    <footer>
                        <bo-button theme="primary" @click="ok">确定</bo-button>
                        <bo-button @click="cancel">取消</bo-button>
                    </footer>
                </div>
            </div>
        </Teleport>
    </template>   
</template>

<script lang="ts">
import BoButton from './BoButton.vue';
export default {
    name: 'bo-dialog',
    components: {
        BoButton
    },
    props: {
        // 是否可见
        visible: {
            type: Boolean,
            default: false,
        },
        // 是否点击遮罩层
        closeOnClickOverlay: {
            type: Boolean,
            default: true,
        },
        ok: Function,
        cancel: Function,
    },
    emits: ['update:visible'],
    setup(props, context) {
        let close = () => {
            context.emit('update:visible', false);
        }
        let OnClickOverlay = () => {
            if (props.closeOnClickOverlay) {
                close();
            }
        }
        let ok = () => {
            // 等价于props.ok?.() !==false
            if (props.ok && props.ok() !== false) {
                close();
            }
        }
        let cancel = () => {
            props.cancel && props.cancel();
            close();
        }
        return {
            close,
            OnClickOverlay,
            ok,
            cancel
        }
    }
}
</script>

<style lang="scss">
.bo-dialog-wrapper {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    z-index: 21;
}
.bo-overlay {
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.2);
    z-index: 20;
}
.bo-dialog {
    position: relative;
    box-sizing: border-box;
    background: #fff;
    min-width: 350px;
    max-width: 90%;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgb(0,0,0,.3);



    header {
        padding: 20px 20px 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .bo-dialog-title {
            font-size: 18px;
        }
        .bo-dialog-close {
            position: relative;
            display: inline-block;
            width: 32px;
            height: 32px;
            border-radius: 32px;
            background: transparent;
            transition: all .3s;
            cursor: pointer;
            @media (min-width: 900px) {
                &:hover {
                background-color: #e8f4f8;
                &::before,
                &::after {
                    background-color: #666;
                    }
                }
            }
            &::before,
            &::after {
                content: "";
                position: absolute;
                height: 1px;
                width: 50%;
                top: 50%;
                left: 50%;
                background: black;
                transition: all .3s;
            }
            &::before {
                transform: translate(-50%, -50%) rotate(-45deg);
            }
            &::after {
                transform: translate(-50%, -50%) rotate(45deg);
            }
        }
    }


    main {
        padding: 20px;
        min-height: 100px;
    }


    footer {
        overflow: hidden;
        padding-bottom: 20px;
        .bo-button {
            float: right;
            margin-right: 15px;
        }
    }
}
</style>