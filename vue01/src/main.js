// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vant from 'vant';
import 'vant/lib/index.css';
import '../src/peishi/PeiShi_w'
import myHttp from "./axios/http"
axios.defaults.withCredentials = true;

import axios from 'axios'
import VueAxios from 'vue-axios'

//将自定义的网络请求对象赋值给Vue构造函数的原型对象，这样当前项目的任意地方至于获取到Vue实例，就可发起自定义网络请求
Vue.prototype.myHttp = myHttp;

Vue.use(VueAxios, axios)
Vue.use(Vant);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
