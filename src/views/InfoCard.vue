<template>
  <div class="cardInfo">

   <template v-if="!editable">
    <p class="m-3" :contenteditable="editable" >{{ product.title }}</p>
    <p :contenteditable="editable" >{{ product.description }}</p>
    <div>
      <img
        :src="product.image"
        class="rounded float-start"
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
    
    <button class="exitbtn m-3" @click="goProfile()">Perfil</button>
    <button @click="goBack" type="button" class="exitbtn">Volver</button>
    <button @click.prevent="deleteProduct" v-if="!editable" class="exitbtn">Delete</button>
    <button @click.prevent="makeEditable()" v-if="!editable"  class="exitbtn">Edit</button>
    <button @click.prevent="makeEditable();editProduct()" v-if="editable"  class="exitbtn">Done</button>
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
