<template>
  <q-page class="q-pa-md">
    <div class="container">
      <q-card>
        <q-card-section class="bg-primary">
          <q-item>
            <q-item-section class="text-center">
              <q-item-label class="text-white text-lg">
                FORM DATA
              </q-item-label>
              <q-item-label class="text-white text-3xl">
                KELOMPOK INFORMASI MASYARAKAT
              </q-item-label>
            </q-item-section>
          </q-item>
        </q-card-section>

        <q-card-section>
          <div class="row q-col-gutter-sm">
            <div class="col-12 col-md">
              <div class="text-sm font-semibold">
                Nama <span class="text-red">*</span>
              </div>
              <q-input
                ref="nama"
                outlined
                lazy-rules
                v-model="form.nama"
                :disable="disableForm"
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
                :disable="disableForm"
                :rules="[
                  (val) => (val && val.length > 0) || 'Wajib diisi',
                  (val) =>
                    (val && val.length == 16) ||
                    'Tolong masukan 16 digit nomor',
                ]"
              />
            </div>
          </div>

          <div class="row q-col-gutter-sm">
            <div class="col-12 col-md">
              <div class="text-sm font-semibold">
                Tempat Lahir <span class="text-red">*</span>
              </div>
              <q-input
                ref="tempat_lahir"
                outlined
                v-model="form.tempatLahir"
                lazy-rules
                :disable="disableForm"
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
                :disable="disableForm"
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

          <div class="row q-col-gutter-sm">
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
                :disable="disableForm"
                :rules="[(val) => (val && val.length > 0) || 'Wajib diisi']"
              />
            </div>

            <div class="col-12 col-md">
              <div class="text-sm font-semibold">
                Pendidikan Terakhir <span class="text-red">*</span>
              </div>
              <q-input
                ref="pendidikan_terakhir"
                outlined
                v-model="form.pendidikanTerakhir"
                lazy-rules
                :disable="disableForm"
                :rules="[(val) => (val && val.length > 0) || 'Wajib diisi']"
              />
            </div>
          </div>

          <div class="row q-col-gutter-sm">
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
                :disable="disableForm"
                :rules="[(val) => (val && val.length > 0) || 'Wajib diisi']"
              />
            </div>

            <div class="col-12 col-md">
              <div class="text-sm font-semibold">Email</div>
              <q-input outlined v-model="form.email" :disable="disableForm" />
            </div>
          </div>

          <div class="row">
            <div class="col-12 col-md">
              <div class="text-sm font-semibold">
                Alamat <span class="text-red">*</span>
              </div>
              <q-input
                ref="alamat"
                outlined
                v-model="form.alamat"
                lazy-rules
                :disable="disableForm"
                :rules="[(val) => (val && val.length > 0) || 'Wajib diisi']"
              />
            </div>
          </div>

          <div class="row q-col-gutter-sm">
            <div class="col-12 col-md">
              <div class="text-sm font-semibold">
                Provinsi <span class="text-red">*</span>
              </div>
              <q-select
                ref="provinsi"
                outlined
                use-input
                option-label="nama"
                option-value="id"
                v-model="form.prov"
                :options="optionProvinsi"
                @input="onSelectKab"
                @filter="filterProvinsi"
                :loading="loadingProv"
                lazy-rules
                :disable="disableForm"
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
                Kota/Kabupaten <span class="text-red">*</span>
              </div>
              <q-select
                ref="kabupaten"
                outlined
                use-input
                option-label="nama"
                option-value="id"
                v-model="form.kab"
                :options="optionKabupaten"
                @input="onSelectKec"
                @filter="filterKabupaten"
                :loading="loadingKab"
                lazy-rules
                :disable="disableForm"
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

          <div class="row q-col-gutter-sm">
            <div class="col-12 col-md">
              <div class="text-sm font-semibold">
                Kecamatan <span class="text-red">*</span>
              </div>
              <q-select
                ref="kecamatan"
                outlined
                use-input
                option-label="nama"
                option-value="id"
                v-model="form.kec"
                :options="optionKec"
                @input="onSelectKel"
                @filter="filterkecamatan"
                :loading="loadingKec"
                lazy-rules
                :disable="disableForm"
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
                Kelurahan/Desa <span class="text-red">*</span>
              </div>
              <q-select
                ref="kelurahan"
                outlined
                use-input
                option-label="nama"
                option-value="id"
                v-model="form.kel"
                :options="optionKel"
                :loading="loadingKel"
                @filter="filterKelurahan"
                lazy-rules
                :disable="disableForm"
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

            <div class="col-12 col-md-3">
              <div class="row q-gutter-sm">
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
                    :disable="disableForm"
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
                    :disable="disableForm"
                    :rules="[(val) => (val && val.length > 0) || 'Wajib diisi']"
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="row q-col-gutter-sm">
            <div class="col-12 col-md">
              <div class="text-sm font-semibold">Facebook</div>
              <q-input
                outlined
                v-model="form.facebook"
                :disable="disableForm"
              />
            </div>

            <div class="col-12 col-md">
              <div class="text-sm font-semibold">Twitter</div>
              <q-input outlined v-model="form.twitter" :disable="disableForm" />
            </div>

            <div class="col-12 col-md">
              <div class="text-sm font-semibold">Instagram</div>
              <q-input
                outlined
                v-model="form.instagram"
                :disable="disableForm"
              />
            </div>

            <div class="col-12 col-md">
              <div class="text-sm font-semibold">Tiktok</div>
              <q-input outlined v-model="form.tiktok" :disable="disableForm" />
            </div>
          </div>

          <div class="row q-pt-md">
            <div
              class="text-xs text-blue font-bold cursor-pointer"
              @click="onShowPanduan"
            >
              Panduan Pengisian Sosial Media
            </div>
          </div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <div class="q-pb-sm">
            <recaptcha @on-validate="onValidateCaptcha" />
          </div>

          <div v-if="grecaptcha.error">
            <div class="text-red font-semibold">Pastikan anda bukan robot</div>
          </div>

          <q-btn
            v-if="disableForm == false"
            class="full-width"
            color="primary"
            label="Submit"
            @click="onSubmit"
          />

          <q-btn
            v-if="disableForm == true"
            class="full-width"
            color="primary"
            label="Tambah Baru"
            @click="onTambah"
          />
        </q-card-section>
      </q-card>

      <div class="q-pt-md">
        <data-check />
      </div>
    </div>
  </q-page>
