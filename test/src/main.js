// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import axios from 'axios'

import VueI18n from 'vue-i18n'
import ElementUI from 'element-ui'
import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
import locale from 'element-ui/lib/locale'
import 'element-ui/lib/theme-default/index.css'
Vue.prototype.$ajax = axios
Vue.use(VueResource)
Vue.use(VueI18n)
Vue.use(ElementUI,{enLocale})
window.axios = axios

Vue.config.productionTip = false


var i18n = new VueI18n({
  locale:"zh-CN",
  messages:{
    "zh-CN":require("./assets/i18n/zh-cn.js"),
    "en-US":require("./assets/i18n/en.js") 
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
