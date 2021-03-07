<template>
  <section class="text-gray-600 body-font" id="review-app">
    <div class="container px-5 py-24 mx-auto">
      <div class="mb-20 text-center">
        <h1 class="mb-4 text-2xl font-semibold text-center text-gray-900 sm:text-3xl">Kata Mereka Tentang Mekarya</h1>
        <p class="mx-auto text-base leading-relaxed lg:w-2/3">Mekarya merupakan solusi bagi Anda yang ingin melakukan Branding dengan platform media sosial.</p>
      </div>
      <div class="flex flex-wrap -m-4">
        <carousel class="overflow-hidden" :navigation-enabled="true" :speed="1000" :auto-play="true" :per-page-custom="[[200, 1], [768, 2]]">
          <!-- <slide class="w-full p-4 md:w-1/2" v-for="reviewList in reviewLists" :key="reviewList.id">
            <div class="h-full p-8 bg-gray-100 rounded">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="block w-5 h-5 mb-4 text-gray-400" viewBox="0 0 975.036 975.036">
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
              </svg>
              <p class="mb-6 leading-relaxed">{{ reviewList.message }}</p>
              <a class="inline-flex items-center">
                <img alt="testimonial" :src="reviewList.img" class="flex-shrink-0 object-cover object-center w-12 h-12 rounded-full">
                <span class="flex flex-col flex-grow pl-4">
                  <span class="font-medium text-gray-900 title-font">{{ reviewList.name }}</span>
                  <span class="text-sm text-gray-500">{{ reviewList.job }}</span>
                </span>
              </a>
            </div>
          </slide> -->
          <slide class="px-5 py-10" v-for="reviewList in reviewLists" :key="reviewList.id">
            <div class="w-full px-5 pt-5 pb-10 mx-auto text-gray-800 bg-white rounded-lg shadow-lg dark:bg-gray-800 dark:text-gray-50">
              <div class="w-full pt-1 pb-5 mx-auto -mt-16 text-center">
                <a href="#" class="relative block">
                    <img alt="profil" :src="reviewList.img" class="object-cover w-20 h-20 mx-auto rounded-full "/>
                </a>
              </div>
              <div class="w-full mb-10">
                <div class="h-3 text-3xl leading-tight text-left text-indigo-500">
                    “
                </div>
                <p class="px-5 text-sm text-center text-gray-600 dark:text-gray-100">
                    {{ reviewList.message }}
                </p>
                <div class="h-3 -mt-3 text-3xl leading-tight text-right text-indigo-500">
                    ”
                </div>
              </div>
              <div class="w-full">
                  <p class="font-bold text-center text-indigo-500 text-md">
                      {{ reviewList.name }}
                  </p>
                  <p class="text-xs text-center text-gray-500 dark:text-gray-300">
                      {{ reviewList.job }}
                  </p>
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
  },
  data() {
    return {
      reviewLists: [
        {
          message: 'Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90s cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.',
          name: 'HOLDEN CAULFIELD',
          job: 'Senior Product Designer',
          img: require('../assets/images/review1.jpg')
        },
        {
          message: 'Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90s cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.',
          name: 'ALPER KAMU',
          job: 'UI Develeoper',
          img: require('../assets/images/review2.jpg')
        },
        {
          message: 'Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90s cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.',
          name: 'HENRY LETHAM',
          job: 'CTO',
          img: require('../assets/images/review3.jpg')
        },
        {
          message: 'Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90s cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.',
          name: 'Edinson Cavani',
          job: 'Web Developer',
          img: require('../assets/images/review4.jpg')
        },
        {
          message: 'Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90s cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.',
          name: 'Zidane Mahmud',
          job: 'Senior Programmer',
          img: require('../assets/images/review5.jpg')
        },
        {
          message: 'Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90s cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.',
          name: 'Malidi Iniesta',
          job: 'CMO',
          img: require('../assets/images/review6.jpg')
        },
      ],
      images: [
        'review1.jpg',
        'review2.jpg',
        'review3.jpg',
        'review4.jpg',
        'review5.jpg',
      ],
    }
  }
}
</script>