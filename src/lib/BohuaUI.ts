// 用户引入BohuaUI则可以完成全部组件的引入

import BoDialog from "./BoDialog.vue";
import BoButton from "./BoButton.vue";
import BoSwitch from "./BoSwitch.vue";
import BoInput from "./BoInput.vue";
import BoTabs from "./BoTabs.vue";
import BoTab from "./BoTab.vue";
import BoTable from './BoTable.vue';
import { ComponentOptions } from "vue";

export default {
  install: (app: ComponentOptions) => {
    app.component("BoSwitch", BoSwitch);
    app.component("BoInput", BoInput);
    app.component("BoButton", BoButton);
    app.component("BoDialog", BoDialog);
    app.component("BoTab", BoTab);
    app.component("BoTabs", BoTabs);
    app.component("BoTable", BoTable);
  },
};