<template>
  <div class="contenido">
    <div class="header">
      <div class="headerContainer">
        <Search />
      </div>
    </div>
    <div class="home">
      <div class="cardContainer" v-for="product in products" v-bind:key="product">
        <div class="col"><Card /></div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Card from "@/components/Card.vue";
import Search from "@/components/Search.vue";
import {apiService} from "../services/apiService";

export default {
  name: "Home",
  components: {
    Card,
    Search,
  },
  data() {
    return {
      products: [],
    };
  },

  mounted() {
      this.getAllProducts()
  },

  methods: {
    getAllProducts(){
      apiService.getProducts().then((response)=>{this.products = responde.data})
    }
  },
};
</script>

<style>
.home {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
}

.headerContainer {
  justify-content: center;
  align-items: center;
}
</style>
