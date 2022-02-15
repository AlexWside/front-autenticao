// servem apara alterar os estados do state (data global ) 
/* 

pois os dados não podem ser alterados diretamente, como por exemplo:

this.user = 'bla bla bla'


isso só pode ser feito atraves de uma mutations que é chamada 
por uma actions 
*/

import * as types from './mutation-types'

export default {
      [types.SET_USER] (state, payload){
        state.user = payload
      },
      [types.SET_TOKEN] (state, payload){
        state.token = payload
      }
}

/* 

exportar uma função para alterar cada atributo 
*/