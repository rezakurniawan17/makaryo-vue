<template>
<div data-aos="fade-up" data-aos-duration="2000" data-aos-anchor-placement="top-bottom" class="container px-5 py-24 mx-auto bg-white dark:bg-gray-800" id="feature-app">
  <div class="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-12 lg:items-start">
    <div class="lg:col-start-2">
      <h4 class="text-3xl font-bold leading-8 tracking-tight text-center text-gray-900 duration-500 transform hover:text-indigo-600 lg:text-left dark:text-white sm:leading-9">
          Mengapa Mekarya ?
      </h4>
      <p class="mt-2 text-center text-gray-600 lg:text-left">Mekarya memiliki banyak pengelaman dalam branding dan sudah dipercaya oleh banyak pihak</p>
      <ul class="mt-8">
        <li class="mb-6" v-for="aboutList in aboutLists" :key="aboutList.id">
            <div class="flex p-2 transition-all duration-500 ease-in-out transform bg-white border-2 border-transparent rounded-md group hover:border-indigo-500 hover:-translate-y-2">
                <div class="flex-shrink-0">
                    <div class="flex items-center justify-center w-12 h-12 rounded-md">
                        <img :src="aboutList.img" alt="">
                    </div>
                </div>
                <div class="ml-4">
                    <h5 class="text-lg font-bold leading-6 text-gray-900 duration-500 group-hover:text-indigo-600 dark:text-white">
                        {{ aboutList.title }}
                    </h5>
                    <p class="mt-2 text-base leading-6 text-gray-600 dark:text-gray-300">
                        {{ aboutList.description }}
                    </p>
                </div>
            </div>
        </li>
      </ul>
    </div>
    <div class="hidden mt-10 -mx-4 lg:block md:-mx-12 lg:mt-0 lg:col-start-1">
        <img src="../assets/icons/startup.png" alt="illustration" class="w-10/12 mx-auto rounded"/>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      aboutLists: [
        {
          title: 'Harga Relatif Murah',
          description: 'Tidak perlu risau tentang harga, Mekarya tidak akan mematok harga yang tinggi',
          img: require('../assets/icons/money.png')
        },
        {
          title: 'Kualitas Juara',
          description: 'Hasil yang kami hasilkalkan setara dengan profesional dan dapat dipastikan terbaik',
          img: require('../assets/icons/medal.png')
        },
        {
          title: 'Pekerja Profesioal',
          description: 'Profesionalitas adalah visi kami sehingga kami menggunakan tenaga profesional yang tidak main-main',
          img: require('../assets/icons/diploma.png')
        },
        {
          title: 'Fasilitas Perbaikan',
          description: 'Tentunya Mekarya akan memberikan fasilitas perbaikan pada setiap paket',
          img: require('../assets/icons/maintenance.png')
        },
      ]
    }
  }
}
</script>