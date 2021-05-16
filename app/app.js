import VueDevtools from 'nativescript-vue-devtools'
import Vue from 'nativescript-vue';
import BottomNavigation from '@nativescript-community/ui-material-bottom-navigation/vue';
import TabsPlugin from '@nativescript-community/ui-material-tabs/vue';

import Main from './components/main'

Vue.use(VueDevtools);
Vue.use(BottomNavigation);
Vue.use(TabsPlugin);

new Vue({
  render: h => h("frame", [h(Main)])
}).$start()
