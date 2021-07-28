<template>
  <div class="contenido">
    <div class="header">
      <div class="headerContainer">
      <Search />
      </div>
    </div>
    <div class="home">
      <div class="cardContainer" v-for="product in products" v-bind:key="product">
        <div class="col"><Card :product="product" /></div>
      </div>
    </div>
  </div>
</template>

<script>
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
    async getAllProducts() {
        apiService.getProducts().then((response) => {
          this.products = response.data})
    }
  }
}
</script>

<style>
.home {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  height: 80vh;
}
.headerContainer {
  justify-content: center;
  align-items: center;
}
</style>
