import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () =>
    import ('../views/client/home/Home.vue')
const ServerMain = () =>
    import ('../views/server/ServerMain.vue')
const WorkSpace = () =>
    import ('../views/server/WorkSpace.vue')
const TableUser = () =>
    import ('../views/server/Table/TableUser.vue')
const TableHotel = () =>
    import ('../views/server/Table/TableHotel.vue')
const TableTreffic = () =>
    import ('../views/server/Table/TableTreffic.vue')
const TableRoom = () =>
    import ('../views/server/Table/TableRoom.vue')
const TableCity = () =>
    import ('../views/server/Table/TableCity.vue')

Vue.use(VueRouter)

const routes = [{
        path: '/',
        redirect: '/Home'
    }, {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/',
        name: 'ServerMain',
        component: ServerMain,
    },
    {
        path: '/WorkSpace',
        name: 'WorkSpace',
        component: WorkSpace,
    },
    {
        path: '/TableUser',
        name: 'TableUser',
        component: TableUser
    },
    {
        path: '/TableTreffic',
        name: 'TableTreffic',
        component: TableTreffic
    },
    {
        path: '/TableHotel',
        name: 'TableHotel',
        component: TableHotel
    },
    {
        path: '/TableRoom',
        name: 'TableRoom',
        component: TableRoom
    },
    {
        path: '/TableCity',
        name: 'TableCity',
        component: TableCity
    },
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router