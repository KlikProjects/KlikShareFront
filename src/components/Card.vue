import Header from '@/components/Header.vue';
<template>
  <div class="ct-cards">
    <div class="ct-card">
      <div class="ct-img">
        <img :src="product.image" alt="product" class="cardImg" v-bind:key="product.image"/>
      </div>
      <p class="txt-card">{{product.title}}</p> 
      <router-link :to="{name:'infoCard', params:{id:product.id}}"> 
        <button class="bt-card">Más información</button>
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Card",
    props: ['product'],
  };
</script>

<style scoped>
  .ct-cards{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
  .ct-card{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 173px;
    height: 200px;
    border-radius: 20px;
    background-color: #CCF2F3;
    box-shadow: 0px 4px 10px rgba(74, 72, 63, 0.35);
    position: relative;
    margin: 30px 0px 20px 0px;
  }
  .ct-img{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 165px;
    height: 192px;
    border-radius: 18px;
    background-color: transparent;
    overflow: hidden;
    filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.25));
  }
  .cardImg{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .txt-card{
    position: absolute;
    bottom: 0%;
    color: white;
    font-size: 18px;
    text-shadow: 0px 0px 4px #000;
    font-weight: bold;
  }
  .bt-card{
    width: 150px;
    height: 25px;
    border-radius: 15px;
    background-color: #4A483F;
    color: #CCF2F3;
    position: absolute;
    bottom: -15%;
    left: 6%;
    border: none;
  }
</style>
