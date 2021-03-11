<template>
<section class="text-gray-600 body-font" data-aos="fade-up" data-aos-duration="2000" data-aos-anchor-placement="top-bottom">
  <div class="container flex flex-wrap px-5 py-24 mx-auto">
    <div class="flex flex-col w-full mb-20 text-center">
      <h1 class="mb-4 text-3xl font-bold tracking-tight text-gray-900 duration-500 transform sm:text-3xl hover:text-indigo-600 ">Bagaimana cara order ?</h1>
      <p class="mx-auto text-base leading-relaxed lg:w-2/3">Ikuti langkah berikut untuk order</p>
    </div>
    <div class="flex flex-wrap w-full">
      <div class="lg:w-1/2 lg:pr-10 lg:py-2">
        <div class="relative flex pb-8" v-for="step in steps" :key="step.id">
          <div class="absolute inset-0 flex items-center justify-center w-10 h-full">
            <div class="w-1 h-full bg-gray-200 pointer-events-none"></div>
          </div>
          <div class="relative z-10 inline-flex items-center justify-center flex-shrink-0 w-10 h-10 text-white bg-indigo-600 rounded-full">
            <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
          </div>
          <div class="flex-grow pl-4">
            <h2 class="mb-1 text-lg font-medium tracking-wider text-gray-900 uppercase title-font">{{ step.title }}</h2>
            <hr class="w-1/12 mb-2 border-2 border-indigo-600">
            <p class="leading-relaxed">{{ step.description }}</p>
          </div>
        </div>
      </div>
      <div class="hidden mt-12 lg:block lg:w-1/2 lg:mt-0 ">
        <img class="w-8/12 mx-auto rounded-lg" src="../assets/icons/order.svg" alt="step">
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {
  data() {
    return {
      steps : [
        {
          title: 'Step 1',
          name: 'Transfer',
          description: 'Jika kamu sudah memilih paket apa yang akan dipesan, maka harus transfer ke nomor rekening tertera',
        },
        {
          title: 'Step 2',
          name: 'Isi Form Klien',
          description: 'Mengisi form brief untuk klien supaya dapat memetakan konsep desain yang akan kami buat',
        },
        {
          title: 'Step 3',
          name: 'Konsep Deal',
          description: 'Jika sudah mengisi form brief dan diskusi, tim kami akan menganalisa tentang bisnis kamu',
        },
        {
          title: 'Step 4',
          name: 'Maintenance',
          description: 'Waktu pengerjaan. Setelah semua kesepakatan waktu dibuat, tinggal melakukan pengerjaan konten',
        },
      ]
    }
  }
}
</script>