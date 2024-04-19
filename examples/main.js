import { createApp } from 'vue'
import App from './App.vue'

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../components/css/index.scss'

import GreatBrick from '../components/lib'
// import GButton from '../components/lib/button'

// console.log(GComponents.default)
const app = createApp(App)

app.use(GreatBrick)
// app.use(GButton)

app.mount('#app')
