import Vue from 'vue'
import Vuex from 'vuex'
import MembersModule from './MembersModule'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    MembersModule
  } 
})
