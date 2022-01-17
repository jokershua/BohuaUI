import {createRouter, createWebHistory , createWebHashHistory} from "vue-router";

const history = createWebHistory()
const hashRouter = createWebHashHistory()

import Home from './views/Home.vue';
import Doc from './views/Doc.vue';
import SwitchDoc from './views/SwitchDoc.vue';
import ButtonDoc from './views/ButtonDoc.vue';
import DialogDoc from './views/DialogDoc.vue';
import TabDoc from './views/TabDoc.vue';
import InputDoc from './views/InputDoc.vue';
import TableDoc from './views/TableDoc.vue';
import Intro from './views/Intro.vue';
import Install from './views/Install.vue';
import Start from './views/Start.vue';
import MoreComponents from './views/MoreComponents.vue';


const router = createRouter( {
  history: hashRouter,
  linkActiveClass:'link-active',
  routes: [
    {path: '/', component: Home},
    {
      path: '/doc',
      component: Doc,
      children: [
        {path: 'intro', component: Intro},
        {path: 'install', component: Install},
        {path: 'start', component: Start},
        {path: 'switch', component: SwitchDoc},
        {path: 'button', component: ButtonDoc},
        {path: 'dialog', component: DialogDoc},
        {path: 'tab', component: TabDoc},
        {path: 'input', component: InputDoc},
        {path: 'table', component: TableDoc},
        {path: 'more', component: MoreComponents}
      ]
    }
  ]
})

export {
  router
}
