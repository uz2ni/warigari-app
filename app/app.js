const Vue = require('nativescript-vue');

import Main from './components/main'

new Vue({
  render: h => h("frame", [h(Main)])
}).$start()
