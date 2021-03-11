<template>
  <section class="px-5 py-24" id="doing-app">
    <div class="mb-10 text-center">
      <h1 class="mb-4 text-3xl font-bold tracking-tight text-center text-gray-900 duration-500 transform hover:text-indigo-600 sm:text-3xl">Tentang Mekarya</h1>
      <p class="mx-auto text-base leading-relaxed lg:w-2/3">Mekarya merupakan solusi bagi Anda yang ingin melakukan Branding dengan platform media sosial.</p>
    </div>
    <div class="flex-wrap items-start justify-center gap-8 text-center sm:flex">
      <div v-for="listDoing in listDoings" :key="listDoing.id" :class="{'md:mt-0' : listDoing.translate, 'lg:mt-12' : listDoing.translate}" class="w-full px-4 py-4 mt-6 transition-all duration-500 ease-in-out transform bg-white border-2 border-transparent rounded-lg shadow-lg group hover:border-indigo-500 hover:-translate-y-4 sm:w-1/2 md:w-1/2 lg:w-1/4 dark:bg-gray-800">
        <div class="flex-shrink-0 h-auto">
          <div class="flex items-center justify-center w-20 h-20 mx-auto text-white rounded-md">
            <img :src="listDoing.img" alt="">
          </div>
        </div>
        <h3 class="py-4 text-2xl font-semibold text-gray-700 duration-500 group-hover:text-indigo-600 sm:text-xl dark:text-white">
          {{ listDoing.title }}
        </h3>
        <p class="py-4 text-gray-500 text-md dark:text-gray-300">
          {{ listDoing.description }}
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      listDoings : [
        {
          title: 'Pembuatan Website',
          description: 'Mekarya membantu Anda dalam membangun dan merawat website. Kami juga memberikan optimasi website supaya dapat bekerja secara optimal',
          img: require('../assets/icons/web.png'),
          translate: false
        },
        {
          title: 'Manajemen Sosial Media',
          description: 'Mekarya membantu Anda dalam mengatur media sosial untuk keperluan branding serta memberikan copywriting untuk meningkatkan engangement brand Anda',
          img: require('../assets/icons/folder.png'),
          translate: true
        },
        {
          title: 'Branding Desain',
          description: 'Mekarya membantu Anda dalam membuat berbagai desain yang dapat menunjang branding produk Anda',
          img: require('../assets/icons/design.png'),
          translate: false
        }
      ]
    }
  }
}
</script>