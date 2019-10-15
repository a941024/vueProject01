import Vue from 'vue'
import Router from 'vue-router'

import home from "../components/wjh/home"
import findCity from "../components/wjh/findCity"
import logIn from "../components/wjh/logIn"
import ResetPassword from "../components/wjh/ResetPassword"
import find from "../components/wjh/find"

import AccInfo from '../components/sjx/Mine/AccountInfo'
import SetUsName from '../components/sjx/Mine/SetUserName'
import SetAddress from '../components/sjx/Mine/Address'
import Add from '../components/sjx/Mine/Add'
import Profile from '../components/sjx/Profile'
import Balance from '../components/sjx/MyBalance/Balance'
import BaState from '../components/sjx/MyBalance/BalanceState'
import Points from '../components/sjx/Mypoints/Points'
import PoState from '../components/sjx/Mypoints/PointsState'
import Benefit from '../components/sjx/MyBenefit/Benefit'
import BenefitState from '../components/sjx/MyBenefit/BenefitState'

import TakeOut from "../components/qym/TakeOut"
import Restaurant from "../components/qym/Restaurant"
import storeClassify from "../components/qym/storeClassify"
import Particulars from "../components/qym/Particulars"

Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',redirect:'/home'},
    {path:'/home',component:home},
    {path:'/findCity',component:findCity},
    {path:'/logIn',component:logIn},
    {path:'/password',component:ResetPassword},
    {path:'/find',component:find},

    {path:'/mine',component: AccInfo},
    {path:'/setusername',component:SetUsName},
    {path:'/address',component:SetAddress},
    {path:'/add',component:Add},
    {path:'/profile',component:Profile},
    {path:'/balance',component:Balance},
    {path:'/bastate',component:BaState},
    {path:'/points',component:Points},
    {path:'/postate',component:PoState},
    {path:'/benefit',component:Benefit},
    {path:'/bestate',component:BenefitState},


    {path:'/TakeOut',component:TakeOut},
    {path:'/Restaurant',component:Restaurant},
    {path:'/storeClassify',component:storeClassify},
    {path:'/Particulars',component:Particulars}
  ]
})
