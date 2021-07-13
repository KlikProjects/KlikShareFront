<template>
    <div class="float-start">
      <router-link to="/"><span class="iconify" data-icon="eva:arrow-back-outline" data-inline="false"></span></router-link>
    </div>
  <form class="create d-flex align-items-center flex-column  mt-1">
    <input type="file" id="formFile" class=" m-5">
    <h6></h6>
    <input type="" placeholder="upload image" class="mb-2 rounded-pill">
    <h6>Title</h6>
    <input type="text" class="mb-2 rounded-pill">
    <h6>Description</h6>
    <input type="text" class="mb-2 rounded-pill">


    <input type="datetime-local" id="meeting-time" class=" mt-2 rounded-pill"
       name="meeting-time" value="2021-06-12T19:30"
       min="2021-06-07T00:00" max="2021-14T00:00">
  </form>
 
</template>

<script>

export default {
  name: 'CreateProduct',
  props: {
  }
}

</script>