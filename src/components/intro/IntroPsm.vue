<template>
  <q-card>
    <q-card-section class="items-center text-center">
      <q-avatar size="120px" square>
        <img src="~assets/logo-psm.jpg" />
      </q-avatar>
      <div class="text-3xl">PEKERJA SOSIAL MASYARAKAT (PSM)</div>
      <div class="text-xl">DATA BNBA</div>
    </q-card-section>

    <q-separator inset color="black" />

    <q-card-section>
      <p class="text-lg text-center">
        <span class="font-bold">Pekerja Sosial Masyarakat</span> adalah
        seseorang sebagai warga masyarakat yang mempunyai jiwa pengabdian
        sosial, kemauan, dan kemampuan dalam penyelenggaraan kesejahteraan
        sosial, serta telah mengikuti bimbingan atau pelatihan di bidang
        kesejahteraan sosial. PSM diadakan dalam rangka memberikan kesempatan
        seluas – luasnya kepada warga masyarakat untuk berperan dalam
        melaksanakan penyelenggaraan kesejahteraan sosial dan meningkatkan
        kepedulian warga masyarakat dalam menangani masalah sosial.
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
