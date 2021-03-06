<template>
<section class="text-gray-600">
  <div class="container px-5 py-24 mx-auto">
    <div class="mb-20 text-center">
      <h1 class="mb-4 text-2xl font-medium text-center text-gray-900 sm:text-3xl title-font">Mengapa Harus Mekarya</h1>
      <p class="mx-auto text-base leading-relaxed xl:w-2/4 lg:w-3/4">Mekarya telah dipercaya menjadi Digital Marketing Partner dalam meningkatkan level bisnisnya menjadi lebih besar.</p>
    </div>
    <div class="flex flex-wrap justify-center -m-4">
      <div class="w-full p-4 lg:w-4/12 sm:w-1/2" v-for="list in listWhy" :key="list.id">
        <h2 class="mb-4 text-lg font-semibold tracking-widest text-center text-gray-900 title-font sm:text-left">{{ list.title }}</h2>
        <nav v-for="feature in list.features" :key="feature.id" class="flex flex-col sm:items-start text-left items-center -mb-1 space-y-2.5">
          <a>
            <span class="inline-flex items-center justify-center w-4 h-4 mb-4 mr-2 text-indigo-500 bg-indigo-100 rounded-full">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>{{ feature }}
          </a>
        </nav>
      </div>
      <!-- <div class="w-full p-4 lg:w-1/4 sm:w-1/2">
        <h2 class="mb-4 text-sm font-medium tracking-widest text-center text-gray-900 title-font sm:text-left">MANAJEMEN SOSIAL MEDIA</h2>
        <nav class="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
          <a>
            <span class="inline-flex items-center justify-center w-4 h-4 mr-2 text-indigo-500 bg-indigo-100 rounded-full">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Optimasi Media Sosial
          </a>
          <a>
            <span class="inline-flex items-center justify-center w-4 h-4 mr-2 text-indigo-500 bg-indigo-100 rounded-full">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Copywriting Konten Media Sosial
          </a>
          <a>
            <span class="inline-flex items-center justify-center w-4 h-4 mr-2 text-indigo-500 bg-indigo-100 rounded-full">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Pemeliharaan Akun Media Sosial
          </a>
          <a>
            <span class="inline-flex items-center justify-center w-4 h-4 mr-2 text-indigo-500 bg-indigo-100 rounded-full">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Workshop Manajemen Media Sosial
          </a>
          <a>
            <span class="inline-flex items-center justify-center w-4 h-4 mr-2 text-indigo-500 bg-indigo-100 rounded-full">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Fifth Link
          </a>
        </nav>
      </div> -->
    </div>
    <button class="flex px-8 py-2 mx-auto mt-16 text-lg text-white border-0 rounded bg-emerald-500 focus:outline-none hover:bg-indigo-600">Ambil Penawaran</button>
  </div>
</section>
</template>

<script>
export default {
  data() {
    return {
      listWhy : [
        {
          title: 'Web Builder',
          features: [
            'Pembuatan Website',
            'Pemeliharaan Website',
            'Optimasi Website'
          ]
        },
        {
          title: 'Design Maker',
          features: [
            'Desain Produk',
            'Pembuatan Logo Brand',
            'Pembuatan Desain Web',
          ]
        },
        {
          title: 'Digital Marketing Management',
          features: [
            'Optimasi Media Sosial',
            'Konten Copywriting Media Sosial',
            'Pemeliharaan Akun Media Sosial',
            'Workshop Manajemen Media Sosial'
          ]
        }
      ]
    }
  }
}
</script>