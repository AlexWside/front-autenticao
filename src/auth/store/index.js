import  state from './state'
import mutations from './mutations'
import * as actions from './actions'
import * as getters from './getters'

export default {
  state,
  mutations,
  actions,
  getters,
  namespaced:true //garante que o modulo auth vai ter um prefixo auth

}