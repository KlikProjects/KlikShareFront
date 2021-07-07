<template>
  <div>
    <div class="profile-card-2 ">
    <div class="background p-1 overflow-hidden">
      <img
        src="https://mundokawaii.store/wp-content/uploads/2019/05/ropa-kawaii-1.jpg"
        class="img img-responsive"/>
     
     <div class="position-relative" >
     <div class=" profile-name-div position-absolute top-50">
      <div class="profile-name ">JOHN DOE</div>
    </div>
      <div class="profile-username position-absolute top-30 start-50 translate-middle"><button type="button" class="btn btn-primary bottom-0 end-0">Solicitar</button></div>
    </div>
    </div>
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

  .profile-card-2 {
    background-color: #9cecf0;
    box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.1);
    background-position: center;
    overflow: hidden;
    position: relative;
    margin: 10px auto;
    cursor: pointer;
    border-radius: 10px;
    width: 220px;
    height: 230px;
  }

  .profile-card-2 img {
    transition: all linear 0.25s;
    max-height: 270px;
  }
  .background{
    color: #000;
    width: 210px;
    max-height: 225px;
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
</style>
