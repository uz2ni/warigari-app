<template>
  <Page actionBarHidden="true" backgroundSpanUnderStatusBar="true">
    <MDBottomNavigation selectedIndex="1">
      <!-- The bottom tab UI is created via TabStrip (the containier) and TabStripItem (for each tab)-->
      <MDTabStrip>
        <MDTabStripItem>
          <Label text="Home"></Label>
        </MDTabStripItem>
        <MDTabStripItem class="special">
          <Label text="Account"></Label>
        </MDTabStripItem>
        <MDTabStripItem class="special">
          <Label text="Search"></Label>
        </MDTabStripItem>
      </MDTabStrip>

      <!-- The number of TabContentItem components should corespond to the number of TabStripItem components -->
      <MDTabContentItem>
        <MDTabs selectedIndex="1">
          <!-- The bottom tab UI is created via TabStrip (the containier) and TabStripItem (for each tab)-->
          <MDTabStrip>
            <MDTabStripItem>
              <Label text="Home"></Label>
            </MDTabStripItem>
            <MDTabStripItem class="special">
              <Label text="Account"></Label>
            </MDTabStripItem>
            <MDTabStripItem class="special">
              <Label text="Search"></Label>
            </MDTabStripItem>
          </MDTabStrip>

          <!-- The number of TabContentItem components should corespond to the number of TabStripItem components -->
          <MDTabContentItem>
            <GridLayout>
              <Label text="Home Page" class="h2 text-center"></Label>
            </GridLayout>
          </MDTabContentItem>
          <MDTabContentItem>
            <GridLayout>
              <Label text="Account Page" class="h2 text-center"></Label>
            </GridLayout>
          </MDTabContentItem>
          <MDTabContentItem>
            <GridLayout>
              <Label text="Search Page" class="h2 text-center"></Label>
            </GridLayout>
          </MDTabContentItem>
        </MDTabs>
      </MDTabContentItem>

      <MDTabContentItem>
        <GridLayout>
          <Label text="Account Page" class="h2 text-center"></Label>
        </GridLayout>
      </MDTabContentItem>

      <MDTabContentItem>
        <GridLayout>
          <Label text="Search Page" class="h2 text-center"></Label>
        </GridLayout>
      </MDTabContentItem>
    </MDBottomNavigation>
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
