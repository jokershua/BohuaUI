// 使用户按需引入需要使用的组件

import "./Bohua.scss";

import BoDialog from "./BoDialog.vue";
import BoButton from "./BoButton.vue";
import BoSwitch from "./BoSwitch.vue";
import BoInput from "./BoInput.vue";
import BoTabs from "./BoTabs.vue";
import BoTab from "./BoTab.vue";
import BoTable from './BoTable.vue';



BoSwitch.install = app => {
    app.component("BoSwitch",BoSwitch)
}
BoDialog.install = app => {
    app.component("BoDialog",BoDialog)
}
BoButton.install = app => {
    app.component("BoButton",BoButton)
}
BoInput.install = app => {
    app.component("BoInput",BoInput)
}
BoTabs.install = app => {
    app.component("BoTabs",BoTabs)
}
BoTab.install = app => {
    app.component("BoTab",BoTab)
}
BoTable.install = app => {
    app.component("BoTable",BoTable)
}



export { BoSwitch }
export { BoButton }
export { BoDialog }
export { BoTabs }
export { BoTab }
export { BoInput }
export { BoTable }


// export { default as BoSwitch } from './BoSwitch.vue';
// export { default as BoButton } from './BoButton.vue';
// export { default as BoDialog } from './BoDialog.vue';
// export { default as BoTabs } from './BoTabs.vue';
// export { default as BoTab } from './BoTab.vue';
// export { default as BoInput } from './BoInput.vue';
// export { default as BoTable } from './BoTable.vue';
export { openDialog as openDialog } from './openDialog';
export { default as BohuaUI } from "./BohuaUI";