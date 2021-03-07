<template>
  <section class="relative text-gray-600 body-font">
    <div class="container flex flex-wrap px-5 py-24 mx-auto sm:flex-nowrap">
      <div class="relative flex items-end justify-start p-10 overflow-hidden bg-gray-300 rounded-lg lg:w-2/3 md:w-1/2 sm:mr-10">
        <iframe width="100%" height="100%" class="absolute inset-0" frameborder="0" title="map" marginheight="0" marginwidth="0" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.9937252838226!2d110.39513461420155!3d-7.010019970610363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708b0c2c0ef21b%3A0x6176b84a3473694d!2sJl.%20Sampangan%20Baru%20II%2C%20Bendan%20Ngisor%2C%20Kec.%20Gajahmungkur%2C%20Kota%20Semarang%2C%20Jawa%20Tengah%2050233%2C%20Indonesia!5e0!3m2!1sen!2sus!4v1615087344458!5m2!1sen!2sus" style="filter: grayscale(1) contrast(1.2) opacity(0.4);"></iframe>
        <div class="relative flex flex-wrap py-6 bg-white rounded shadow-md">
          <div class="px-6 lg:w-1/2">
            <h2 class="text-xs font-semibold tracking-widest text-gray-900 title-font">ADDRESS</h2>
            <p class="mt-1">Sampangan Baru 2 Nomor B33A Semarang, Jawa Tengah</p>
          </div>
          <div class="px-6 mt-4 lg:w-1/2 lg:mt-0">
            <h2 class="text-xs font-semibold tracking-widest text-gray-900 title-font">EMAIL</h2>
            <a class="leading-relaxed text-indigo-500">mekarya@gmail.com</a>
            <h2 class="mt-4 text-xs font-semibold tracking-widest text-gray-900 title-font">PHONE</h2>
            <p class="leading-relaxed">0819-1456-6683</p>
          </div>
        </div>
      </div>
      <div class="flex flex-col w-full mt-8 bg-white lg:w-1/3 md:w-1/2 md:ml-auto md:py-8 md:mt-0">
        <h2 class="mb-1 text-lg font-medium text-gray-900 title-font">Feedback</h2>
        <p class="mb-5 leading-relaxed text-gray-600">Berikan feedback Anda untuk kemajuan Mekarya dengan mengisi form dibawah</p>
        <div class="relative mb-4">
          <label for="name" class="text-sm leading-7 text-gray-600">Nama</label>
          <input type="text" id="name" name="name" class="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200">
        </div>
        <div class="relative mb-4">
          <label for="email" class="text-sm leading-7 text-gray-600">Email</label>
          <input type="email" id="email" name="email" class="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200">
        </div>
        <div class="relative mb-4">
          <label for="message" class="text-sm leading-7 text-gray-600">Pesan</label>
          <textarea id="message" name="message" class="w-full h-32 px-3 py-1 text-base leading-6 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none resize-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"></textarea>
        </div>
        <button class="px-6 py-2 text-lg text-white bg-indigo-500 border-0 rounded focus:outline-none hover:bg-indigo-600">Kirim</button>
        <p class="mt-3 text-xs text-gray-500">Semua pesan Anda akan kami rahasiakan.</p>
      </div>
    </div>
  </section>
</template>