import services from '@/http'
import * as storage from '../storage'
import * as types from  './mutation-types'


export const  ActionLogin = ( { dispatch }, payload ) => {
  return services.auth.login(payload).then(res => {
    dispatch('ActionSetToken', res.data.token) 
    //dispatch('ActionSetToken', res.data.token) // setandon mais de um
  })
}


export const ActionCheckToken = ({dispatch,state}) => {
  if(state.token){
    return Promise.resolve(state.token)
  }

  const token = storage.getLocalToken()

  if(!token){
    return Promise.reject(new Error('token invalido'))
  }

  dispatch('ActionSetToken', token)
  return dispatch('ActionSetToken', token)
}

export const ActionSetUser = ({commit}, payload) => {
commit(types.SET_USER, payload)
}
export const ActionSetToken = ({commit}, payload) => {
  //payload já é o token 
  storage.setLocalToken(payload) // seta no localStorage 
  storage.setHeaderToken(payload) //seta no Header 
  commit(types.SET_TOKEN, payload)
}


export const ActionSingOut = ({ dispatch }) => {
  storage.setHeaderToken('')
  storage.deleteLocalToken()
  dispatch('ActionSetToken', '')
}