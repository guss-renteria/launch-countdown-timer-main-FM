import { createApp } from 'vue'
import App from './App.vue'

import './normalize.css'
import './main.scss'
import './icons/icomoon/style.css'

import router from './router/router'

createApp(App)
  .use(router)
  .mount('#app')
