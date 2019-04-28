import Vue from 'vue'
import Nav from './components/Nav.vue'
import routes from './components/routes'
import VueRouter from 'vue-router'

// window.eventBus = new Vue()

Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({
  routes
})

// router.beforeEach((to, from, next) => {
//   //
// })

// just render the navbar for every page rather than 'App
new Vue({
  router,
  render: h => h(Nav)
  }).$mount('#app')

// new Vue({
//   el: '#app',
//   router: router,
//   components: { App },
//   template: '<App />'
// })