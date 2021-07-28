<template>
<div class="form">
    <form @submit.prevent="submitRegister">
      <div class="mb-3">
        <label for="name" class="form-label txt-label">Name</label>
        <input type="text" id="name" v-model="form.name" class="form-control txt-label">
      </div>
      <div class="mb-3">
        <label for="email" class="form-label txt-label">Email</label>
        <input type="email" name="" id="email" v-model="form.email" class="form-control txt-label">
      </div>
      <div class="mb-3">
        <label for="password" class="form-label txt-label">Password:</label>
        <input type="password" id="password" name="password" v-model="form.password" class="form-control txt-label">
      </div>
      <div class="mb-3">
        <label for="password" class="form-label txt-label">Confirm Password:</label>
        <input type="password" id="c_password" name="c_password" v-model="form.c_password" class="form-control txt-label">
      </div>
      <button type="submit" class="bt-login m-3">Sign up</button>
    </form>
</div>
</template>

<script>
 import { authService } from "..//services/authService";
 export default {
    name: "SingUp",
    data() {
      return {
        form: {
            name:'',
            email: '',
            password: '',
            c_password: '',
        },
      };
    },
    methods: {
      async submitRegister() {
        let response = authService.getRegister(this.form)
        }
      
         
      },
    }

</script>

<style scoped>
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

.profileImg {
    width: 65%;
}
</style>