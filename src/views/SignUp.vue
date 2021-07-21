<template>
<div class="formulario">
    <form @submit.prevent="submitRegister">
        <label for="name">Name</label>
        <input type="text"  id="name" v-model="form.name">
        <label for="email">Email</label>
        <input type="email" name="" id="email" v-model="form.email">
    
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" v-model="form.password">
        <label for="password">Confirm Password:</label>
        <input type="password" id="c_password" name="c_password" v-model="form.c_password">
        <button type="submit" class="loginbtn">Login</button>
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

.formulario {
    align-items: center;
    display: flex;
    margin-top:35%;
    margin-bottom: 35%;
    font-size: 25px;
    font-family: cursive;
    color: #4A483F;
}

.loginbtn{
    background-color:#4A483F;
    color: #A4EBF3;
    border-radius: 50%;
}

.profileImg {
    width: 65%;
}
</style>