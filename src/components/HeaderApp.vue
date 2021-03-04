<template>
  <div class="fixed z-10 w-full" >
  <header class="text-gray-600 bg-white shadow-md">
    <div class="container p-5 mx-auto md:flex md:justify-between">
      <!-- Nav Brand -->
      <div class="">
        <a class="flex items-center mb-4 font-medium text-gray-900 md:mb-0">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 p-2 text-white bg-indigo-500 rounded-full" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span class="ml-3 text-xl">Makaryo</span>
        </a>
        <button @click="showMenu" class="absolute top-0 right-0 mt-5 mr-5 text-gray-600 appearance-none focus:border hover:text-black focus:text-black focus:outline-none md:hidden">
          <svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      <div :class="isOpen ? 'block' : 'hidden'" class="items-center md:flex">
      <!-- Nav Items -->
        <nav class="block space-y-1 text-base md:space-y-0 md:flex" id="nav-items">
          <a href="#" v-scroll-to="'#hero-app'" class="block px-2 py-1 mr-5 font-bold text-emerald-500">Beranda</a>
          <a href="#" v-scroll-to="'#about-app'" class="block px-2 py-1 mr-5">Tentang</a>
          <a href="#" v-scroll-to="'#portofolio-app'" class="block px-2 py-1 mr-5">Projek</a>
          <a href="#" v-scroll-to="'#price-app'" class="block px-2 py-1 mr-5">Harga</a>
          <a href="#" v-scroll-to="'#contact-app'" class="block px-2 py-1 mr-5">Kontak</a>
        </nav>
        <!-- Nav Button -->
        <button 
          class="inline-flex items-center px-5 py-2 mt-4 text-base text-white border-0 rounded bg-emerald-500 hover:bg-emerald-600 focus:outline-none md:mt-0">
          Order
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </div>
  </header>
  </div>
</template>

<script>
export default {
  data() {
    return {
      'isOpen': false,
    }
  },
  methods: {
    showMenu: function() {
      this.isOpen = !this.isOpen
    }
  }
}
</script>
