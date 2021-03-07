<template>
  <div class="fixed z-10 w-full" >
    <header class="text-gray-600 bg-white shadow-md">
      <div class="container px-5 py-2 mx-auto lg:py-4 md:flex md:justify-between">
        <!-- Nav Brand -->
        <div class="flex items-center justify-between">
          <a href="#" v-scroll-to="'#app'" class="flex items-center font-medium text-gray-900 md:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 p-2 text-white bg-indigo-500 rounded-full" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span class="ml-3 text-xl">Mekarya</span>
          </a>
          <button @click="showMenu" class="text-gray-600 appearance-none focus:border hover:text-black focus:text-black focus:outline-none md:hidden">
            <svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        <!-- Nav Items -->
        <div :class="isOpen ? 'block' : 'hidden'" class="items-center pb-2 mt-4 lg:mt-0 lg:pb-0 md:flex">
        <!-- Nav Items -->
          <nav class="block space-y-1 text-base md:space-y-0 md:flex" id="nav-items">
            <a href="#" @click="selected = 1" :class="{'text-indigo-500':selected == 1}" v-scroll-to="'#about-app'" class="block px-2 py-1 mr-5 hover:text-indigo-500">Tentang</a>
            <a href="#" @click="selected = 2" :class="{'text-indigo-500':selected == 2}" v-scroll-to="'#portofolio-app'" class="block px-2 py-1 mr-5 hover:text-indigo-500">Portofolio</a>
            <a href="#" @click="selected = 3" :class="{'text-indigo-500':selected == 3}" v-scroll-to="'#portofolio-app'" class="block px-2 py-1 mr-5 hover:text-indigo-500">Testimoni</a>
            <a href="#" @click="selected = 4" :class="{'text-indigo-500':selected == 4}" v-scroll-to="'#price-app'" class="block px-2 py-1 mr-5 hover:text-indigo-500">Harga</a>
            <a href="#" @click="selected = 5" :class="{'text-indigo-500':selected == 5}" v-scroll-to="'#contact-app'" class="block px-2 py-1 mr-5 hover:text-indigo-500">Kontak</a>
          </nav>
          <!-- Nav Button -->
          <button 
            class="inline-flex items-center px-5 py-2 mt-4 text-base text-white bg-indigo-500 border-0 rounded hover:bg-indigo-600 focus:outline-none md:mt-0">
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
      selected: 1
    }
  },
  methods: {
    showMenu: function() {
      this.isOpen = !this.isOpen
    }
  }
}
</script>
