<template>
    <div>

        <div class="chat h-100">
            <ChatC />
        </div>
        <div class="conctacts"> 
            <Conversation :contact="selectedContact" :message="message"/>
            <ContactList :contact="Contacts"/>
        </div>    
    </div>
</template>
<script>
import ChatC from "../components/ChatC.vue";

export default {
    data(){
        return{
            selectedContact:null,
            messages:[]
        }
    }
}

</script>


