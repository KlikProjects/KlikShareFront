<template>
  <div class="searchfield">
    <input type="text" placeholder="Search.." name="search" class="form-control form-control-sm input-search"/>
    <a href="#" class="iconify" data-icon="bx:bx-search" data-inline="false"></a>
  </div>
  <div class="buttons">
      <a href="#" class="bt-filter btn btn-sm" role="button">Ropa</a>
      <a href="#" class="bt-filter btn btn-sm" role="button">Electrónica</a>
      <a href="#" class="bt-filter btn btn-sm" role="button">Muebles</a>
      <a href="#" class="bt-filter btn btn-sm" role="button">Plantas</a>
      <a href="#" class="bt-filter-invert btn btn-sm" role="button">OrderBy</a>
  </div>
</template>

<script>
export default {
  name: "Search",
  props: {},
};
</script>

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
  width: 30px;
  height: auto;
  color: #CCF2F3;
  cursor: pointer;
}
.searchfield {
  margin-top: 20px;
  align-items: center;
  justify-content: center;
  display: flex;
}
.input-search{
  border-radius: 1rem;
  border: none;
  width: 50%;
}
.buttons {
  margin-top: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  margin-left: 0.5rem;
}
.bt-filter {
  background-color: #CCF2F3;
  color: #4A483F;
  font-size: 12px;
  border-radius: 15px;
  margin: 0.2rem;
}
.bt-filter-invert{
  background-color:#4A483F;
  color: #CCF2F3;
  font-size: 12px;
  border-radius: 15px;
  margin: 0.2rem;
}
</style>
