import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/client/home/Home.vue'







import ServerMain from '../views/server/ServerMain.vue'
import TableUser from '../views/server/TableUser.vue'
import Table from '../components/server/Table.vue'

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
    {
        path: '/user/TableUser',
        name: 'TableUser',
        component: TableUser
    },
    {
        path: '/Table',
        name: 'Table',
        component: Table
    },
    
    
]

const router = new VueRouter({
    routes
})

export default router