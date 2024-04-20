import { createApp } from 'vue'
import App from './App.vue'

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/css/index.scss'

// import GreatBrick from '../components/lib'
// import GButton from '../components/lib/button'
import { GButton } from '../components/lib'

const app = createApp(App)

// app.use(GreatBrick)
app.use(GButton)

app.mount('#app')
