// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import YDUI from 'vue-ydui'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import store from './store/store.js'
// import 'vue-ydui/dist/ydui.rem.css'
// import { Datetime, Group } from 'vux'
Vue.use(MintUI)
Vue.config.productionTip = false
// Vue.use(YDUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
  // render: h => h(App)
})
