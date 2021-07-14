<template>
    <div class="cardInfo">
        <h4>Nombre producto</h4>
        <Card />
        <p class="m-3">Descripccion</p>
        <p>Talla</p>
        <p>Más detalles</p>
        <button class="exitbtn m-3" @click="goProfile">Dueño</button>
        <button @click="goBack" type="button" class="exitbtn">Volver</button>
    </div>
</template>
<script>
import Card from "@/components/Card.vue";
export default {
    name: "card",
    components: {
        Card
    },
    methods: {
        goBack() {
            this.$router.push('/')
        },
        goProfile(){
            this.$router.push('/userProfile')
        }
        
    }
}
</script>
<style scoped>
.exitbtn{
    background-color:#4A483F;
    color: #A4EBF3;
    border-radius: 50%;
    margin-top: 20%;
}
.cardInfo {
    margin-right: 25%;
    margin-left: 25%;
    margin-top: 10%;
    margin-bottom: 31%;
}
</style>
