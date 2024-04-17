import { createApp } from 'vue'
import App from './App.vue'
import '../components/css/index.scss'

import GreatVue from '../components/lib'
// import GButton from '../components/lib/button'

// console.log(GComponents.default)
const app = createApp(App)

app.use(GreatVue)
// app.use(GButton)

app.mount('#app')
