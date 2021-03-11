<template>
  <section class="text-gray-600 body-font" id="review-app">
    <div class="container px-5 py-24 mx-auto">
      <div class="mb-20 text-center">
        <h1 class="mb-4 text-3xl font-bold tracking-tight text-center text-gray-900 duration-500 transform hover:text-indigo-600 sm:text-3xl">Kata Mereka Tentang Mekarya</h1>
        <p class="mx-auto text-base leading-relaxed lg:w-2/3">Banyak orang dan perusahaan yang telah menggunakan Mekarya, saatnya giliran Anda</p>
      </div>
      <div class="flex flex-wrap -m-4">
        <carousel class="overflow-hidden" :navigation-enabled="true" :speed="1000" :auto-play="true" :per-page-custom="[[200, 1], [768, 2]]">
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
                <p class="px-5 text-center text-gray-600 text-md dark:text-gray-100">
                    {{ reviewList.message }}
                </p>
                <div class="h-3 -mt-3 text-3xl leading-tight text-right text-indigo-500">
                    ”
                </div>
              </div>
              <div class="w-full">
                  <p class="font-bold text-center text-indigo-600 text-md">
                      {{ reviewList.name }}
                  </p>
                  <p class="text-sm font-medium text-center text-gray-500 dark:text-gray-300">
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
          message: 'Setelah tahu Mekarya dapat membuat branding melalui media sosial akhirnya saya mencoba dan berhasil branding',
          name: 'HOLDEN CAULFIELD',
          job: 'Senior Product Designer',
          img: require('../assets/images/review1.jpg')
        },
        {
          message: 'Setelah menggunakan Mekarya, branding produk jadi mudah dan gak bikin pusing. Terima kasih Mekarya',
          name: 'ALPER KAMU',
          job: 'UI Develeoper',
          img: require('../assets/images/review2.jpg')
        },
        {
          message: 'Penggunaan media sosial sebagai media untuk branding produk adalah hal yang luar biasa.',
          name: 'HENRY LETHAM',
          job: 'CTO',
          img: require('../assets/images/review3.jpg')
        },
        {
          message: 'Pembuatan desain web yang cepat dan mudah diaplikasikan oleh pengembang web seperti saya',
          name: 'Edinson Cavani',
          job: 'Web Developer',
          img: require('../assets/images/review4.jpg')
        },
        {
          message: 'Semua orang wajib menggunakan Mekarya karena selai harganya terjangkau juga fasilitasnya memuaskan',
          name: 'Zidane Mahmud',
          job: 'Senior Programmer',
          img: require('../assets/images/review5.jpg')
        },
        {
          message: 'Tidak ada yang sebaik Mekarya untuk urusan branding produk pada media sosial',
          name: 'Malidi Iniesta',
          job: 'CMO',
          img: require('../assets/images/review6.jpg')
        },
      ],
    }
  }
}
</script>