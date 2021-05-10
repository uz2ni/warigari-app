const Vue = require('nativescript-vue');

const Master = {
  template: `
    <TabView :selectedIndex="selectedIndex">
      <TabViewItem title="HOME">
        <label text="홈, 베스트, 신상"></label>
      </TabViewItem>
      <TabViewItem title="SHOP">
        <label text="랭킹, 즐겨찾기"></label>
      </TabViewItem>
      <TabViewItem title="ALL">
        <label text="모아보기"></label>
      </TabViewItem>
      <TabViewItem title="HEART">
        <label text="찜한 아이템"></label>
      </TabViewItem>
      <TabViewItem title="MY">
        <label text="마이페이지"></label>
      </TabViewItem>
    </TabView>
  `
};

new Vue({
  render: h => h(Master)
}).$start()
