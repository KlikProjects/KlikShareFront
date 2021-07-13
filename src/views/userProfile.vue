<template>
    <div>
        <button @click="goBack" type="button" class="exitbtn d-flex justify-content-start m-1">Volver</button>
        <h4 class="mb-2">Estas viendo el perfil de <b>Sutanito</b></h4>
            <h5 class="m-3"><b>En donación:</b></h5>
            <div class="d-flex justify-content-start m-2">
                <Card />
                <Card />
            </div>
            <h5 class="m-3"><b>Donado:</b></h5>
            <div class="d-flex justify-content-start">
                <Card />
                <Card />
            </div>
            <h5 class="m-3"><b>Recibido:</b></h5>
            <div class="d-flex justify-content-start">
                <Card />
                <Card />
            </div>
    </div>
</template>
<script>
import Card from "@/components/Card.vue";
export default {
  name: "card",
  components: {
    Card,
  },
  methods: {
    goBack() {
      this.$router.push("/");
    },
  },
};
</script>
<style scoped>
.exitbtn {
  background-color: #4a483f;
  color: #a4ebf3;
  border-radius: 50%;
  margin-top: 20%;
}
</style>
