<template>
  <div class="contenido">
    <div class="header">
      <div class="headerContainer">
        <Search />
      </div>
    </div>
    <div class="home">
      <div class="search-wrapper">
        <input type="text" v-model="search" placeholder="Filtrar..." />
        <label>Buscar</label>
      </div>
      <div
        class="cardContainer"
        v-for="product in products"
        v-bind:key="product"
      >
        <a v-bind:href="product.link" target="_blank">
          <div class="col"><Card :product="product" /></div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
import Search from "@/components/Search.vue";
import { apiService } from "../services/apiService";

export default {
  name: "Home",
  components: {
    Card,
    Search,
  },
  data() {
    return {
      products: [],
      search: "",
    };
  },
  computed: {
    products() {
      return this.products.filter((products) => {
        return products.title.toLowerCase().includes(this.search.toLowerCase());
      });
    },
  },
  mounted() {
    this.getAllProducts();
  },

  methods: {
    async getAllProducts() {
      apiService.getProducts().then((response) => {
        this.products = response.data;
      });
    },
  },
};
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
