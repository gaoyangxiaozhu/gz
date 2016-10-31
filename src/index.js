import Vue from 'vue'
import VueRouter from 'vue-router'
import configRouter from './routes.js'
import App from './components/App.vue'
import 'font-awesome/css/font-awesome.css'

import './assets/css/index.scss'

import {
    loadJSON,
    setConfig
} from './lib/util'

Vue.config.debug = true
Vue.use(VueRouter)
const router = new VueRouter({})
configRouter(router)

loadJSON('./async/config.json').then((config) => {
    setConfig(config.data)
    router.start(Vue.extend(App), '#blog')
}).catch((error) => {
    console.log(error.message)
})
