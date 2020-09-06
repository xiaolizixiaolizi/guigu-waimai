import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
const routes = [
  { path: '/', redirect: '/shouye' },
  {
    path: '/shouye',
    name: 'shouYe',
    component: () => import('views/shouye/ShouYe')
  },
  {
    path: '/sousuo',
    name: 'souSuo',
    component: () => import('views/sousuo/SouSuo')
  },
  {
    path: '/dingdan',
    name: 'dindDan',
    component: () => import('views/dingdan/Order')
  },
  {
    path: '/wode',
    name: 'woDe',
    component: () => import('views/wode/WoDe')
  }
]

const router = new VueRouter({
  routes
})

export default router
