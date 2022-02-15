<template>
  <div class="home">

    <h1>Home</h1>

    <button @click="logout()">logout</button>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions } from 'vuex' // para chamar action

export default {
  name: 'home',
  components: {
  
  },
    methods: {

    ...mapActions ('auth', ['ActionSingOut']),  // invocar action


    async logout(){
  
    try {
      await  this.ActionSingOut()

      this.$router.push({ name: 'login'})
    } catch (e) {
          alert(e.data? e.data.message : 'ops ocorreu um erro inesperado' )
    }

    },




  }
}
</script>
