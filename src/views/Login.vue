<template>
  <div class="formulario">
    <form @submit.prevent="submitLogin()">

      <label for="email">Email:</label>
      <input type="text" name="email" id="email" v-model="form.email" />
      <label for="password">Password:</label>
      <input type="password" name="password" id="password" v-model="form.password" />
      <button class="loginbtn" type="submit">Login</button>
    </form>
  </div>
</template>
<script>
import {mapActions} from 'vuex'
 export default {
    name: "Login",
    data() {
      return {
        form: {
          email: '',
          password: '',
        },
      };
    },
    methods: {
        ...mapActions({
            LogIn: 'auth/LogIn'
        }),
      async submitLogin() {
          this.LogIn(this.form)
        }
      
         
      },
    }

</script>
<style scoped>
  .formulario {
    align-items: center;
    display: flex;
    margin-top: 60%;
    margin-bottom: 65%;
    font-size: 25px;
    font-family: cursive;
    color: #4a483f;
  }

  .loginbtn {
    background-color: #4a483f;
    color: #a4ebf3;
    border-radius: 50%;
  }
</style>
