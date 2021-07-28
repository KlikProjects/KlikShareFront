<template>
  <div class="form">
    <form @submit.prevent="submitLogin()">
      <div class="mb-3">
        <label for="email" class="form-label txt-label">Email:</label>
        <input type="text" name="email" id="email" v-model="form.email" class="form-control txt-label" />
      </div>
      <div class="mb-3">
        <label for="password" class="form-label txt-label">Password:</label>
        <input type="password" name="password" id="password" v-model="form.password" class="form-control txt-label" />
      </div>
      <button class="bt-login m-3" type="submit">Login</button>
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
           this.$router.push("/");
        }
      
         
      },
    }

</script>
<style>
  .txt-label{
    font-family: Avenir, Helvetica, Arial, sans-serif;
  }
  .form {
    display: grid;
    place-content: center;
    font-size: 20px;
    color: #4a483f;
    height:81vh;
  }
  .bt-login{
    font-family: Avenir, Helvetica, Arial, sans-serif;
    border-radius: 15px;
    background-color: #4A483F;
    color: #CCF2F3;
    border: none;
    font-size: 20px;
    width: 110px;
    height: auto;
  }
</style>
