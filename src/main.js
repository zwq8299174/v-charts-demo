// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import * as FastClick from "fastclick"
import App from './App'
import router from './router'
import './styles/theme.styl'
import './styles/global.css'

import VePie from 'v-charts/lib/pie'


FastClick.attach(document.body)

Vue.config.productionTip = false

Vue.component(VePie.name, VePie);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
