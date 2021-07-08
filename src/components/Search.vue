<template>
<div class="searchfield mt">
    <div class="searchspace">
      <input type="text"          
     placeholder="Search.." name="search" class="w-50 mt-0 rounded-pill">
     
        <span class="iconify" data-icon="bx:bx-search" data-inline="false"></span>
    
    </div>
   <div class="buttons rounded-pill mt-2 bg-#A4EBF3">
      <a href="#" class=" btn btn btn-info  rounded-pill" >Ropas</a>
      <a href="#" class=" btn btn btn-info m-1 rounded-pill" >Electronicas</a>
      <a href="#" class=" btn btn btn-info m-1 rounded-pill" >Muebles</a>
      <a href="#" class=" btn btn btn-info m-1 rounded-pill" >Plantas</a>
      <a href="#" class=" btn btn btn-info m-1 rounded-pill" >OrdeBy</a>
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
  width:40px;
  height:80%;
  color:  #A4EBF3;

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
