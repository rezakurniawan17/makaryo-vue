<template>
  <div id="app" class="debug-screens">
    <header-app></header-app>
    <hero-app></hero-app>
    <about-app></about-app>
    <portofolio-app></portofolio-app>
    <review-app></review-app>
    <price-app></price-app>
    <contact-app></contact-app>
    <footer-app></footer-app>
  </div>
</template>

<script>
import AboutApp from './components/AboutApp.vue'
import ContactApp from './components/ContactApp.vue'
import FooterApp from './components/FooterApp.vue'
import HeaderApp from './components/HeaderApp.vue'
import HeroApp from './components/HeroApp.vue'
import PortofolioApp from './components/PortofolioApp.vue'
import PriceApp from './components/PriceApp.vue'
import ReviewApp from './components/ReviewApp.vue'

export default {
  name: 'App',
  components: {
    AboutApp, ContactApp, FooterApp, HeaderApp, HeroApp, PortofolioApp, PriceApp, ReviewApp
  }
}

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}; 
</script>

<style>
#app {
  font-family: 'Manrope', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
