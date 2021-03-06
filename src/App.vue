<template>
  <div id="app" class="debug-screens">
    <header-app></header-app>
    <hero-app></hero-app>
    <about-app></about-app>
    <todo-app></todo-app>
    <CTA1></CTA1>
    <portofolio-app></portofolio-app>
    <static-app></static-app>
    <CTA2></CTA2>
    <review-app></review-app>
    <price-app></price-app>
    <step-app></step-app>
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
import StepApp from './components/StepApp.vue'
import StaticApp from './components/StaticApp.vue'
import TodoApp from './components/TodoApp.vue'
import CTA1 from './components/CTA1.vue'
import CTA2 from './components/CTA2.vue'

export default {
  name: 'App',
  components: {
    AboutApp, ContactApp, FooterApp, HeaderApp, HeroApp, PortofolioApp, PriceApp, ReviewApp, StepApp, StaticApp, TodoApp, CTA1, CTA2
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
