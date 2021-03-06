import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)
const debug = process.env.NODE !== 'production'

export default new Vuex.Store({
  strict: debug,
  plugins: debug ? [createLogger] : [],
  state: {},
  getters: {},
  actions: {},
  mutations: {}
})
