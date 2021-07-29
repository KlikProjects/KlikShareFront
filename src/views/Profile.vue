<template>
  <template v-if="authenticated">
      <div class="d-flex flex-column justify-content-start align-items-center pt-4 ct-profile">
        <div class="d-flex flex-row justify-content-center align-items-center ct-user">
          <img class="img-user p-2" src="../assets/user.png" alt="usericon">
          <h4 class="txt-username p-2">{{user.name}}</h4>
        </div>

        <div class="d-flex flex-row justify-content-start align-items-center">
          <div class="d-flex flex-column justify-content-start align-items-start p-2">
            <p class="m-0">email: {{user.email}}</p>
            <p class="m-0">password: **********</p>
          </div>
          <div class="ct-klikcoins d-flex flex-column justify-content-center align-items-center p-2">
            <router-link to="/Gifts"><img class="img-klikcoins" src="../assets/klikcoin.png" alt="Klikcoins"></router-link>
            <h5 class="txt-klikcoins m-2"><span >{{user.klikcoinsUsers}} KlikCoins</span></h5>
          </div>
        </div>
        <hr class="line">
        
        <!-- OJO Implementar cuando se tenga ya los productos donados, en donación y recibidos -->

        <!-- <div class="d-flex flex-column align-items-start w-100 p-2"> 
          <h5 class="m-3"><b>En donación:</b></h5>
              <div class="d-flex justify-content-start m-2">
              
              </div>
          <h5 class="m-3"><b>Donado:</b></h5>
              <div class="d-flex justify-content-start">
              
              </div>
          <h5 class="m-3"><b>Recibido:</b></h5>
              <div class="d-flex justify-content-start">
              </div>
        </div> -->
      </div>
  </template>
  <template v-if="!authenticated">
    <div class="d-flex flex-column justify-content-center align-items-center p-3 ct-profileNoAuth">
      <p>Para acceder a tu perfil, primero necesitas acceder a tu cuenta</p>
      <router-link to="login">
        <button class="bt-goLogin px-3">Ir a login</button>
      </router-link>
    </div>
  </template>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: 'Profile',
  components: {
    
  },
  computed: {
      ...mapGetters({
        authenticated: "auth/authenticated",
        user: "auth/user",
      }),
  },
}
</script>
<style>
.ct-profile{
  height: 78vh;
}
.ct-profileNoAuth{
  height: 81vh;
}
.img-klikcoins {
  width: 50px;
  height: 50px;
}
.txt-klikcoins{
  color: #4A483F;
  font-weight: bold;
}
.line{
  border: 1px solid #A4EBF3;
  width: 90vw;
  opacity: 0.8;
}
.img-user{
  width:70px;
  height: 70px;
}
.txt-username{
  font-size: 20px;
  font-weight: 700;
}
.bt-goLogin{
    font-family: Avenir, Helvetica, Arial, sans-serif;
    border-radius: 15px;
    background-color: #4A483F;
    color: #CCF2F3;
    border: none;
    font-size: 15px;
    width: auto;
    height: auto;
  }
.btn{
 background-color:#2e2603;
  color: #A4EBF3;
}
.span:hover .img {
  transform: translateY(0) scale(2.2);
}


</style>