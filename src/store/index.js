import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      id: String,
      role: Number,
      jwt: String
    }
  },
  mutations: {
    setId(state, id){
      state.user.id = id
    },
    setRole(state, role){
      state.user.role = role
    },
    setJwt(state, token){
      state.user.jwt = token
    },
    signOut(state){
      state.user = null
    }
  },
  actions: {
  },
  modules: {
  }
})
