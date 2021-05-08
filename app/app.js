import Main from './components/main'

const Vue = require('nativescript-vue');

new Vue({
  render: h => h(Main)
}).$start()
