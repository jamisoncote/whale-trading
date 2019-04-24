import Vue from 'vue'
import App from './App.vue'
import routes from './components/routes'
import VueRouter from 'vue-router'

// window.eventBus = new Vue()

Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({
  routes
})

// new Vue({
//   el: '#app',
//   router: router,
//   components: { App },
//   template: '<App />'
// })

new Vue({
  router,
  render: h => h(App)
  }).$mount('#app')

