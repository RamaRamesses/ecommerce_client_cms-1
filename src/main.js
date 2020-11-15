import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router'
import { store } from './store/store.js'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faUser, faShoppingCart, faList, faAngleRight, faPlusSquare, faTachometerAlt, faArchive } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

Vue.use(VueSweetalert2)
library.add(faUserSecret)
library.add(faUser)
library.add(faShoppingCart)
library.add(faList)
library.add(faAngleRight)
library.add(faPlusSquare)
library.add(faTachometerAlt)
library.add(faArchive)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.use(Vuex)

Vue.config.productionTip = false

new Vue({
  store,
  el: '#app',
  router,
  render: h => h(App)
}).$mount('#app')
