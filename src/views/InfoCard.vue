<template>
  <div class="d-flex flex-column justify-content-start align-items-center ct-card p-4">
    <template v-if="!editable">
      <h3 class="txt-title m-2" :contenteditable="editable">{{ product.title }}</h3>
      <div class="d-flex justify-content-center align-items-center">
        <img
          :src="product.image"
          class="img-product mt-3"
          v-bind:key="product.image"
        />
      </div>
      <p class="mt-2 txt-description" :contenteditable="editable">{{ product.description }}</p>
    </template>
    <template v-if="editable">
      <input type="text" placeholder="{{product.title}}" v-model="product.title" id="product.title" name="product.title" class="form-control input-edit">
      <img
          :src="product.image"
          class="img-product mt-3"
          v-bind:key="product.image"/>
      <textarea type="text" cols="30" rows="10" placeholder="{{product.description}}" v-model="product.description" id="product.description" name="product.descriptiontitle" class="form-control mt-1 input-edit"></textarea>
    </template>
    <div class="d-flex flex-row p-1">
      <!-- <button class="bt px-3 m-2" @click="goProfile()" v-if="!editable">Perfil</button> -->
      <button @click.prevent="deleteProduct" v-if="!editable" class="bt px-3 m-2">Eliminar</button>
      <button @click.prevent="makeEditable()" v-if="!editable" class="bt px-3 m-2">Editar</button>

      <button 
      @click.prevent="requestPr()"
      v-if="!editable && !isRequested"
      class="bt px-3 m-2"
      >
      Request
      </button>
      <button
      @click.prevent="unrequestPr()"
      v-if="!editable && isRequested"
      class="bt px-3 m-2"
      >
      UnRequest
      </button>
  

      <!-- <button @click.prevent="requestPr()" v-if="!editable && !isRequested" class="bt px-3 m-2">Request</button>
      <button @click.prevent="unrequestPr()" v-if="!editable && isRequested" class="bt px-3 m-2">UnRequest</button> -->


      <button @click.prevent="makeEditable();editProduct()" v-if="editable" class="bt px-3 m-2">Actualizar</button>
      <button @click="goToInfoCard" v-if="editable" class="bt px-3 m-2">Cancelar</button>
    </div>
    <img src="../assets/previous.svg" @click="goBack" v-if="!editable" class="img-back"/>

  </div>
</template>

<script>
  import { apiService } from "..//services/apiService.js";
  export default {
    name: "infoCard",
    data() {
      return {
        product: [],
        id: this.$route.params.id,
        editable: false,
        isRequested: null,
      };
    },
    beforeMount() {
      this.getProductInfo(this.id);
      this.CheckIfProductRequested();
    },
    computed: {},
    methods: {
      async CheckIfProductRequested() {
        let response = await apiService.checkIfRequested(this.id);
        this.isRequested = response.data;
        console.log(this.isRequested);
      },
      getProductInfo(id) {
        apiService.getProduct(id).then((response) => {
          this.product = response.data;
        });
      },
      goBack() {
        this.$router.push("/");
      },
      goProfile() {
        this.$router.push("/userProfile");
      },
      deleteProduct() {
        apiService.deleteProduct(this.id).then((response) => {
          this.product = response.data;
          this.goBack();
        });
      },
      makeEditable() {
        this.editable = !this.editable;
        console.log(this.editable);
      },
      editProduct() {
        var data = {
          id: this.product.id,
          title: this.product.title,
          description: this.product.description,
          image: this.product.image,
          category: this.product.category,
          klikcoinsProducts: this.product.klikcoinsProducts,
        };
        apiService.updateProduct(this.id, data).then((response) => {
          this.product = response.data;
        });
      },
      requestPr() {
        apiService.requestProduct(this.id).then((response) => {
          this.$router.go();
        });
      },
      unrequestPr() {
        apiService.unrequestProduct(this.id).then((response) => {
          this.$router.go();
        });
      },
    },
  };
</script>
<style scoped>
  .ct-card {
    height: 81vh;
  }
  .img-product{
    width: 100vw;
    height: 40vh;
    object-fit: contain;
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
  .img-back{
    width: 30px;
    display: inline-grid;
    position: absolute;
    bottom: 12%;
    right: 7%;
    filter: invert(23%) sepia(2%) saturate(3078%) hue-rotate(12deg) brightness(99%) contrast(80%);
    cursor: pointer;
  }
  .input-edit{
    width: 80%;
  }
  .txt-description{
    margin-bottom: 0px !important;
  }
</style>
