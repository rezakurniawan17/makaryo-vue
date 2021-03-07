<template>
  <section class="bg-indigo-50">
    <div class="container px-6 py-24 mx-auto">
      <div class="items-center md:flex">
        <div class="w-full md:w-1/2">
          <div class="max-w-lg">
              <h1 class="font-bold text-gray-800 md:text-3xl lg:text-5xl">Bangun Brand Bisnis Bersama Mekarya</h1>
              <p class="mt-4 text-gray-600 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro beatae error laborum ab amet sunt recusandae? Reiciendis natus perspiciatis optio.</p>
              <button class="px-4 py-3 mt-4 text-sm font-medium text-white uppercase bg-indigo-600 rounded hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500">Pesan Sekarang</button>
          </div>
        </div>
        <div v-scroll-to="'#contact-app'" class="flex items-center justify-center w-full mt-6 md:mt-0 md:w-1/2">
            <img class="w-full h-full max-w-lg" src="../assets/images/hero.png" alt="">
        </div>
      </div>
    </div>
  </section>
</template>