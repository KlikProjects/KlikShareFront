<template>

<div class="mainContainer">
<Header/>

<div id="nav">
    
   
</div>
<router-view/>
  <div class="footer">
  <Footer/>
  </div>
</div>
</template>
<script>
// @ is an alias to /src
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'


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
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  
}

</style>



