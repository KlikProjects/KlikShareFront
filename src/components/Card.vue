<template>
  <div class="ct-cards">
    <div class="ct-card">
      <div class="ct-img">
        <img src="https://mundokawaii.store/wp-content/uploads/2019/05/ropa-kawaii-1.jpg" alt="product" class="cardImg">
      </div>
      <p class="txt-card">Sudadera</p> 
      <router-link to="/infoCard"> 
        <button class="bt-card">Solicitar</button>
      </router-link>
    </div>
  </div>
</template>


<script>
  export default {
    name: "Card",
    props: {},
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .ct-cards{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
  .ct-card{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 173px;
    height: 200px;
    border-radius: 20px;
    background-color: #CCF2F3;
    box-shadow: 0px 4px 10px rgba(74, 72, 63, 0.35);
    position: relative;
    margin: 30px 0px 20px 0px;
  }
  .ct-img{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 165px;
    height: 192px;
    border-radius: 18px;
    background-color: transparent;
    overflow: hidden;
    filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.25));
  }
  .cardImg{
    width: auto;
    height: 100%;
  }
  .txt-card{
    position: absolute;
    bottom: 0%;
    color: white;
    font-size: 18px;
    text-shadow: 0px 0px 10px #000000;
  }
  .bt-card{
    width: 150px;
    height: 25px;
    border-radius: 15px;
    background-color: #4A483F;
    color: #CCF2F3;
    position: absolute;
    bottom: -15%;
    left: 6%;
    border: none;
  }

  /* h3 {
    margin: 40px 0 0;
    font-size: 18px;
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

  .profile-card-2 {
    background-color: #CCF2F3;
    box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.1);
    background-position: center;
    overflow: hidden;
    position: relative;
    margin: 20px 10px 0px 10px;
    cursor: pointer;
    border-radius: 20px;
    width: 173px;
    height: 200px;  
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 4px 10px rgba(74, 72, 63, 0.35);
  }

  .profile-card-2 img {
    transition: all linear 0.25s;
    max-height: 270px;
  }
  .background {
    width: 167px;
    height: 192px;
    border-radius: 20px;
  }

  .profile-card-2 .profile-name {
    position: absolute;
    left: 30px;
    bottom: 70px;
    font-size: 30px;
    color: #fff;
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
    font-weight: bold;
    transition: all linear 0.25s;
    left: 10%;
    width: 80%;
    height: auto;
  }

  .profile-card-2 .profile-icons {
    position: absolute;
    bottom: 30px;
    right: 30px;
    color: #fff;
    transition: all linear 0.25s;
  }
  .profile-name-div {
    margin-bottom: 80px;
  }

  .profile-card-2 .profile-username {
    position: absolute;
    bottom: 50px;
    left: 30px;
    color: #fff;
    font-size: 13px;
    transition: all linear 0.25s;
  }

  .profile-card-2 .profile-icons .fa {
    margin: 5px;
  }

  .profile-card-2:hover img {
    filter: grayscale(100%);
  }

  .profile-card-2:hover .profile-name {
    bottom: 80px;
  }

  .profile-card-2:hover .profile-username {
    bottom: 60px;
  }

  .profile-card-2:hover .profile-icons {
    right: 40px;
  }
  .ContainerImg {
    display: flex;
    justify-content: center;
  }
  .InfoButton{
    background-color: #4a483f;
    color: #a4ebf3;
    border-radius: 40px;
    width: 120px;
    height: 24px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
  } */
</style>
