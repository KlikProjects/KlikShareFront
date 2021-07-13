<template>
  <div class="navbar sticky-top">
    <div class="d-flex align-items-start flex-column mb-5">
    <router-link to="/signup">
      <button class="enterButtons" type="submit">Sign Up</button>
    </router-link>
    <router-link to="/login">
      <button class="enterButtons" type="submit">Login</button>
    </router-link>
  </div>
    <div>
      <img class="img" src="@/assets/img/logofinal.png" alt="Logo" />
    </div>
      
      <span class="iconify" data-icon="bx:bx-user-circle" data-inline="false">
      </span>
  

  </div>
</template>

<script>
export default {
  name: "Header",
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
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
  width: 85px;
  height: 40%;
  color: #a4ebf3;
  position: flex-start;
  margin-bottom: 50px;
}
.img {
  height: 50px;
  margin-bottom: 50px;
}
.btn {
  color: black;
}
searchbar {
  width: 10px;
}
.enterButtons {
  background-color: #4a483f;
  color: #a4ebf3;
  border: #a4ebf3;
}

</style>