</template>

<script>
import DataCheck from "src/components/DataCheck.vue";
import DialogConfirm from "src/components/DialogConfirm.vue";
import DialogNotify from "src/components/DialogNotify.vue";
import DialogPanduan from "src/components/DialogPanduan.vue";
import Recaptcha from "src/components/Recaptcha.vue";

export default {
  components: {
    DataCheck,
    Recaptcha,
  },
  data() {
    return {
      disableForm: false,
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
      optionProvinsiFilter: [],
      optionKabupaten: [],
      optionKabupatenFilter: [],
      optionKec: [],
      optionKecFilter: [],
      optionKel: [],
      optionKelFilter: [],
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
      grecaptcha: {
        error: false,
        response: null,
      },
    };
  },
  mounted() {
    this.getDataProvinsi();
  },
  methods: {
    verifyMethod(response) {
      this.grecaptcha.response = response;
    },
    onShowPanduan() {
      this.$q.dialog({
        title: "Panduan Pengisian",
        component: DialogPanduan,
        parent: this,
        persisntent: true,
      });
    },
    filterProvinsi(val, update) {
      if (val === "") {
        update(() => {
          this.optionProvinsi = [...this.optionProvinsiFilter];
        });
        return;
      }

      update(() => {
        const needle = val.toLowerCase();
        this.optionProvinsi = this.optionProvinsiFilter.filter(
          (v) => v.nama.toLowerCase().indexOf(needle) > -1
        );
      });
    },
    filterKabupaten(val, update) {
      if (val === "") {
        update(() => {
          this.optionKabupaten = [...this.optionKabupatenFilter];
        });
        return;
      }

      update(() => {
        const needle = val.toLowerCase();
        this.optionKabupaten = this.optionKabupatenFilter.filter(
          (v) => v.nama.toLowerCase().indexOf(needle) > -1
        );
      });
    },
    filterkecamatan(val, update) {
      if (val === "") {
        update(() => {
          this.optionKec = [...this.optionKecFilter];
        });
        return;
      }

      update(() => {
        const needle = val.toLowerCase();
        this.optionKec = this.optionKecFilter.filter(
          (v) => v.nama.toLowerCase().indexOf(needle) > -1
        );
      });
    },
    filterKelurahan(val, update) {
      if (val === "") {
        update(() => {
          this.optionKel = [...this.optionKelFilter];
        });
        return;
      }

      update(() => {
        const needle = val.toLowerCase();
        this.optionKel = this.optionKelFilter.filter(
          (v) => v.nama.toLowerCase().indexOf(needle) > -1
        );
      });
    },
    getDataProvinsi() {
      this.loadingProv = true;

      this.$axios.post("provinsi/showall").then(({ data }) => {
        this.loadingProv = false;
        this.optionProvinsiFilter = data.data;
      });
    },
    onSelectKab() {
      let idProv = this.form.prov.id;
      this.loadingKab = true;

      this.$axios.post("/kabkot/showall").then(({ data }) => {
        this.loadingKab = false;
        let dataKab = data.data.filter((i) => i.provinsi_id == idProv);

        this.optionKabupatenFilter = dataKab;
      });
    },
    onSelectKec() {
      let idKab = this.form.kab.id;
      this.loadingKec = true;

      this.$axios.post("/kecamatan/showall").then(({ data }) => {
        this.loadingKec = false;
        let dataKec = data.data.filter((i) => i.kabkot_id == idKab);

        this.optionKecFilter = dataKec;
      });
    },
    onSelectKel() {
      let idKec = this.form.kec.id;
      this.loadingKel = true;

      this.$axios.post("/kelurahan/showall").then(({ data }) => {
        this.loadingKel = false;
        let dataKel = data.data.filter((i) => i.kecamatan_id == idKec);

        this.optionKelFilter = dataKel;
      });
    },
    onSubmit() {
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
        this.$refs.nama.hasError ||
        this.$refs.nik.hasError ||
        this.$refs.tempat_lahir.hasError ||
        this.$refs.tanggal_lahir.hasError ||
        this.$refs.jenis_kelamin.hasError ||
        this.$refs.pendidikan_terakhir.hasError ||
        this.$refs.nomor_telp.hasError ||
        this.$refs.provinsi.hasError ||
        this.$refs.kabupaten.hasError ||
        this.$refs.kecamatan.hasError ||
        this.$refs.kelurahan.hasError ||
        this.$refs.rt.hasError ||
        this.$refs.rw.hasError ||
        this.$refs.alamat.hasError
      ) {
        this.formHasError = true;
      } else {
        this.captcha = true;

        let form = this.form;

        let formattedNoTelp = form.noTelp;

        if (form.noTelp.slice(0, 1) == "0") {
          formattedNoTelp = "62" + form.noTelp.substring(1);
        } else if (form.noTelp.slice(0, 2) == "62") {
          formattedNoTelp = "62" + form.noTelp.substring(2);
        } else {
          formattedNoTelp = "62" + form.noTelp;
        }

        let items = {
          nama: form.nama.toUpperCase(),
          nik: form.nik,
          tempat_lahir: form.tempatLahir.toUpperCase(),
          tanggal_lahir: form.tanggalLahir,
          jenis_kelamin: form.jenisKelamin,
          pendidikan_akhir: form.pendidikanTerakhir.toUpperCase(),
          nomor_telepon: formattedNoTelp,
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
          alamat: form.alamat.toUpperCase(),
        };

        this.$q
          .dialog({
            message: "Pastikan data yang telah diisi telah sesuai",
            component: DialogConfirm,
            parent: this,
            items: items,
            persistent: true,
          })
          .onOk((data) => {
            this.grecaptcha.error = false;

            if (!this.grecaptcha.response) {
              return (this.grecaptcha.error = true);
            }

            this.confirmSubmit(data);
          });
      }
    },
    confirmSubmit(data) {
      this.$axios.post("/relawan/new", data).then(({ data }) => {
        let success = data.success;
        if (success == true) {
          this.disableForm = true;
          setTimeout(() => {
            this.$q.dialog({
              title: "Sukses",
              message: "Data berhasil disimpan",
              component: DialogNotify,
              parent: this,
            });
          }, 3000);
        } else {
          this.disableForm = false;
          setTimeout(() => {
            this.$q.dialog({
              title: "Gagal",
              message: "Data tidak berhasil disimpan",
              component: DialogNotify,
              parent: this,
            });
          }, 3000);
        }
      });
    },
    onValidateCaptcha(response) {
      this.grecaptcha.response = response;
    },
    onTambah() {
      this.disableForm = false;

      this.form = {
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
      };

      this.$refs.nama.resetValidation();
      this.$refs.nik.resetValidation();
      this.$refs.tempat_lahir.resetValidation();
      this.$refs.tanggal_lahir.resetValidation();
      this.$refs.jenis_kelamin.resetValidation();
      this.$refs.pendidikan_terakhir.resetValidation();
      this.$refs.nomor_telp.resetValidation();
      this.$refs.provinsi.resetValidation();
      this.$refs.kabupaten.resetValidation();
      this.$refs.kecamatan.resetValidation();
      this.$refs.kelurahan.resetValidation();
      this.$refs.rt.resetValidation();
      this.$refs.rw.resetValidation();
      this.$refs.alamat.resetValidation();
    },
  },
};
</script>

<style lang="scss">
@import "src/css/text.scss";
@import "src/css/fonts.scss";
</style>
