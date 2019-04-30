import axios from 'axios';

const state = {
    status: '',
    token: localStorage.getItem('token') || '',
    user : {}
};

const getters = {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status,
};

const actions = {
    register({commit}, credentials){
        return new Promise((resolve, reject) => {
            commit('auth_request')
            axios({ method: "POST", "url": "http://localhost:3000/api/register", "data": credentials, "headers": { "content-type": "application/json" } })
            .then(res => {
                const token = res.data.token
                const user = res.data.user
                localStorage.setItem('token', token)
                localStorage.setItem('user', user)
                axios.defaults.headers.common['Authorization'] = token
                commit('auth_success', token, user)
                resolve(res)
          })
            .catch(err => {
                commit('auth_error', err)
                localStorage.removeItem('token')
                reject(err)
          })
        })
    },

    login({commit}, credentials) {
        return new Promise((resolve, reject) => {
            commit('auth_request')
            axios({ method: "POST", "url": "http://localhost:3000/api/login", "data": credentials, "headers": { "content-type": "application/json" } })
            .then(res => {
                const token = res.data.token;
                const user = res.data.user;
                localStorage.setItem('token', token);
                localStorage.setItem('user', JSON.stringify(user));
                commit('auth_success', token, user)
                resolve(res)
            })
            .catch(err => {
                commit('auth_error')
                localStorage.removeItem('token')
                reject(err)
            })
        })
    },

    logout({commit}){
        return new Promise((resolve, reject) => {
          commit('logout')
          localStorage.removeItem('token')
          localStorage.removeItem('user')
          delete axios.defaults.headers.common['Authorization']
          resolve()
          reject()
        })
      },
};

const mutations = {
    auth_request(state){
        state.status = 'loading'
    },
    auth_success(state, token, user){
        state.status = 'success'
        state.token = token
        state.user = user
    },
    auth_error(state){
        state.status = 'error'
    },
    logout(state){
        state.status = ''
        state.token = ''
    },
};

export default {
    state,
    getters,
    actions,
    mutations
}