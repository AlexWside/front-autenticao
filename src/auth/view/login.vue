<template>
  <div class="login">
    <form @submit.prevent="submit()">
    <div class="container">
      <h1>Login</h1>
      
      <div class="input-login">
        <div class="label">Login</div>
        <input type="email" v-model="form.email" name="login" placeholder="login" required/>
      </div>

      <div class="input-login">
        <div class="label">Senha</div>
        <input type="password" v-model="form.password" name="password" placeholder="password" required />
      </div>

      <button class="btn btn-entrar">Entrar</button>

    </div>
   </form>
  </div>
</template>

<script>
import { http } from '@/http'

export default {
  data() {
    return {
      form: {
      email: '',
      password: ''
      }
    }
  },
  methods: {
    submit(){
   //  console.log(this.form)
     http.post('api/login', this.form).then(res => {
       console.log(res)
     }).catch(e => {
       console.log(e.status)
     })
    }
  },

  created() {
    document.body.style.backgroundColor = "orange";
  },
  destroyed: function () {
    document.body.style.backgroundColor = null;
  },
};
</script>

<style scoped >
.container {
  margin-top: 15%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2em;
  border-radius: 30px;
  max-width: 50%;
}

.input-login {
  margin-top: 1em;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.input-login input {
  width: 100%;
  border: none;
  border-radius: 15px;
  outline: none;
  padding: 5px 10px;
  background-color: #ccc;
}

.btn-entrar {
  margin-top: 1em;
  width: 30%;
  background-color: green;
  color: #fff;
  border: none;
  border-radius: 15px;
  padding: 5px 20px;
}
</style>