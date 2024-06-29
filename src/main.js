import { createPinia } from 'pinia'
import { createApp } from 'vue'

import App from './App.vue'
import router from './router'


import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/pagination'


import './assets/vendor/animate.css/animate.min.css'
import './assets/vendor/aos/aos.css'
import './assets/vendor/bootstrap-icons/bootstrap-icons.css'
import './assets/vendor/bootstrap/css/bootstrap.min.css'
import './assets/vendor/glightbox/css/glightbox.min.css'

import './assets/css/style.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
