import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'
import axios from 'axios'

Vue.use(Vuex)
let api = axios.create({
  baseURL: '//localhost:3000/api'
})

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
        commit('setItems', res.data)
      } catch (error) {
        console.error('store.js: getItems()')
      }
    }
  }
})
