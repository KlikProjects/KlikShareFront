<template>
  <div class="searchfield">
    <input
      type="text"
      placeholder="Search.."
      name="search"
      class=" placeholder w-50 mb-2 rounded-pill "
    />

    <span class="iconify" data-icon="bx:bx-search" data-inline="false"> </span>

    <div class="buttons">
      <a href="#" class="class btn  rounded-pill">Ropa</a>
      <a href="#" class="class btn m-1 rounded-pill">Electronica</a>
      <a href="#" class="class btn m-1 rounded-pill">Muebles</a>
      <a href="#" class="class btn m-1 rounded-pill">Plantas</a>
      <a href="#" class=" class btn m-1 rounded-pill">OrdeBy</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Search",
  props: {},
};
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
.iconify {
  width: 40px;
  height: 80%;
  color: #a4ebf3;
  margin-bottom: 5;
}
.btn {
  color: black;
}
.searchfield {
  margin-top: 20px;
  margin-left: 0px;
  align-items: center;
  justify-content: center;
  display: block;
}
.buttons {
  margin-top: 20px;
}

.class {
  background-color:#4A483F;
  color: #A4EBF3;
}
</style>
