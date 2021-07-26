import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/gifts',
        name: 'gifts',
        component: () =>
            import ('../views/Gifts.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () =>
            import ('../views/Login.vue')
    },
    {
        path: '/signup',
        name: 'signup',
        component: () =>
            import ('../views/SignUp.vue')
    },
    {
        path: '/infoCard',
        name: 'infoCard',
        component: () =>
            import ('../views/InfoCard.vue')
    },
    {
        path: '/CreateProduct',
        name: 'CreateProduct',
        component: () =>
            import ('../views/CreateProduct.vue')
    },
    {
        path: '/Chat',
        name: 'Chat',
        component: () =>
            import ('../views/Chat.vue')
    },
    {
        path: '/userProfile',
        name: 'userProfile',
        component: () =>
            import ('../views/userProfile.vue')
    },
    {
        path: '/Profile',
        name: 'Profile',
        component: () =>
            import ('../views/Profile.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router