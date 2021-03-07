<template>
  <div id="app" class="debug-screens">
    <header-app></header-app>
    <hero-app></hero-app>
    <doing-app></doing-app>
    <feature-app></feature-app>
    <portofolio-app></portofolio-app>
    <CTA1></CTA1>
    <static-app></static-app>
    <review-app></review-app>
    <price-app></price-app>
    <CTA2></CTA2>
    <step-app></step-app>
    <contact-app></contact-app>
    <footer-app></footer-app>
  </div>
</template>

<script>
import FeatureApp from './components/FeatureApp.vue'
import ContactApp from './components/ContactApp.vue'
import FooterApp from './components/FooterApp.vue'
import HeaderApp from './components/HeaderApp.vue'
import HeroApp from './components/HeroApp.vue'
import PortofolioApp from './components/PortofolioApp.vue'
import PriceApp from './components/PriceApp.vue'
import ReviewApp from './components/ReviewApp.vue'
import StepApp from './components/StepApp.vue'
import StaticApp from './components/StaticApp.vue'
import DoingApp from './components/DoingApp.vue'
import CTA1 from './components/CTA1.vue'
import CTA2 from './components/CTA2.vue'

export default {
  name: 'App',
  components: {
    FeatureApp, ContactApp, FooterApp, DoingApp, HeaderApp, HeroApp, PortofolioApp, PriceApp, ReviewApp, StepApp, StaticApp, CTA1, CTA2
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
