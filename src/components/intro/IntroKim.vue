<template>
  <q-card>
    <q-card-section class="items-center text-center">
      <q-avatar size="120px" square>
        <img src="~assets/logo-kim.jpg" />
      </q-avatar>
      <div class="text-3xl">KELOMPOK INFORMASI MASYARAKAT</div>
    </q-card-section>

    <q-separator inset color="black" />

    <q-card-section>
      <p class="text-lg text-center">
        Dengan adanya Undang-Undang 14 Tahun 2008 tentang Keterbukaan Informasi
        Publik semakin mendorong pentingnya kehadiran Kelompok Informasi
        Masyarakat (KIM) sebagai media pelayan informasi. Keberadaan UU KIP
        inilah Dinas Komunikasi dan Informatika Kabupaten Lima Puluh Kota
        melaksanakan pembinaan terhadap KIM sebagai lembaga layanan informasi
        masyarakat terhadap isu-isu pembangunan sesuai dengan kebutuhannya.
      </p>
    </q-card-section>

    <q-card-section class="q-pt-none">
      <div class="text-center">
        <q-btn color="primary" label="isi formulir" @click="onclick" />
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  methods: {
    onclick() {
      this.$emit("on-click");
    },
  },
};
</script>
