import Vue from 'vue'
import App from './App.vue'
import './css/tailwind.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import VueCarousel from 'vue-carousel'

import VueScrollactive from 'vue-scrollactive';
Vue.use(VueScrollactive)

Vue.use(VueCarousel)

Vue.config.productionTip = false

new Vue({
  created() {
    AOS.init()
  },
  render: h => h(App),
}).$mount('#app')
