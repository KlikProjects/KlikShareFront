<template>
  <div class="home">
  <Search></Search>
    <div class="cardContainer"  v-for="num in numbers" v-bind:key="num">
      <div class="col"><Card /></div>
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
 .home{
 display:flex;
 flex-direction:row;
 flex-wrap: wrap;
 justify-content:space-around;

 }
</style>
