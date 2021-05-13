import VueDevtools from 'nativescript-vue-devtools'
const Vue = require('nativescript-vue');

import Main from './components/main'

Vue.use(VueDevtools)

new Vue({
  render: h => h("frame", [h(Main)])
}).$start()
