<template>
  <Page actionBarHidden="true" backgroundSpanUnderStatusBar="true">
    <TabView>
      <TabViewItem title="Home"><Home/></TabViewItem>
      <TabViewItem title="Shop"><Shop/></TabViewItem>
      <TabViewItem title="Collect"><Collect/></TabViewItem>
      <TabViewItem title="Heart"><Heart/></TabViewItem>
      <TabViewItem title="My"><My/></TabViewItem>
    </TabView>
  </Page>
</template>

<script>
import Home from './tab/Home'
import Shop from './tab/Shop'
import Collect from './tab/Collect'
import Heart from './tab/Heart'
import My from './tab/My'

export default {
  name: "main",
  components: {
    Home, Shop, Collect, Heart, My
  }
}
</script>

<style scoped>

</style>
