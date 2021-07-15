<template>
<div class="main body ">
    <div class="float-start">
      <router-link to="/"><span class="iconify" data-icon="eva:arrow-back-outline" data-inline="false"></span></router-link>
    </div>
  <form class="create d-flex align-items-center flex-column  mt-1">
    <input type="file" placeholder="upload image" class="upload">
      <h6>Title</h6>
    <input type="text" class="input mb-2 rounded-pill" required title="title" v-model="product.title">
      <h6>Description</h6>
    <input type="text" class="mb-2 rounded-pill" required description="description" v-model="product.description">
    <h6>Imagen</h6>
    <input type="text" class="mb-2 rounded-pill" required image="image" v-model="product.image">
    
    <button @click="createOneProduct" type="submit" class="">
      Crear
    </button>
  </form>
  </div>
 
</template>

<script>
import {apiService} from "../services/apiService";
export default {
  name: 'CreateProduct',
  data() {
    return{
      product: {
        id: null,
        title:'',
        description:'',
        image: '',
        klikcoinsProducts: null,
        user_id: null,
        

      }
    }
  },
  methods: {
    createOneProduct(){
      var data = {
        title: this.product.title,
        description: this.product.description,
        image: this.product.image,
      }
    apiService.createProduct(data).then((response) => {
          this.products = response.data})
       }
    }
  }
  
}

</script>
<style>
.upload{
margin-top:150px;
width: 200px;
}
.calender{
  width:210px;
  height:33px;
}


</style>