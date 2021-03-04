import Vue from 'vue'
import App from './App.vue'
import './css/tailwind.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import VueCarousel from 'vue-carousel'

var VueScrollTo = require('vue-scrollto');
Vue.use(VueScrollTo, {
  duration: '1500'
})

Vue.use(VueCarousel)

Vue.config.productionTip = false

new Vue({
  created() {
    AOS.init()
  },
  render: h => h(App),
}).$mount('#app')
