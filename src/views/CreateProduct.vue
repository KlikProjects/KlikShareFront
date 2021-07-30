<template>
  <template v-if="authenticated">
    <div class="d-flex flex-column justify-content-center align-items-center ct-form">
      <form class="">
        <div class="mb-3">
          <label for="title" class="form-label txt-label">Título</label>
          <input type="text" title="title" v-model="product.title" required class="form-control txt-label" />
        </div>
        <div class="mb-3">
          <label for="description" class="form-label txt-label">Descripción</label>
          <input type="text" description="description" v-model="product.description" required class="form-control txt-label" />
        </div>

        <div class="mb-3">
          <label for="image" class="form-label txt-label">URL Imagen</label>
          <div class="mb-3">
            <input type="text" class="form-control txt-label" required image="image" v-model="product.image"/>
          </div>
        </div>
        <button @click.prevent="createOneProduct" type="submit" class="bt-create mt-2">Subir producto</button>
      </form>
      <div class="">
        <router-link to="/">
          <img src="../assets/previous.svg" class="img-back"/>
        </router-link>
      </div>
    </div>
  </template>
  <template v-if="!authenticated">
    <div class="d-flex flex-column justify-content-center align-items-center p-3 ct-profileNoAuth">
        <p>Para crear un producto tienes que acceder a tu cuenta</p>
        <router-link to="login">
          <button class="bt-goLogin px-3">Ir a login</button>
        </router-link>
      </div>
  </template>
</template>

<script>
  import { apiService } from "..//services/apiService";
  import { mapGetters } from "vuex";
  export default {
    name: "CreateProduct",
    data() {
      return {
        product: {
          id: null,
          title: "",
          description: "",
          image: "",
          category: "stuff",
          klikcoinsProducts: 30,
        },
      };
    },
    computed: {
      ...mapGetters({
        authenticated: "auth/authenticated",
        user: "auth/user",
      }),
    },
    methods: {
      createOneProduct() {
        console.log("ayuda")
      var data={
          title: this.product.title,
          description: this.product.description,
          image: this.product.image,
          category: this.product.category,
          klikcoinsProducts: this.product.klikcoinsProducts,
      }
      apiService.createProduct(data).then((response) => {
          this.product = response.data;
          this.$router.push("/");
        });
      },
    },
    
  };
</script>

<style>
  .ct-form{
    height: 78vh;
  }
  .txt-label{
    font-family: Avenir, Helvetica, Arial, sans-serif;
    font-size: 20px;
  }
  .bt-create{
    font-family: Avenir, Helvetica, Arial, sans-serif;
    border-radius: 15px;
    background-color: #4A483F;
    color: #CCF2F3;
    border: none;
    font-size: 20px;
    width: 163px;
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
  .ct-profileNoAuth{
  height: 81vh;
}
  .bt-goLogin{
    font-family: Avenir, Helvetica, Arial, sans-serif;
    border-radius: 15px;
    background-color: #4A483F;
    color: #CCF2F3;
    border: none;
    font-size: 15px;
    width: auto;
    height: auto;
  }
  .drag-drop {
    height: 8em;
    width: 8em;
    background-color: #ccc;
    border-radius: 4em;
    position: relative;
    margin: 0 auto 1em;
  }
  .drag-drop span.desc {
    display: block;
    font-size: .7em;
    padding: 0 .5em;
    color: #000;
  }
  input[type="file"] {
    height: 10em;
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%; 
    z-index: 3;
  }
  .drag-drop:hover, input[type="file"]:hover {
    background-color: #3276b1;
    cursor: pointer;
  }
  .drag-drop:hover span.desc {
    color: #fff;
  } 
  .fa-stack { margin-top: .5em; }
  .fa-stack .top { color: white; }
  .fa-stack .medium { 
    color: black;
    text-shadow: 0 0 .25em #666;
  }
  .fa-stack .bottom { color: rgba(225, 225, 225, .75); }
</style>