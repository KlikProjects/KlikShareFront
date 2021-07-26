<template>
  <div class="contenido">
    <div class="header">
      <div class="headerContainer">
        <Search />
      </div>
    </div>
    <div class="home">
      <div v-for="num in numbers" v-bind:key="num">
        <Card />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Card from "@/components/Card.vue";
import Search from "@/components/Search.vue";

export default {
  name: "Home",
  components: {
    Card,
    Search,
  },
  data() {
    return {
      numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    };
  },
};
</script>

<style>
.home {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  height: 72vh;
}

.headerContainer {
  justify-content: center;
  align-items: center;
}
</style>
