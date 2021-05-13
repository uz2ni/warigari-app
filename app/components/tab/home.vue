<template>
  <label text="홈, 베스트, 신상"></label>
  <label v-bind:text="test2"></label>
  <label v-bind:text="test"></label>
</template>

<script>
import axios from 'axios';
export default {
  name: "home",
  data() {
    return {
      test: 'test',
      test2: 'hello world'
    }
  },
  created() {
    axios.get('https://it-event-back.herokuapp.com/')
        .then(response => {
          this.test = response.data
        })
        .catch(error => console.log(error));
  }
}
</script>

<style scoped>

</style>
