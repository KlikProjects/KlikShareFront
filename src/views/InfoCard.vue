<template>
  <div class="d-flex flex-column justify-content-center align-items-center ct-card p-5">
    <h3 class="txt-title m-2">{{ product.title }}</h3>
    <p>{{ product.description }}</p>
    <div>
      <img
        :src="product.image"
        class="img-product mt-3"
        v-bind:key="product.image"
      />
    </div>
    <div class="d-flex flex-row p-5">
      <button class="bt px-3 m-2" @click="goProfile()">Perfil</button>
      <button @click="goBack" type="button" class="bt px-3 m-2">Volver</button>
      <button @click.prevent="deleteProduct" class="bt px-3 m-2">Eliminar</button>
    </div>
  </div>
</template>
<script>
  import Card from "..//components/Card.vue";
  import { apiService } from "..//services/apiService.js";
  export default {
    data() {
      return {
        product: [],
        id: this.$route.params.id,
      };
    },
    name: "infoCard",
    components: {
      Card,
    },
    beforeMount() {
      this.getProductInfo(this.id);
    },
    methods: {
      getProductInfo(id) {
        apiService.getProduct(id).then((response) => {
          this.product = response.data;
        });
        console.log(id);
      },
      goBack() {
        this.$router.push("/");
      },
      goProfile() {
        this.$router.push("/userProfile");
      },
      deleteProduct(){
          apiService.deleteProduct(this.id).then((response) => {
          this.product = response.data;
          this.goBack();         
        });
      }
    },
  };
</script>

<style scoped>
  .ct-card {
    height: 81vh;
  }
  .img-product{
    width: 100%;
    height: auto;
  }
  .txt-title{
    font-size: 2em;
  }
  .bt{
    font-family: Avenir, Helvetica, Arial, sans-serif;
    border-radius: 15px;
    background-color: #4A483F;
    color: #CCF2F3;
    border: none;
    font-size: 15px;
    width: auto;
    height: auto;
  }
</style>
