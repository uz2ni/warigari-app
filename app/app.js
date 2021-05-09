const Vue = require('nativescript-vue');

import Main from './components/main.vue'

const Master = {
  template: `
    <Main></Main>
  `,
  components: Main
};

new Vue({
  render: h => h(Master)
}).$start()
