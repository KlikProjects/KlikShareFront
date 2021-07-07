<template>
<div class="rutas position-absolute top-100">
  <div class="d-flex  justify-content-between">
    <router-link to="/"><span class="iconify" data-icon="bx:bx-home" data-inline="false"></span></router-link>
    <router-link to="/gifts"><span class="iconify" data-icon="ion:gift-outline" data-inline="false"></span></router-link>
    <router-link to="/create"><span class="iconify" data-icon="ant-design:plus-circle-outlined" data-inline="false"></span></router-link>
    <router-link to="/maps"><span class="iconify" data-icon="mdi:google-maps" data-inline="false"></span></router-link>
    <router-link to="/chat"><span class="iconify" data-icon="akar-icons:chat-dots" data-inline="false"></span></router-link>
  </div>
</div>
</template>
<script>
export default {
  name: 'footer',
  props: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.rutas {
  display: inline-flex;
  justify-content: space-around;
  
}
</style>
