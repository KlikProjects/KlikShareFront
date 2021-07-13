<template>
<div class="formulario">
    <form action="">
        <label for="user">User:</label>
        <input type="text" v-model="user" placeholder="Name of user" id="user">
        <label for="password">Password:</label>
        <input type="password" id="password">
        <button class="loginbtn">Login</button>
    </form>
</div>
</template>

<style scoped>
.formulario {
    align-items: center;
    display: flex;
    margin-top:60%;
    margin-bottom: 65%;
    font-size: 25px;
    font-family: cursive;
    color: #4A483F;
}

.loginbtn{
    background-color:#4A483F;
    color: #A4EBF3;
    border-radius: 50%;
}
</style>