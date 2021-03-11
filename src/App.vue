<template>
  <!-- class="debug-screens" -->
  <div id="app" class="antialiased">
    <header-app></header-app>
    <hero-app></hero-app>
    <doing-app></doing-app>
    <feature-app></feature-app>
    <CTA1></CTA1>
    <static-app></static-app>
    <review-app></review-app>
    <price-app></price-app>
    <step-app></step-app>
    <contact-app></contact-app>
    <faq-app></faq-app>
    <footer-app></footer-app>
  </div>
</template>

<script>
import FeatureApp from './components/FeatureApp.vue'
import FaqApp from './components/FaqApp.vue'
import FooterApp from './components/FooterApp.vue'
import HeaderApp from './components/HeaderApp.vue'
import HeroApp from './components/HeroApp.vue'
import PriceApp from './components/PriceApp.vue'
import ReviewApp from './components/ReviewApp.vue'
import StepApp from './components/StepApp.vue'
import StaticApp from './components/StaticApp.vue'
import DoingApp from './components/DoingApp.vue'
import CTA1 from './components/CTA1.vue'
import ContactApp from './components/ContactApp.vue'

export default {
  name: 'App',
  components: {
    FeatureApp, FaqApp, FooterApp, DoingApp, HeaderApp, HeroApp, PriceApp, ReviewApp, StepApp, StaticApp, CTA1, ContactApp
  }
}

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}; 
</script>

<style>
@import
url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&display=swap');

#app {
  font-family: 'Manrope', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
