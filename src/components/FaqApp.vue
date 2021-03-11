<template>
  <div class="px-5 py-20 bg-lightblue" id="faq-app" data-aos="fade-up" data-aos-duration="2000" data-aos-anchor-placement="top-bottom">
    <div class="flex flex-col max-w-6xl mx-auto lg:flex-row">
      <h2 class="w-full pt-8 mr-8 text-3xl font-bold leading-9 tracking-tight lg:w-1/3">
        Pertanyaan dan jawaban yang dapat membantu kamu
      </h2>
      <dl class="w-full divide-y-2 divide-indigo-300 lg:w-2/3 divide">
        <div v-for="listFAQ in listFAQs" :key="listFAQ.id">
          <dt class="pt-8 mb-2">
            <h3 class="text-xl font-semibold">
              {{ listFAQ.ask }}
            </h3>
          </dt>
          <dd class="pb-8">
            <p>
              {{ listFAQ.question }}
            </p>
          </dd>
        </div>
      </dl>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listFAQs: [
        {
          ask : 'Bagaimana cara kerja Mekarya ?',
          question: 'Setelah melakukan proses pembayaran, klien diminta untuk mengisi form brief. Setelah itu tim kami akan melakukan riset interest danbehavior kostumer klien. Setelah deal, tim akan mulai melakukan maintenance. Di akhir pelayanan, lien akan mendapat development report',
          isShow: true
        },
        {
          ask : 'Berapa lama pengerjaannya ?',
          question: 'Setelah proses concept dealing, tim kami akan melakukan riset selama 5 hari. Setelah itu, tim kami akan mulai melakukan maintenance web maupun sosial media kamu',
          isShow: false
        },
        { 
          ask : 'Apa fasilitas Pembuatan Website ?', 
          question: 'Kamu akan mendapat template bebas pilih, free domain, free unlimited hosting, free SSL, optimasi SEO, free professional email, tampilan mobile, restorasi logo, pembuatan halaman, pembuatan banner slider, laporan perkembangan dan layanan coaching',
          isShow: false
        },
        { 
          ask : 'Apa fasilitas Manajemen Media Sosial ?', 
          question: 'Kamu akan mendapat template bebas pilih, pembuatan feed, pembuatan carousel feed, pembuatan story, pembuatan video promosi, auto-post facebook, copywriting, laporan perkembangan dan layanan coaching.',
          isShow: false
        },
        { 
          ask : 'Bahan foto atau video dari siapa ?', 
          question: 'Bahan foto dan video dari kamu ya. Tenang, nanti foto dan videomu akan kami editin kok',
          isShow: false
        },
        { 
          ask : 'Bagaimana jika tidak punya idea desain ?', 
          question: 'Santai aja, jika kamu tidak punya ide desain, kami bantu pikirkan ide desainnya 100% dari mulai desain, copywriting, caption sampai posting tiap hari. Pokoknya kamu tinggal duduk manis kontrol masalah produksi usahamu',
          isShow: false
        },
        { 
          ask : 'Apakah bisa revisi desain ?', 
          question: 'Bisa banget dong. Minor revisi ya',
          isShow: false
        },
        { 
          ask : 'Bisakah merubah brief saat proses pengerjaan ?', 
          question: 'Mohon maaf kami tidak bisa merubah brief di tengah proses pengerjaan. Jadi, setiap saat proses concept dealing, pertimbangkan matang-matang ya',
          isShow: false
        },
        { 
          ask : 'Bagaimana sistem pembayarannya ?', 
          question: '100% lunas dimuka ya. Tenang. Kami menjamin proses akan berjalan sesuai tanggal yang telah disepakati bersama. Apabila terjadi molor, maka 100% uang kamu akan kami kembalikan',
          isShow: false
        },

      ]
    }
  },
}
</script>