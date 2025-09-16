import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // <-- IMPOR ROUTER
import './assets/style.css'

const app = createApp(App)

app.use(router) // <-- GUNAKAN ROUTER

app.mount('#app')
