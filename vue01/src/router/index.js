import Vue from 'vue'
import Router from 'vue-router'
import home from  '../components/wjh/home'
import pageOne from '../components/sjx/Pageone'
Vue.use(Router)

export default new Router({
  routes: [
    {path:'/home',redirect:'/'},
    {path:'/',component:home},
    {path:'/pageOne',component: pageOne}
  ]
})
