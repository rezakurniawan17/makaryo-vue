<template>
  <section class="text-gray-600" data-aos="fade-up" data-aos-duration="2000" data-aos-anchor-placement="top-bottom">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-col w-full mb-20 text-center">
        <h1 class="mb-4 text-3xl font-bold tracking-tight text-gray-900 duration-500 transform sm:text-3xl hover:text-indigo-600 ">Pencapaian kami selama 1 tahun</h1>
        <p class="mx-auto text-base leading-relaxed lg:w-2/3">Dengan kekuatan super kami, inilah yang telah kami capai</p>
      </div>
      <div class="flex flex-wrap -m-4 text-center">
        <div class="w-full p-4 lg:w-1/4 md:w-1/2 sm:w-1/2" v-for="statList in statLists" :key="statList.id">
          <div  class="px-4 py-6 transition-all duration-500 ease-in-out transform border-2 border-gray-200 rounded-lg group hover:border-indigo-500 hover:-translate-y-2">
            <!-- <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="inline-block w-12 h-12 mb-3 text-indigo-600" viewBox="0 0 24 24">
              <path d="M8 17l4 4 4-4m-4-5v9"></path>
              <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
            </svg> -->
            <img :src="statList.img" class="inline-block w-12 h-12 mb-3" alt="">
            <h2 class="text-xl font-medium text-gray-900 title-font">{{ statList.name }}</h2>
            <p class="text-4xl font-bold leading-relaxed duration-300 transform group-hover:text-indigo-600">{{statList.value }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

v-<script>
export default {
  data() {
    return {
      statLists: [
        {
          name: 'Klien Website',
          value: '43+',
          img: require('../assets/icons/download-cloud.svg')
        },
        { 
          name: 'Klien Media Sosial',
          value: '64+', 
          img: require('../assets/icons/users.svg') 
        },
        { 
          name: 'Layanan Harian', 
          value: '13+', 
          img:require('../assets/icons/navigation.svg') 
        },
        { 
          name: 'Jangkauan', 
          value: '300.000',
          img:require('../assets/icons/search.svg') 
        },
      ]
    }
  }
}
</script>