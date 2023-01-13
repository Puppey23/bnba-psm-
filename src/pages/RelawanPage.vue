<template>
  <q-page class="q-pa-md">
    <div class="container">
      <q-card>
        <q-card-section class="bg-primary">
          <div class="text-center text-3xl text-white">FORM DATA BNBA</div>

          <div class="text-center text-lg text-white">
            PEKERJA SOSIAL MASYARAKAT (PSM)
          </div>
        </q-card-section>

        <q-card-section>
          <div class="row q-col-gutter-md">
            <div class="col-12 col-md">
              <div class="text-sm font-semibold">
                Nama <span class="text-red">*</span>
              </div>
              <q-input
                ref="nama"
                outlined
                lazy-rules
                v-model="form.nama"
                :rules="[(val) => (val && val.length > 0) || 'Wajib diisi']"
              />
            </div>

            <div class="col-12 col-md">
              <div class="text-sm font-semibold">
                NIK <span class="text-red">*</span>
              </div>
              <q-input
                ref="nik"
                outlined
                type="number"
                v-model="form.nik"
                lazy-rules
                :rules="[
                  (val) => (val && val.length > 0) || 'Wajib diisi',
                  (val) =>
                    (val && val.length == 16) ||
                    'Tolong masukan 16 digit nomor',
                ]"
              />
            </div>
          </div>

          <div class="row q-col-gutter-md">
            <div class="col-12 col-md">
              <div class="text-sm font-semibold">
                Tempat Lahir <span class="text-red">*</span>
              </div>
              <q-input
                ref="tempat_lahir"
                outlined
                v-model="form.tempatLahir"
                lazy-rules
                :rules="[(val) => (val && val.length > 0) || 'Wajib diisi']"
              />
            </div>

            <div class="col-12 col-md">
              <div class="text-sm font-semibold">
                Tanggal Lahir <span class="text-red">*</span>
              </div>
              <q-input
                ref="tanggal_lahir"
                outlined
                v-model="form.tanggalLahir"
                lazy-rules
                :rules="[(val) => (val && val.length > 0) || 'Wajib diisi']"
              >
                <template v-slot:append>
                  <q-icon name="event" class="cursor-pointer">
                    <q-popup-proxy
                      ref="qDateProxy"
                      transition-show="scale"
                      transition-hide="scale"
                    >
                      <q-date v-model="form.tanggalLahir" mask="DD-MM-YYYY">
                        <div class="row items-center justify-end">
                          <q-btn
                            v-close-popup
                            label="Close"
                            color="primary"
                            flat
                          />
                        </div>
                      </q-date>
                    </q-popup-proxy>
                  </q-icon>
                </template>
              </q-input>
            </div>
          </div>

          <div class="row q-col-gutter-md">
            <div class="col-12 col-md">
              <div class="text-sm font-semibold">
                Jenis Kelamin <span class="text-red">*</span>
              </div>
              <q-select
                ref="jenis_kelamin"
                outlined
                emit-value
                map-options
                option-label="nama"
                option-value="value"
                v-model="form.jenisKelamin"
                :options="optionGender"
                lazy-rules
                :rules="[(val) => (val && val.length > 0) || 'Wajib diisi']"
              />
            </div>

            <div class="col-12 col-md">
              <div class="text-sm font-semibold">
                Pendidikan Terakhir <span class="tex-red">*</span>
              </div>
              <q-input
                ref="pendidikan_terakhir"
                outlined
                v-model="form.pendidikanTerakhir"
                lazy-rules
                :rules="[(val) => (val && val.length > 0) || 'Wajib diisi']"
              />
            </div>
          </div>

          <div class="row q-col-gutter-md">
            <div class="col-12 col-md">
              <div class="text-sm font-semibold">
                Nomor Telepon <span class="text-red">*</span>
              </div>
              <q-input
                ref="nomor_telp"
                type="number"
                outlined
                v-model="form.noTelp"
                lazy-rules
                :rules="[(val) => (val && val.length > 0) || 'Wajib diisi']"
              />
            </div>

            <div class="col-12 col-md">
              <div class="text-sm font-semibold">Email</div>
              <q-input outlined v-model="form.email" />
            </div>
          </div>

          <div class="row q-col-gutter-md">
            <div class="col-12 col-md">
              <div class="text-sm font-semibold">
                Provinsi <span class="text-red">*</span>
              </div>
              <q-select
                ref="provinsi"
                outlined
                option-label="nama"
                option-value="id"
                v-model="form.prov"
                :options="optionProvinsi"
                @input="onSelectKab"
                :loading="loadingProv"
                lazy-rules
                :rules="[
                  (val) => (val && val.nama.length > 0) || 'Wajib diisi',
                ]"
              >
                <template v-slot:no-option>
                  <q-item>
                    <q-item-section class="text-italic text-grey">
                      Tidak ada data Provinsi
                    </q-item-section>
                  </q-item>
                </template>
              </q-select>
            </div>

            <div class="col-12 col-md">
              <div class="text-sm font-semibold">
                Kabupaten <span class="text-red">*</span>
              </div>
              <q-select
                ref="kabupaten"
                outlined
                option-label="nama"
                option-value="id"
                v-model="form.kab"
                :options="optionKab"
                @input="onSelectKec"
                :loading="loadingKab"
                lazy-rules
                :rules="[
                  (val) => (val && val.nama.length > 0) || 'Wajib diisi',
                ]"
              >
                <template v-slot:no-option>
                  <q-item>
                    <q-item-section class="text-italic text-grey">
                      Pilih provinsi terlebih dahulu
                    </q-item-section>
                  </q-item>
                </template>
              </q-select>
            </div>
          </div>

          <div class="row q-col-gutter-md">
            <div class="col-12 col-md">
              <div class="text-sm font-semibold">
                Kecamatan <span class="text-red">*</span>
              </div>
              <q-select
                ref="kecamatan"
                outlined
                option-label="nama"
                option-value="id"
                v-model="form.kec"
                :options="optionKec"
                @input="onSelectKel"
                :loading="loadingKec"
                lazy-rules
                :rules="[
                  (val) => (val && val.nama.length > 0) || 'Wajib diisi',
                ]"
              >
                <template v-slot:no-option>
                  <q-item>
                    <q-item-section class="text-italic text-grey">
                      Pilih kabupaten terlebih dahulu
                    </q-item-section>
                  </q-item>
                </template>
              </q-select>
            </div>

            <div class="col-12 col-md">
              <div class="text-sm font-semibold">
                Kelurahan <span class="text-red">*</span>
              </div>
              <q-select
                ref="kelurahan"
                outlined
                option-label="nama"
                option-value="id"
                v-model="form.kel"
                :options="optionKel"
                :loading="loadingKel"
                lazy-rules
                :rules="[
                  (val) => (val && val.nama.length > 0) || 'Wajib diisi',
                ]"
              >
                <template v-slot:no-option>
                  <q-item>
                    <q-item-section class="text-italic text-grey">
                      Pilih kecamatan terlebih dahulu
                    </q-item-section>
                  </q-item>
                </template>
              </q-select>
            </div>

            <div class="col-12 col-md">
              <div class="row q-gutter-md">
                <div class="col">
                  <div class="text-sm font-semibold">
                    RT <span class="text-red">*</span>
                  </div>
                  <q-input
                    ref="rt"
                    outlined
                    type="number"
                    v-model="form.rt"
                    lazy-rules
                    :rules="[(val) => (val && val.length > 0) || 'Wajib diisi']"
                  />
                </div>
                <div class="col">
                  <div class="text-sm font-semibold">
                    RW <span class="text-red">*</span>
                  </div>
                  <q-input
                    ref="rw"
                    outlined
                    type="number"
                    v-model="form.rw"
                    lazy-rules
                    :rules="[(val) => (val && val.length > 0) || 'Wajib diisi']"
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="row q-col-gutter-md">
            <div class="col-12 col-md">
              <div class="text-sm font-semibold">Facebook</div>
              <q-input outlined v-model="form.facebook" />
            </div>

            <div class="col-12 col-md">
              <div class="text-sm font-semibold">Twitter</div>
              <q-input outlined v-model="form.twitter" />
            </div>

            <div class="col-12 col-md">
              <div class="text-sm font-semibold">Instagram</div>
              <q-input outlined v-model="form.instagram" />
            </div>

            <div class="col-12 col-md">
              <div class="text-sm font-semibold">Tiktok</div>
              <q-input outlined v-model="form.tiktok" />
            </div>
          </div>

          <div class="row q-pt-md">
            <div class="col-12 col-md">
              <div class="text-sm font-semibold">
                Alamat <span class="text-red">*</span>
              </div>
              <q-input
                ref="alamat"
                outlined
                v-model="form.alamat"
                lazy-rules
                :rules="[(val) => (val && val.length > 0) || 'Wajib diisi']"
              />
            </div>
          </div>
        </q-card-section>

        <q-card-section class="q-pt-xs">
          <q-btn
            class="full-width"
            color="primary"
            label="Submit"
            @click="onSubmit"
          />
        </q-card-section>
      </q-card>
    </div>
    <recaptcha-vue />
  </q-page>
