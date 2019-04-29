import Vue from 'vue'
import Nav from './components/Nav.vue'
import router from './components/router'
import store from './store/index.js'
// import axios from 'axios';

// window.eventBus = new Vue()

Vue.config.productionTip = false


// Vue.prototype.$http = axios;
// const token = localStorage.getItem('token')
// if (token) {
//   Vue.prototype.$http.defaults.headers.common['Authorization'] = token
// }

// router.beforeEach((to, from, next) => {
//   if(to.fullPath === '/') {
//     if (condition) {
      
//     }
//   }
// })

new Vue({
  store,
  router,
  render: h => h(Nav)
}).$mount('#app')