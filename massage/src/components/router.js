import Vue from 'vue';
import Router from 'vue-router';
import Home from './Home.vue'
import Login from './Login.vue'
import Register from './Register.vue'

Vue.use(Router)

export default new Router({
   routes: [
        { 
            path: '/', 
            name: 'Home', 
            component: Home
        },
        { 
            path: '/login', 
            name: 'Login', 
            component: Login 
        },
        { 
            path: '/register', 
            name: 'Register', 
            component: Register 
        }
    ]
})

// router.beforeEach((to, from, next) => {
//     // redirect to login page if not logged in and trying to access a restricted page
//     const publicPages = ['/login', '/register'];
//     const authRequired = !publicPages.includes(to.path);
//     const loggedIn = localStorage.getItem('user');
  
//     if (authRequired && !loggedIn) {
//       return next('/login');
//     }
  
//     next();
//   })