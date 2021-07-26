<template>
<div class="formulario">
    <form action="">
        <label for="name"></label>
        <input type="text" placeholder="Name" id="name" required>
        <label for="lastname"></label>
        <input type="text" placeholder="LastName" id="lastname" required>
        <label for="email"></label>
        <input type="email" name="" id="email" placeholder="Email" required>
        <input class="profileImg" type="file" placeholder="Your Profile Image" id="image"><br>
        <label for="image"></label>
        <input type="text" placeholder="Profile Image">
        <label for="user">User:</label>
        <input type="text" v-model="user" placeholder="Name of user" id="user" required>
        <label for="password">Password:</label>
        <input type="password" id="password" required>
        <button type="submit" class="loginbtn">Login</button>
    </form>
</div>
</template>

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