<template>
  <section class="text-gray-600 body-font" id="about-app">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col w-full mb-20 text-center" data-aos="fade-up">
      <!-- <h2 class="mb-1 text-xs font-medium tracking-widest text-indigo-500 title-font">TENTANG KAMI</h2> -->
      <h1 class="mb-4 text-2xl font-semibold text-gray-800 sm:text-3xl">Tentang Makarya</h1>
      <p class="mx-auto text-base leading-relaxed lg:w-10/12">Mekarya merupakan solusi bagi Anda yang ingin melakukan Branding dengan platform media sosial.
      <!-- <br class="hidden lg:block">
      Kami sudah beroperasi selama 1 tahun serta telah dipercaya oleh banyak organisasi dan perusahaan   -->
      </p>
    </div>
    <div class="flex flex-wrap">
      <div v-for="aboutList in aboutLists" :key="aboutList.id" class="px-8 py-6 border-l-2 border-indigo-400 lg:text-center xl:w-1/4 lg:w-1/2 md:w-full border-opacity-60">
        <img class="w-16 mb-4 lg:mx-auto" :src="aboutList.img">
        <h2 class="mb-2 text-lg font-semibold text-gray-900 sm:text-xl title-font">{{ aboutList.title }}</h2>
        <p class="mb-4 text-base leading-relaxed">{{ aboutList.description }}</p>
      </div>
    </div>
    <!-- <button class="flex px-8 py-2 mx-auto mt-16 text-lg text-white border-0 rounded bg-emerald-500 focus:outline-none hover:bg-emerald-600">Button</button> -->
  </div>
</section>
</template>

<script>
export default {
  data() {
    return {
      aboutLists: [
        {
          title: 'Harga Relatif Murah',
          description: 'Tidak perlu risau tentang harga, Mekarya tidak akan mematok harga yang tinggi',
          img: require('../assets/icons/price-tag.png')
        },
        {
          title: 'Kualitas Juara',
          description: 'Hasil yang kami hasilkalkan setara dengan profesional dan dapat dipastikan terbaik',
          img: require('../assets/icons/quality.png')
        },
        {
          title: 'Pekerja Profesioal',
          description: 'Profesionalitas adalah visi kami sehingga kami menggunakan tenaga profesional yang tidak main-main',
          img: require('../assets/icons/briefcase.png')
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