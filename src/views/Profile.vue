<template>
   <div>
    <div class="user  d-flex justify-content-between w-100 h-100 mt-">
      <img class="usericon mt-3 m-1 " src="../assets/user.png" alt="usericon">
        <router-link to="/Gifts"><img class="klikcoins m-1 mt-5" src="../assets/klikcoin.png" alt="usercoinsicon"></router-link>
    </div>
    <div class="username d-flex justify-content-between">
        <h4 class="username m-2 ">User Name</h4>
        <h5 class="klikcoin m-2"><span >30 KlikCoins</span></h5>
    </div>
    <h5 class="m-3"><b>En donación:</b></h5>
        <div class="d-flex justify-content-start m-2">
          <Card />
          <Card />
        </div>
    <h5 class="m-3"><b>Donado:</b></h5>
        <div class="d-flex justify-content-start">
          <Card />
          <Card />
        </div>
    <h5 class="m-3"><b>Recibido:</b></h5>
        <div class="d-flex justify-content-start">
          <Card />
          <Card />
        </div>
  </div>
</template>
<script>
import Card from "@/components/Card.vue";
export default {
  name: 'Profile',
  components: {
    Card,
  }
}
</script>
<style>
.btn{
 background-color:#2e2603;
  color: #A4EBF3;
}
span{
  color:green;
}
.span:hover .img {
  transform: translateY(0) scale(2.2);
}


.usericon {
  width:40px;
  height: 40px;
}

.klikcoins {
  width: 40px;
  height: 40px;
}
</style>