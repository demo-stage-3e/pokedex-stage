import { createApp } from 'vue'
import Layout from './Layout.vue'
import router from './router.js'
import './style.css'
import './pages.css'

createApp(Layout).use(router).mount('#app')
