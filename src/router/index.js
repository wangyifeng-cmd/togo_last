import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/client/home/Home.vue'







import ServerMain from '../views/server/ServerMain.vue'


import TableUser from '../views/server/Table/TableUser.vue'
import TableCity from '../views/server/Table/TableCity.vue'
import TableHotel from '../views/server/Table/TableHotel.vue'
import TableTreffic from '../views/server/Table/TableTreffic.vue'



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
        component: ServerMain,
    },
    
    
    {
        path: '/IndexTable',
        name: 'IndexTable',
        component: TableUser,
        children: [
            {
                path: 'TableUser',
                name: 'TableUser',
                component : TableUser
            },
            
            {
                path: 'TableTreffic',
                name: 'TableTreffic',
                component: TableTreffic
            },
            {
                path: 'TableHotel',
                name: 'TableHotel',
                component: TableHotel
            },
            {
                path: 'TableCity',
                name: 'TableCity',
                component: TableCity
            },

        ]
    },

]

const router = new VueRouter({
    routes
})

export default router