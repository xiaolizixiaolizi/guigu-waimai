<template>
  <div id="app">
    <router-view />
    <tab-control :tab-bar-config="tabBarConfig"></tab-control>
  </div>
</template>

<script>
import TabControl from './components/TabControl'
export default {
  name: 'App',
  components: {
    TabControl
  },
  data() {
    return {
      tabBarConfig: {
        tabBarItem: [
          { iconName: 'shouye', iconNameActive: 'shouye-active', text: '首页', width: '0.586667rem', routerPathName: 'shouYe' },
          { iconName: 'sousuo', iconNameActive: 'sousuo-active', text: '搜索', width: '0.586667rem', routerPathName: 'souSuo' },
          { iconName: 'dingdan', iconNameActive: 'dingdan-active', text: '订单', width: '0.586667rem', routerPathName: 'dindDan' },
          { iconName: 'wode', iconNameActive: 'wode-active', text: '我的', width: '0.586667rem', routerPathName: 'woDe' }
        ],
        active: 0 // 默认激活第一项
      }
    }
  },
  methods: {}
}
</script>

<style lang="scss">
#app {
}
</style>

