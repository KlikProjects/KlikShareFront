<template>
      
   <div>
      <div class="user  d-flex justify-content-between w-100 h-100 mt-">
           <img class="usericon mt-3 m-1 " src="../assets/user.png" alt="usericon">
          
             <router-link to="/Gifts"><img class="usericonicon m-1 mt-3" src="../assets/coin.png" alt="usercoinsicon"> 
            </router-link>
       </div>
        <div class="username d-flex justify-content-between">
               <h4 class="username m-2 ">User Name</h4>
               <h5 class="klikcoin m-2"><span >30 KiloCoins</span></h5>
           </div>
       
        <div class="card ">
            <div class="bnt d-flex justify-content-evenly mb-2">
                <button class=" btn rounded-pill mt-3 ">Donado</button>
                <button class=" btn rounded-pill mt-3">Regalado</button>
            </div>
            <div class="products d-flex justify-content-evenly mb-2 ">
            <img src="../assets/cuboard.png" alt="">
            <img src="../assets/tomato.png" alt="">
            </div>

        </div>
    </div>

 
 
</template>

<script>

export default {
  name: 'UserProfile',
  props: {
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
.username:hover{
  color:green;
  cursor: pointer;
}

</style>