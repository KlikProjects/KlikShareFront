import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

require('..//src/store/subscriber')

store.dispatch('auth/attempt', localStorage.getItem('token')).then(() =>{
    const app = createApp(App)
    app.use(store)
    app.use(router)
    app.mount('#app')  
})


