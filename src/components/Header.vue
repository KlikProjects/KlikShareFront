<template>
  <div class="navbar ">
    <div class=" d-flex justify-content-between " >
    <div>
      <span class="iconify" data-icon="ci:hamburger" data-inline="false"></span>
    </div>
    <div>
      <img class="img" src="@/assets/img/logofinal.png" alt="Logo">
    </div>
    <div>
      <span class="iconify" data-icon="bx:bx-user-circle" data-inline="false"></span>
    </div>
   </div>
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
left: 0%;
right: 0%;
top: 0%;
background: #4A483F;
margin-bottom: 10%;
}
.iconify{
  width:20%;
  height:70%;
  color: #A4EBF3;
  position:relative;
  top: 40%;
}
.img{
  width:50%;
  height:120%;
  top: 20%;
}
.btn{
  color:black;
  
}
searchbar{
width: 10px ;
}


</style>
