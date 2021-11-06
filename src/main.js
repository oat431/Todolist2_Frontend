import { createApp } from 'vue'
import App from './App.vue'
import Router from './router'
import State from './store'
import './index.css'
import 'nprogress/nprogress.css'

createApp(App).use(Router).use(State).mount('#app')
