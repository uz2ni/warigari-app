<template>
  <ListView for="value in tests">
    <v-template>
      <Label>{{value["nickname"]}} / {{value["weight"]}} / {{value["idx"]}} / {{value["height"]}}</Label>
    </v-template>
  </ListView>
</template>

<script>
import axios from 'axios';
export default {
  name: "home",
  data() {
    return {
      tests: []
    }
  },
  created() {
    axios.get('https://it-event-back.herokuapp.com/')
        .then((response)=> {
          let data = response.data;
          for(let t in data) {
            console.log(data[t]);
            this.tests.push(data[t]);
          }
        })
        .catch(error => console.log(error));
  }
}
</script>

<style scoped>

</style>
