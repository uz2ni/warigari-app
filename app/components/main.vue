<template>
  <Page actionBarHidden="true" backgroundSpanUnderStatusBar="true">
    <StackLayout backgroundColor="#3c495e">
      <Button text="모아보기" @tap="goToHomePage" backgroundColor="blue" />
      <Button text="즐겨찾기" backgroundColor="red" />
      <Button text="내정보" backgroundColor="green" />
    </StackLayout>
  </Page>
</template>

<script>
import Home from './tab/home.vue'
export default {
  name: "main",
  components: {
    Home
  },
  methods: {
    goToHomePage() {
      this.$navigateTo(Home);
    }
  }
}
</script>

<style scoped>

</style>
