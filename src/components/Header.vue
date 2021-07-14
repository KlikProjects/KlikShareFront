<template>
  <div class="navbar d-flex justify-content-md-between">  
      <span class="iconify"  data-icon="ci:hamburger"  data-inline="false">
      </span>
    <div>
      <router-link to="/"><img class="img" src="@/assets/img/logofinal.png" alt="Logo">
      </router-link>
    </div>
      
     <router-link to="/UserProfile"><span class="iconify" data-icon="bx:bx-user-circle" data-inline="false">
      </span></router-link>
  

  </div>

</template>

<script>

export default {
  name: 'Header',
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
.navbar {
background: #4A483F;
margin-bottom: 0%;
width: 100%;
height:10vh;
display:flex;

}

.iconify{
  width:50px;
  height:40%;
  color: #A4EBF3;
  position:flex-start;
  margin-bottom: 50px;
  margin: px;
}
.img{
 height:50px;
 margin-bottom: 70px;
 
 
}
.btn{
  color:black;
  
}
searchbar{
width: 10px ;
}
.iconify:hover{
  color:#42b983;
  font-size:scale 10px;
}


</style>
