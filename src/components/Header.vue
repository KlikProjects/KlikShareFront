<template>
  <div class="container-fluid d-flex flex-row justify-content-between align-items-center navbar">
    <router-link to="/" class="ct-img"><img class="img-logo" src="@/assets/img/logofinal.png" alt="Logo" /></router-link>
    <div class="d-flex flex-column">
      <div class="d-flex align-items-start flex-row">
        <template v-if="!authenticated">
          <router-link to="/signup">
            <button class="bt-user" type="submit">Sign Up |</button>
          </router-link>
          <router-link to="/login">
            <button class="bt-user" type="submit">Login</button>
          </router-link>
        </template>
        <template v-if="authenticated">
          <button class="bt-user" @click.prevent="logOut">Logout</button>
        </template>
      </div>
    </div>
    <div class="d-flex justify-content-end">
      <router-link to="/Profile">
        <span class="iconify" data-icon="bx:bx-user-circle" data-inline="false"></span>
      </router-link>
    </div>
  </div>
  <div class="ct-user">
    <p v-if="authenticated" class="txt-user">Bienvenido {{ user.name }}</p>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from "vuex";
  export default {
    name: "Header",
    computed: {
      ...mapGetters({
        authenticated: "auth/authenticated",
        user: "auth/user",
      }),
    },
    methods:{
      ...mapActions({
        logOutAction: 'auth/logOut'
      }),
      logOut(){
        this.logOutAction().then(()=>{
          this.$router.push("/")
        })
      }

    }
  };
</script>

<style scoped>
.navbar{
  background-color: #4a483f;
  height: 10vh;
}
.img-logo{
  width: auto;
  height: 90%;
}
.ct-img{
  height: 100%;
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
.ct-user{
  background-color: #CCF2F3;
}
.txt-user{
  margin: 0px;
}
</style>
