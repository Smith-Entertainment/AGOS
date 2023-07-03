import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
<<<<<<< HEAD
import "bootstrap/dist/css/bootstrap.css"
createApp(App)
.use(router)
.mount('#app')

=======
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.css"

createApp(App)
.use(router)
.mount('#app')
axios.defaults.headers.common['Content-Type'] = 'application/json';
>>>>>>> cae0fb151469fbd9637e9fb240fad8bc9e05424e
import "bootstrap/dist/js/bootstrap.js"
