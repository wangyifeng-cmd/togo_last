import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import './plugins/element.js'

Vue.config.productionTip = false


// 配置axios
// 在任何页面使用 this.$http 进行访问
import axios from 'axios'
Vue.prototype.$http = axios.create({
    baseURL: 'http://localhost:3001/api'
})

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app')