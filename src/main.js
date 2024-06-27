import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

setTimeout(() => {
    createApp(App).mount('#app')
}, 5000)
