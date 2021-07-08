<template>

<div class="mainContainer">
<Header/>
<Footer/>

<div id="nav">
    
   
</div>
<router-view/>
  <div class="footer">
  </div>
</div>
</template>
<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'


export default {
  name: 'Home',
  components: {
    Footer,
    Header
  }
}
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
.mainContainer{
height: 100vh;
background-color:#C4C4C4;
}

.footer{
  position: flex;
  width: 100%;
}

</style>



