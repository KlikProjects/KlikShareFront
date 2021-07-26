<template>
  <div class="container-fluid d-flex flex-row justify-content-between align-items-center navbar">
    
    <img class="img-logo" src="@/assets/img/logofinal.png" alt="Logo" />
    
    <div class="d-flex flex-column">
      <div class="d-flex align-items-start flex-row">
        <router-link to="/signup">
          <button class="bt-user" type="submit">Sign Up |</button>
        </router-link>
        <router-link to="/login">
          <button class="bt-user" type="submit">Login</button>
        </router-link>
      </div>
      <div class="d-flex justify-content-end">
          <router-link to="/Profile">
          <span class="iconify" data-icon="bx:bx-user-circle" data-inline="false"></span>
          </router-link>
      </div>
    </div>
    
    
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {},
};
</script>

<style scoped>
.navbar{
  background-color: #4a483f;
  height: 12vh;
}
.img-logo{
  width: auto;
  height: 90%;
}
.iconify {
  width: 30px;
  height: auto;
  color: #CCF2F3;
}
.bt-user{
  background-color: transparent;
  border: none;
  color: #CCF2F3;
}

/* h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.navbar {
  background: #4a483f;
  width: 100%;
  height: 10vh;
  display: flex;
}

.iconify {
  width: 50px;
  height: 40%;
  color: #a4ebf3;
  margin-bottom: 45px;
}
.img-logo {
  height: 60px;
}
.btn {
  color: black;
}
.searchbar {
  width: 10px;
}
.enterButtons {
  background-color: #4a483f;
  color: #a4ebf3;
  border: #a4ebf3;
} */

</style>
