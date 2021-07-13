<template>
    <div class="float-start">
      <router-link to="/"><span class="iconify" data-icon="eva:arrow-back-outline" data-inline="false"></span></router-link>
    </div>
  <form class="create d-flex align-items-center flex-column  mt-1">
    <input type="file" placeholder="upload image" class="upload">
    <h6>Title</h6>
    <input type="text" class="mb-2 rounded-pill">
    <h6>Description</h6>
    <input type="text" class="mb-2 rounded-pill">


    <input type="datetime-local" id="meeting-time" class=" calender mt-2 rounded-pill"
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