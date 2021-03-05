<template>
  <section class="overflow-hidden text-gray-600 body-font" id="price-app">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-col w-full mb-20 text-center">
        <h1 class="mb-2 text-3xl font-medium text-gray-900 sm:text-4xl title-font">Pricing</h1>
        <p class="mx-auto text-base leading-relaxed text-gray-500 lg:w-2/3">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical.</p>
        <div class="flex mx-auto mt-6 overflow-hidden border-2 rounded border-emerald-500">
          <button class="px-4 py-1 text-white bg-emerald-500 focus:outline-none">Monthly</button>
          <button class="px-4 py-1 focus:outline-none">Annually</button>
        </div>
      </div>
      <div class="flex flex-wrap -m-4">
        <div class="w-full p-4 xl:w-1/4 md:w-1/2">
          <div class="relative flex flex-col h-full p-6 overflow-hidden border-2 border-gray-300 rounded-lg">
            <h2 class="mb-1 text-sm font-medium tracking-widest title-font">WEB DESIGN</h2>
            <h1 class="pb-4 mb-4 text-5xl leading-none text-gray-900 border-b border-gray-200">599.000</h1>
            <div v-for="wd in webDesign" :key="wd.id">
              <p class="flex items-center mb-2 text-gray-600">
                <span class="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-white bg-gray-400 rounded-full">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>{{ wd }}
              </p>
            </div>
            <button class="flex items-center w-full px-4 py-2 mt-auto text-white bg-gray-400 border-0 rounded focus:outline-none hover:bg-gray-500">Button
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
            <p class="mt-3 text-xs text-gray-500">Literally you probably haven't heard of them jean shorts.</p>
          </div>
        </div>
        <div class="w-full p-4 xl:w-1/4 md:w-1/2">
          <div class="relative flex flex-col h-full p-6 overflow-hidden border-2 rounded-lg border-emerald-500">
            <span class="absolute top-0 right-0 px-3 py-1 text-xs tracking-widest text-white rounded-bl bg-emerald-500">POPULAR</span>
            <h2 class="mb-1 text-sm font-medium tracking-widest title-font">WEB BASIC</h2>
            <h1 class="flex items-center pb-4 mb-4 text-5xl leading-none text-gray-900 border-b border-gray-200">
              <span>125.000</span>
              <span class="ml-1 text-lg font-normal text-gray-500">/mo</span>
            </h1>
            <div v-for="wb in webBasic" :key="wb.id">
              <p class="flex items-center mb-2 text-gray-600">
                <span class="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-white bg-gray-400 rounded-full">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>{{ wb }}
              </p>
            </div>
            <button class="flex items-center w-full px-4 py-2 mt-auto text-white border-0 rounded bg-emerald-500 focus:outline-none hover:bg-emerald-600">Button
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
            <p class="mt-3 text-xs text-gray-500">Literally you probably haven't heard of them jean shorts.</p>
          </div>
        </div>
        <div class="w-full p-4 xl:w-1/4 md:w-1/2">
          <div class="relative flex flex-col h-full p-6 overflow-hidden border-2 border-gray-300 rounded-lg">
            <h2 class="mb-1 text-sm font-medium tracking-widest title-font">WEB PRO</h2>
            <h1 class="flex items-center pb-4 mb-4 text-5xl leading-none text-gray-900 border-b border-gray-200">
              <span>183.000</span>
              <span class="ml-1 text-lg font-normal text-gray-500">/mo</span>
            </h1>
            <div v-for="wp in webPro" :key="wp.id">
              <p class="flex items-center mb-2 text-gray-600">
                <span class="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-white bg-gray-400 rounded-full">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>{{ wp }}
              </p>
            </div>
            <button class="flex items-center w-full px-4 py-2 mt-auto text-white bg-gray-400 border-0 rounded focus:outline-none hover:bg-gray-500">Button
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
            <p class="mt-3 text-xs text-gray-500">Literally you probably haven't heard of them jean shorts.</p>
          </div>
        </div>
        <div class="w-full p-4 xl:w-1/4 md:w-1/2">
          <div class="relative flex flex-col h-full p-6 overflow-hidden border-2 border-gray-300 rounded-lg">
            <h2 class="mb-1 text-sm font-medium tracking-widest title-font">WEB ULTIMATE</h2>
            <h1 class="flex items-center pb-4 mb-4 text-5xl leading-none text-gray-900 border-b border-gray-200">
              <span>283.000</span>
              <span class="ml-1 text-lg font-normal text-gray-500">/mo</span>
            </h1>
            <div v-for="wu in webUltimate" :key="wu.id">
              <p class="flex items-center mb-2 text-gray-600">
                <span class="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-white bg-gray-400 rounded-full">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>{{ wu }}
              </p>
            </div>
            <button class="flex items-center w-full px-4 py-2 mt-auto text-white bg-gray-400 border-0 rounded focus:outline-none hover:bg-gray-500">Button
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
            <p class="mt-3 text-xs text-gray-500">Literally you probably haven't heard of them jean shorts.</p>
          </div>
        </div>

      </div>
      
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      webDesign: [
        'Template Bebas Pilih',
        'Template Mobile',
        '1 Desain Banner',
        '1 Desain Banner',
        '1 Revisi Halaman',
        'Selesai Dalam 7 Hari'
      ],
      webBasic: [
        'Template Bebas Pilih',
        'Template Mobile',
        'Gratis Domain',
        'Gratis Unlimited Hosting',
        'Gratis SSL',
        'Gratis Email Profesional',
        '3 Desain Halaman',
        '3 Desain Banner',
        '3 Revisi Halaman',
        'Riset & Evaluasi',
        'Selasai Dalam 6 Hari' 
      ],
      webPro: [
        'Template Bebas Pilih',
        'Template Mobile',
        'Gratis Domain',
        'Gratis Unlimited Hosting',
        'Gratis SSL',
        'Gratis Email Profesional',
        '5 Desain Halaman',
        '5 Desain Banner',
        '5 Revisi Halaman',
        'Gratis Restorasi Logo',
        'Gratis e-Course Bisnis',
        'Riset & Evaluasi',
        'Selasai Dalam 5 Hari' 
      ],
      webUltimate: [
        'Template Bebas Pilih',
        'Template Mobile',
        'Gratis Domain',
        'Gratis Unlimited Hosting',
        'Gratis SSL',
        'Gratis Email Profesional',
        '7 Desain Halaman',
        '7 Desain Banner',
        '7 Revisi Halaman',
        'Gratis Restorasi Logo',
        'Gratis e-Course Bisnis',
        'Gratis Google Review',
        'Gratis Promosi 300.000 Reach',
        'Riset & Evaluasi',
        'Selasai Dalam 4 Hari' 
      ]
    }
  }
}
</script>