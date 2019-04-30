import Vue from 'vue';
import Router from 'vue-router';
import Home from './Home.vue'
import Login from './Login.vue'
import Register from './Register.vue'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        { 
            path: '/', 
            name: 'Home', 
            component: Home,
            beforeEach: (to, from, next) => {
                next();
            }
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
        },
        {
            path: '*',
            redirect: '/login'
          }
    ]
})

router.beforeEach((to, from, next) => {
    // redirect to login page if not logged in and trying to access a restricted page
    const publicPages = ['/login', '/register'];
    const authRequired = !publicPages.includes(to.path);
    const userHasToken = localStorage.getItem('token');
  
    if (authRequired && !userHasToken) {
      return next('/login');
    }

    if (to.fullPath === '/login' && userHasToken || to.fullPath === '/register' && userHasToken) {
        return next('/');
    }

    next();
  })

  export default router;