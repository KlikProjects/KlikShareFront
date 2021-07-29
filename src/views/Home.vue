<template>
  <div class="contenido">
    <div class="searchfield px-5">
      <input type="text" v-model="search" placeholder="Filtrar..." class="form-control form-control-sm input-search"/>
    </div>
    <div class="home">  
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
import { apiService } from "../services/apiService";
export default {
  name: "Home",
  components: {
    Card,
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
.searchfield {
  margin-top: 20px;
  align-items: center;
  justify-content: center;
  display: flex;
}
.input-search{
  border-radius: 20px !important;
}
</style>