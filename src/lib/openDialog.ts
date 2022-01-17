import BoDialog from './BoDialog.vue';
import {createApp, h} from 'vue';
const openDialog = (options) => {
    const {title, content, closeOnClickOverlay, ok, cancel}  = options;
    const div = document.createElement('div');
    document.body.appendChild(div);
    const destroy = () => {
        //@ts-ignore
        app.unmount(div)
        div.remove()
    }
    const app = createApp({
        render() {
            return h(BoDialog, {
                    visible: true,
                    'onUpdate:visible':(newVisible) => {
                        if (!newVisible) {
                            destroy()
                        }
                    },
                    closeOnClickOverlay,
                    ok,
                    cancel
                },
                {
                    title: () => title,
                    content: () => content
                }
            )
        }
    })
    app.mount(div);
}

export {openDialog};