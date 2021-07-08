<template>
  <header>
  <Header/>
  </header>
<main>
  <div class="mainContainer">
    <router-view />
  </div>
</main>

<footer>
<Footer/>
</footer>

  
</template>
<script>
  // @ is an alias to /src
  import Header from "@/components/Header.vue";
  import Footer from "@/components/Footer.vue";

  export default {
    name: "Home",
    components: {
      Footer,
      Header,
    },
  };
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }
  .mainContainer {
    background-color: #c4c4c4;
    overflow: scroll;
    height: 88.5vh;
  
  }


</style>
