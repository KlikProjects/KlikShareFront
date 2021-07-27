<template>
  <div class="d-flex flex-column justify-content-center align-items-center ct-card p-5">
    <template v-if="!editable">
      <h3 class="txt-title m-2" :contenteditable="editable">{{ product.title }}</h3>
      <p :contenteditable="editable">{{ product.description }}</p>
      <div>
        <img
          :src="product.image"
          class="img-product mt-3"
          v-bind:key="product.image"
        />
      </div>
    </template>

    <template v-if="editable">
      <input type="text" placeholder="{{product.title}}" v-model="product.title" id="product.title" name="product.title">
      <input type="text" placeholder="{{product.description}}" v-model="product.description" id="product.description" name="product.descriptiontitle" >
      <img
          :src="product.image"
          class="rounded float-start"
          v-bind:key="product.image"
        />
    </template>

    <div class="d-flex flex-row p-5">
      <button class="bt px-3 m-2" @click="goProfile()">Perfil</button>
      <button @click="goBack" type="button" class="bt px-3 m-2">Volver</button>
      <button @click.prevent="deleteProduct" v-if="!editable" class="bt px-3 m-2">Eliminar</button>
      <button @click.prevent="makeEditable();editProduct()" v-if="editable"  class="exitbtn">Done</button>
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
        editable:false,
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
      },
      makeEditable(){
        this.editable = !this.editable; 
        console.log(this.editable);
      },
      editProduct(){
           var data = {
            id: this.product.id,
            title: this.product.title,
            description:this.product.description,
            image:this.product.image,
            category:this.product.category,
            klikcoinsProducts:this.product.klikcoinsProducts,
        };
        apiService.updateProduct(this.id, data).then((response)=>{
          this.product=response.data;
        })
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
