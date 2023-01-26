<template>
  <q-card>
    <q-card-section class="q-pb-xs">
      <div class="text-2xl">Periksa Data</div>
    </q-card-section>

    <q-separator inset />

    <q-card-section class="q-pt-md">
      <div class="row q-col-gutter-md items-center">
        <div class="col-md-8 col-xs-8 col-sm-8">
          <q-input outlined placeholder="NIK" v-model="nik">
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </div>

        <div class="col-md-1 col-xs col-sm">
          <q-btn outline color="primary" label="Periksa" @click="onCheck" />
        </div>

        <div class="col-md-2">
          <recaptcha
            @on-validate="onValidateCaptchaCheck"
            id="grecaptcha-check"
          />
          <div v-if="grecaptchaCheck.error" class="text-red font-semibold">
            Pastikan anda bukan robot
          </div>
        </div>
      </div>
    </q-card-section>

    <q-card-section v-if="serverData" class="q-pt-none">
      <q-list bordered>
        <q-item>
          <q-item-section>
            <div class="row">
              <div class="col-12 col-md">
                <div class="row">
                  <div class="col">Nama</div>
                  <div class="col">{{ serverData.nama }}</div>
                </div>

                <div class="row">
                  <div class="col">NIK</div>
                  <div class="col">{{ serverData.nik }}</div>
                </div>

                <div class="row">
                  <div class="col">Jenis Kelamin</div>
                  <div class="col">
                    {{
                      serverData.jenis_kelamin === "L"
                        ? "Laki - laki"
                        : "Perempuan"
                    }}
                  </div>
                </div>
              </div>

              <div class="col-12 col-md">
                <div class="row">
                  <div class="col">Provinsi</div>
                  <div class="col">{{ serverData.provinsi }}</div>
                </div>

                <div class="row">
                  <div class="col">Kota/Kabupaten</div>
                  <div class="col">{{ serverData.kota_kabupaten }}</div>
                </div>

                <div class="row">
                  <div class="col">Kecamatan</div>
                  <div class="col">{{ serverData.kecamatan }}</div>
                </div>

                <div class="row">
                  <div class="col">Kelurahan/Desa</div>
                  <div class="col">{{ serverData.kelurahan_desa }}</div>
                </div>
              </div>
            </div>
          </q-item-section>
        </q-item>
      </q-list>

      <q-inner-loading :showing="visible">
        <q-spinner-bars color="primary" size="2em" />
      </q-inner-loading>
    </q-card-section>
  </q-card>
</template>

<script>
import Recaptcha from "./Recaptcha.vue";
export default {
  components: {
    Recaptcha,
  },
  data() {
    return {
      nik: "",
      visible: false,
      serverData: null,
      grecaptchaCheck: {
        error: false,
        response: null,
      },
    };
  },
  methods: {
    onCheck() {
      this.grecaptchaCheck.error = false;

      if (!this.grecaptchaCheck.response) {
        return (this.grecaptchaCheck.error = true);
      } else {
        this.submit();
      }
    },
    submit() {
      this.visible = true;
      this.$axios
        .post("/relawan/getonebynik", {
          nik: this.nik,
        })
        .then(({ data }) => {
          this.serverData = data.data;
          let success = data.success;

          if (success == true) {
            this.$q.notify({
              message: "Data ditemukan",
              color: "positive",
              icon: "how_to_reg",
            });

            this.visible = false;
          } else {
            this.$q.notify({
              message: "Data tidak ditemukan",
              color: "negative",
              icon: "close",
            });

            this.visible = false;
          }
        });
    },
    onValidateCaptchaCheck(response) {
      this.grecaptchaCheck.response = response;
    },
  },
};
</script>
