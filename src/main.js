// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import moment from 'moment'
import Icon from 'vue-awesome/components/Icon'
import global from '@/global'
import App from './App'
import router from './router'
import store from './store'
import { Header, Tabbar, TabItem, Field, Button } from 'mint-ui'
import 'mint-ui/lib/style.css'
import 'vue-awesome/icons'

Vue.component(Header.name, Header)
Vue.component(Tabbar.name, Tabbar)
Vue.component(TabItem.name, TabItem)
Vue.component(Field.name, Field)
Vue.component(Button.name, Button)
Vue.component('icon', Icon)

Vue.config.productionTip = false
axios.defaults.timeout = global.httpTimeout
axios.defaults.headers.post['Content-Type'] = global.httpContentType
axios.defaults.baseURL = process.env.BASE_URL
Vue.http = Vue.prototype.$http = axios
Vue.moment = Vue.prototype.$moment = moment // use this.$moment or Vue.moment in VueComponents

console.log(process.env.NODE_ENV)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
