<template>
  <section class="text-gray-600 body-font" id="review-app">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-wrap -m-4">
      <carousel :scroll-per-page="true" :navigation-enabled="true" :speed="2000" :auto-play="true" :perPageCustom="[[300, 1], [640,2], [768, 2], [1024, 3]]">
        <slide class="p-4 mb-6 lg:w-1/3 lg:mb-0">
          <div class="">
            <div class="h-full text-center">
              <img alt="testimonial" class="inline-block object-cover object-center w-20 h-20 mb-8 bg-gray-100 border-2 border-gray-200 rounded-full" src="../assets/images/review1.jpg">
              <p class="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
              <span class="inline-block w-10 h-1 mt-6 mb-4 rounded bg-emerald-500"></span>
              <h2 class="text-sm font-medium tracking-wider text-gray-900 title-font">HOLDEN CAULFIELD</h2>
              <p class="text-gray-500">Senior Product Designer</p>
            </div>
          </div>
        </slide>
        <slide class="p-4 mb-6 lg:w-1/3 lg:mb-0">
          <div >
            <div class="h-full text-center">
              <img alt="testimonial" class="inline-block object-cover object-center w-20 h-20 mb-8 bg-gray-100 border-2 border-gray-200 rounded-full" src="../assets/images/review2.jpg">
              <p class="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
              <span class="inline-block w-10 h-1 mt-6 mb-4 rounded bg-emerald-500"></span>
              <h2 class="text-sm font-medium tracking-wider text-gray-900 title-font">ALPER KAMU</h2>
              <p class="text-gray-500">UI Develeoper</p>
            </div>
          </div>
        </slide>
        <slide class="p-4 lg:w-1/3 lg:mb-0">
          <div>
            <div class="h-full text-center">
              <img alt="testimonial" class="inline-block object-cover object-center w-20 h-20 mb-8 bg-gray-100 border-2 border-gray-200 rounded-full" src="../assets/images/review3.jpg">
              <p class="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
              <span class="inline-block w-10 h-1 mt-6 mb-4 rounded bg-emerald-500"></span>
              <h2 class="text-sm font-medium tracking-wider text-gray-900 title-font">HENRY LETHAM</h2>
              <p class="text-gray-500">CTO</p>
            </div>
          </div>
        </slide>
        <slide class="p-4 mb-6 lg:w-1/3 lg:mb-0">
          <div class="">
            <div class="h-full text-center">
              <img alt="testimonial" class="inline-block object-cover object-center w-20 h-20 mb-8 bg-gray-100 border-2 border-gray-200 rounded-full" src="../assets/images/review4.jpg">
              <p class="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
              <span class="inline-block w-10 h-1 mt-6 mb-4 rounded bg-emerald-500"></span>
              <h2 class="text-sm font-medium tracking-wider text-gray-900 title-font">HOLDEN CAULFIELD</h2>
              <p class="text-gray-500">Senior Product Designer</p>
            </div>
          </div>
        </slide>
        <slide class="p-4 mb-6 lg:w-1/3 lg:mb-0">
          <div >
            <div class="h-full text-center">
              <img alt="testimonial" class="inline-block object-cover object-center w-20 h-20 mb-8 bg-gray-100 border-2 border-gray-200 rounded-full" src="../assets/images/review5.jpg">
              <p class="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
              <span class="inline-block w-10 h-1 mt-6 mb-4 rounded bg-emerald-500"></span>
              <h2 class="text-sm font-medium tracking-wider text-gray-900 title-font">ALPER KAMU</h2>
              <p class="text-gray-500">UI Develeoper</p>
            </div>
          </div>
        </slide>
        <slide class="p-4 lg:w-1/3 lg:mb-0">
          <div>
            <div class="h-full text-center">
              <img alt="testimonial" class="inline-block object-cover object-center w-20 h-20 mb-8 bg-gray-100 border-2 border-gray-200 rounded-full" src="../assets/images/review6.jpg">
              <p class="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
              <span class="inline-block w-10 h-1 mt-6 mb-4 rounded bg-emerald-500"></span>
              <h2 class="text-sm font-medium tracking-wider text-gray-900 title-font">HENRY LETHAM</h2>
              <p class="text-gray-500">CTO</p>
            </div>
          </div>
        </slide>
      </carousel>
      </div>
    </div>
  </section>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
export default {
  components: {
    Carousel, Slide
  }
}
</script>