<template>
  <div class="cardInfo">
    <p class="m-3">{{ product.title }}</p>
    <p>{{ product.description }}</p>
    <div>
      <img
        :src="product.image"
        class="rounded float-start"
        v-bind:key="product.image"
      />
    </div>
    <button class="exitbtn m-3" @click="goProfile()">Perfil</button>
    <button @click="goBack" type="button" class="exitbtn">Volver</button>
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
    },
  };
</script>
<style scoped>
  .exitbtn {
    background-color: #4a483f;
    color: #a4ebf3;
    border-radius: 50%;
    margin-top: 20%;
  }
  .cardInfo {
    margin-right: 25%;
    margin-left: 25%;
    margin-top: 10%;
    margin-bottom: 31%;
    height: vh;
  }
</style>
