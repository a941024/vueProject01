import Vue from 'vue'
import Router from 'vue-router'

import  home from "../components/wjh/home"
import findCity from "../components/wjh/findCity"
import logIn from "../components/wjh/logIn"

import AccInfo from '../components/sjx/Mine/AccountInfo'
import SetUsName from '../components/sjx/Mine/SetUserName'
import SetAddress from '../components/sjx/Mine/Address'
import Add from '../components/sjx/Mine/Add'

import TakeOut from "../components/qym/TakeOut"
import Restaurant from "../components/qym/Restaurant"

Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',redirect:'/home'},
    {path:'/home',component:home},
    {path:'/findCity',component:findCity},
    {path:'/logIn',component:logIn},

    {path:'/mine',component: AccInfo},
    {path:'/setusername',component:SetUsName},
    {path:'/address',component:SetAddress},
    {path:'/add',component:Add},


    {path:'/TakeOut',component:TakeOut},
    {path:'/Restaurant',component:Restaurant}
  ]
})
