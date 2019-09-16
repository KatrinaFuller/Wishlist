import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'
import axios from 'axios'

Vue.use(Vuex)
let api = axios.create({
  baseURL: '//bcw-sandbox.herokuapp.com/api/katrina/'
  // baseURL: '//localhost:3000/api'
})

//Allows axios to work locally or live
// let base = window.location.host.includes('localhost:8080') ? '//localhost:3000/' : '/'

// let api = axios.create({
//   baseURL: base + "api/",
//   timeout: 6000,
//   withCredentials: true
// })

export default new Vuex.Store({
  state: {
    items: []
  },
  mutations: {
    setItems(state, payload) {
      state.items = payload
    }
  },
  actions: {
    async getItems({ commit, dispatch }) {
      try {
        let res = await api.get('items')
        commit('setItems', res.data.data)
      } catch (error) {
        console.error('store.js: getItems()')
      }
    },
    async addItem({ dispatch }, payload) {
      try {
        let res = await api.post('/', payload)
        dispatch('getItems')
      } catch (error) {
        console.error('store.js: addItem()')

      }
    }
  }
})
