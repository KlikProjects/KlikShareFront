<template>
<div class="contenido">
    <div class="header">
      <div class="headerContainer">
      </div>
    </div>
    <div class="home">
      <div class="cardContainer" v-for="product in products" v-bind:key="product">
        <div class="col"><CardGive :product="product" /></div>
      </div>
    </div>
  </div>
</template>

<script>
import CardGive from "@/components/CardGive.vue";
import Search from "@/components/Search.vue";
import {apiService} from "../services/apiService";

export default {
  name: "Chat",
  components: {
    CardGive,
  
  },
  data() {
    return {
      products: [],
    };
  },

  mounted() {
     this.myProducts() 
  },

  methods: {

  async myProducts(){
    let response = await apiService.getMyProducts();
    this.products = response.data
  }
  
    }

}
</script>