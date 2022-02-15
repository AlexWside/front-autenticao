
import store from '../store'

export default () => {
    
  return ({ status }) => {
    if(status === 401){
      store.dispatch('auth/ActionSingOut')
      window._Vue.$router.push({ name: 'login'})
    }
  }
  
}