const Vue = require('nativescript-vue');

import Main from './components/main.vue'

new Vue({
  render: h => h("frame", [h(Main)])
}).$start()
