import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/client/home/Home.vue'







import ServerMain from '../views/server/ServerMain.vue'

Vue.use(VueRouter)

const routes = [
    // {
    //     path: '/',
    //     name: 'Home',
    //     component: Home
    // },
    {
        path: '/',
        name: 'ServerMain',
        component: ServerMain
    },
]

const router = new VueRouter({
    routes
})

export default router