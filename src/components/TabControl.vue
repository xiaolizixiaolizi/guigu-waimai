<!-- 底部菜单栏切换组件 -->
<template>
  <div class="tab-control bottom-border-1px">
    <ul>
      <li v-for="(item, index) in defaultTabBar.tabBarItem" :key="index" @click="changeActive(index,item.routerPathName)">
        <icon :name="defaultTabBar.active===index?item.iconNameActive:item.iconName" :w="item.width" :h="item.width"></icon>
        <span :class="['text',defaultTabBar.active===index?'active':'']">{{item.text}}</span>
      </li>
    </ul>

  </div>
</template>
<script>
export default {
  name: 'TabControl',
  props: {
    tabBarConfig: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      defaultTabBar: {
        tabBarItem: [],
        active: 0 // 默认激活第一项
        // tabBarItem: [
        //   { iconName: 'shouye', iconNameActive: 'shouye-active', text: '首页', width: '0.586667rem', routerPathName: 'shouYe' },
        //   { iconName: 'sousuo', iconNameActive: 'sousuo-active', text: '搜索', width: '0.586667rem', routerPathName: 'souSuo' },
        //   { iconName: 'dingdan', iconNameActive: 'dingdan-active', text: '订单', width: '0.586667rem', routerPathName: 'dindDan' },
        //   { iconName: 'wode', iconNameActive: 'wode-active', text: '我的', width: '0.586667rem', routerPathName: 'woDe' }
        // ],
        // active: 0 // 默认激活第一项
      }
    }
  },
  methods: {
    initDefaultTabBar() {
      this.defaultTabBar = { ...this.defaultTabBar, ...this.tabBarConfig }
    },
    changeActive(index, pathName) {
      this.$router.push({ name: pathName }) // 切换路由
      this.defaultTabBar.active = index // 改变激活值
    }
  },
  mounted() {
    this.initDefaultTabBar()
  }
}
</script>
<style lang="scss" scoped>
.tab-control {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  ul {
    height: $tabHeight;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    align-items: center;
    li {
      display: flex;
      flex-flow: column nowrap;
      align-items: center;
      .text {
        font-size: $fontSize;
        color: $tabBarColor;
        margin: 2px 0;
        &.active {
          color: $tabBarColorActive;
        }
      }
    }
  }
}
</style>

