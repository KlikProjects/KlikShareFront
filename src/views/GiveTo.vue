<template>
  <div class="cardInfo">
    <p class="m-3">{{ product.title }}</p>
    <div>
      <img
        :src="product.image"
        class="rounded float-start"
        v-bind:key="product.image"
      />
    </div>

    <button @click="goBack" type="button" class="exitbtn">Volver</button>
  <div class="cardContainer" v-for="user in users" v-bind:key="user">
          <p>{{ user.name }}</p>
          <button @click.prevent="giveProduct(user.id)"></button>
      </div>
    
  </div>
</template>
<script>
  import { apiService } from "../services/apiService.js";
  export default {
    name: "GiveTo",
    data() {
      return {
        product: [],
        id: this.$route.params.id,
        users: [] 
      };
    },

    beforeMount() {
      this.getProductInfo(this.id);
      this.usersRequest();
    },
    computed: {},

    methods: {
      getProductInfo(id) {
        apiService.getProduct(this.id).then((response) => {
          this.product = response.data;
        });
      },
      goBack() {
        this.$router.push("/Chat");
      },
      async usersRequest(){
        let response = await apiService.getUsersRequest(this.id)
        this.users = response.data
        console.log(response.data)
      },
      async giveProduct(userID){
        let response = await apiService.giveProduct(this.id, userID)
      }
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
