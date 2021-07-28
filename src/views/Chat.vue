<template>
    <div class = "lista">
        <h1>Hola</h1>
        <ul v-for = "usersRequest of usersRequest" :key = "usersRequest.id">
            <li>
                <textarea v-model="usersRequest.id"></textarea>
            </li>
        </ul>
    </div>
    

<!-- 
        <div class="chat h-100">
            <ChatC />
        </div>
        <div class="conctacts"> 
            <Conversation :contact="selectedContact" :message="message"/>
            <ContactList :contact="Contacts"/>
        </div>     -->

</template>
<script>
import ChatC from "../components/ChatC.vue";
import {apiService}  from "@/services/apiService";

export default {
    data(){
        return{
            selectedContact:null,
            messages:[]
        }
    },
    mounted(){
        this.showConntact()
    },
    methods:{
        async showConntact(){
            const res = await apiService.getAll();
            this.usersRequest = res.data;
        }
    }    
    
}

</script>