</template>

<script>
import RecaptchaVue from "src/components/Recaptcha.vue";

export default {
  components: {
    RecaptchaVue,
  },
  data() {
    return {
      loadingProv: false,
      loadingKab: false,
      loadingKec: false,
      loadingKel: false,
      optionGender: [
        {
          nama: "Laki-laki",
          value: "L",
        },
        {
          nama: "Perempuan",
          value: "P",
        },
      ],
      optionProvinsi: [],
      optionKab: [],
      optionKec: [],
      optionKel: [],
      form: {
        nama: "",
        nik: "",
        tempatLahir: "",
        tanggalLahir: "",
        jenisKelamin: "",
        pendidikanTerakhir: "",
        noTelp: "",
        email: "",
        prov: "",
        kab: "",
        kec: "",
        kel: "",
        rt: "",
        rw: "",
        facebook: "",
        twitter: "",
        instagram: "",
        tiktok: "",
        alamat: "",
      },
    };
  },
  mounted() {
    this.getDataProvinsi();
  },
  methods: {
    getDataProvinsi() {
      this.loadingProv = true;

      this.$axios.post("provinsi/showall").then(({ data }) => {
        this.loadingProv = false;
        this.optionProvinsi = data.data;
      });
    },
    onSelectKab() {
      let idProv = this.form.prov.id;
      this.loadingKab = true;

      this.$axios.post("/kabkot/showall").then(({ data }) => {
        this.loadingKab = false;
        let dataKab = data.data.filter((i) => i.provinsi_id == idProv);

        this.optionKab = dataKab;
      });
    },
    onSelectKec() {
      let idKab = this.form.kab.id;
      this.loadingKec = true;

      this.$axios.post("/kecamatan/showall").then(({ data }) => {
        this.loadingKec = false;
        let dataKec = data.data.filter((i) => i.kabkot_id == idKab);

        this.optionKec = dataKec;
      });
    },
    onSelectKel() {
      let idKec = this.form.kec.id;
      this.loadingKel = true;

      this.$axios.post("/kelurahan/showall").then(({ data }) => {
        this.loadingKel = false;
        let dataKel = data.data.filter((i) => i.kecamatan_id == idKec);

        this.optionKel = dataKel;
      });
    },
    onSubmit() {
      let form = this.form;

      let params = {
        nama: form.nama,
        nik: form.nik,
        tempat_lahir: form.tempatLahir,
        tanggal_lahir: form.tanggalLahir,
        jenis_kelamin: form.jenisKelamin,
        pendidikan_akhir: form.pendidikanTerakhir,
        nomor_telepon: form.noTelp,
        email: form.email,
        provinsi: form.prov.nama,
        kota_kabupaten: form.kab.nama,
        kecamatan: form.kec.nama,
        kelurahan_desa: form.kel.nama,
        rt: form.rt,
        rw: form.rw,
        facebook: form.facebook,
        twitter: form.twitter,
        instagram: form.instagram,
        tiktok: form.tiktok,
        alamat: form.alamat,
      };

      this.$refs.nama.validate();
      this.$refs.nik.validate();
      this.$refs.tempat_lahir.validate();
      this.$refs.tanggal_lahir.validate();
      this.$refs.jenis_kelamin.validate();
      this.$refs.pendidikan_terakhir.validate();
      this.$refs.nomor_telp.validate();
      this.$refs.provinsi.validate();
      this.$refs.kabupaten.validate();
      this.$refs.kecamatan.validate();
      this.$refs.kelurahan.validate();
      this.$refs.rt.validate();
      this.$refs.rw.validate();
      this.$refs.alamat.validate();

      if (
        this.$refs.nama.hasError &&
        this.$refs.nik.hasError &&
        this.$refs.tempat_lahir.hasError &&
        this.$refs.tanggal_lahir.hasError &&
        this.$refs.jenis_kelamin.hasError &&
        this.$refs.pendidikan_terakhir.hasError &&
        this.$refs.nomor_telp.hasError &&
        this.$refs.provinsi.hasError &&
        this.$refs.kabupaten.hasError &&
        this.$refs.kecamatan.hasError &&
        this.$refs.kelurahan.hasError &&
        this.$refs.rt.hasError &&
        this.$refs.rw.hasError &&
        this.$refs.alamat.hasError
      ) {
        this.formHasError = true;
      } else {
        this.$axios.post("/relawan/new", params).then(({ data }) => {
          let success = data.data.success;

          if (!success) {
            this.$q.dialog({
              color: "negative",
              message: "Terjadi kesalahan pada isian form",
              icon: "close",
            });
          } else {
            this.$q.dialog({
              color: "positive",
              message: "Data berhasil di simpan",
              icon: "cloud_upload",
            });
          }
        });
      }
    },
  },
};
</script>

<style lang="scss">
@import "src/css/text.scss";
@import "src/css/fonts.scss";
</style>
