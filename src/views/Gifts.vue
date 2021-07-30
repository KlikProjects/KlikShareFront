<template>
  <div class="gifts pt-3">
    <template v-if="authenticated">
      <h5>Hola {{user.name}}, aquí podrás canjear tus klikcoins por premios</h5>
      <div>
        <img class="klikcoins" src="@\assets\klikcoin.png" alt="klikcoin" />
        <p>Tienes {{user.klikcoinsUsers}} KlikCoins</p>
      </div>
    </template> 
    <template v-if="!authenticated">
      <h5>Hola, aquí podrás canjear tus klikcoins por premios</h5>
      <div>
        <p>Accede a tu cuenta para saber cuantos klikcoins tienes acumulados</p>
      </div>
    </template>
    <div class="d-flex flex-row justify-content-center align-items-center flex-wrap">
      <div class="ct-gift m-3">
        <div class="ct-elements p-2">
          <img class="img-gift p-2" src="@\assets\amazon.png" alt="Amazon logo" />
          <div>
            <h5>3 meses de Amazon Prime</h5>
            <img class="klikcoins" src="@\assets\klikcoin.png" alt="klikcoins" />
            <p>500.000 KlikCoins</p>
            <button type="button" class="bt-gift">Canjear</button>
          </div>
        </div>
      </div>

      <div class="ct-gift m-3">
        <div class="ct-elements">
          <img class="img-gift p-2" src="@\assets\netflix.png" alt="Netflix logo" />
          <div>
            <h5>3 meses de Netflix</h5>
            <img class="klikcoins" src="@\assets\klikcoin.png" alt="klikcoins" />
            <p>800.000 KlikCoins</p>
            <button type="button" class="bt-gift">Canjear</button>
          </div>
        </div>
      </div>

      <div class="ct-gift m-3">
        <div class="ct-elements">
          <img class="img-gift p-2" src="@\assets\aliexpress.png" alt="Aliexpress logo" />
          <div>
            <h5>10€ en AliExpress</h5>
            <img class="klikcoins" src="@\assets\klikcoin.png" alt="klikcoins" />
            <p class="">800.000 KlikCoins</p>
            <button type="button" class="bt-gift">Canjear</button>
          </div>
        </div>
      </div>
    </div> 
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Gifts",
  data() {
      return {
      
      };
    },
      computed: {
      ...mapGetters({
        authenticated: "auth/authenticated",
        user: "auth/user",
      }),
    } 
}
</script>

<style scoped>
  .gifts{
    height: 81vh;
  }
  .ct-gift{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 320px;
    height: 220px;
    border-radius: 20px;
    background-color: #CCF2F3;
    box-shadow: 0px 4px 10px rgba(74, 72, 63, 0.35);
    position: relative;
    margin: 30px 0px 20px 0px;
  }
  .ct-elements{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 310px;
    height: 210px;
    border-radius: 18px;
    background-color: white;
    filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.25));
  }
  .img-gift{
    width: 50%;
    height: auto;
  }
  .klikcoins {
    width: 30px;
    height: 30px;
  }
  .bt-gift{
    width: 100px;
    height: 25px;
    border-radius: 15px;
    background-color: #4A483F;
    color: #CCF2F3;
    border: none;
  }
</style>