import Login from './Login.vue'
import Register from './Register.vue'

const routes = [
    { path: '/'},
    { path: '/login', name: 'Login', component: Login },
    { path: '/register', name: 'Register', component: Register },
]

export default routes;