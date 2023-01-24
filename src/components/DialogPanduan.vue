<template>
  <q-dialog ref="dialogConfirm" persistent>
    <q-card padding>
      <q-card-section>
        <div class="text-xl text-center">Panduan Pengisian {{ title }}</div>

        <div class="q-mt-md font-semibold text-center">
          Pastikan akun sosial media anda tidak dalam status private
        </div>
      </q-card-section>

      <!-- Start section Facebook -->
      <q-card-section class="q-pt-none" v-if="title === 'Facebook'">
        <div>
          Anda bisa melihat link Profil Facebook sendiri dengan menggunakan
          aplikasi di smartphone, berikut caranya :
        </div>
        <ul>
          <li>Login ke akun Facebook Anda</li>
          <li>
            Kemudian masuk ke profil Anda dan klik tombol tiga titik sejajar
          </li>
          <li>
            Lalu scroll ke bagian paling bawah kemudian Anda akan melihat contoh
            link "https://www.facebook.com/agus_gumelar"
          </li>
          <li>Salin link tersebut dengan menekan tombol Salin Tautan</li>
          <li>
            Kemudian masukan link tersebut pada textbox yang telah disediakan
          </li>
        </ul>
      </q-card-section>

      <q-card-section class="q-pt-none" v-if="title === 'Facebook'">
        <div class="row">
          <div class="col-12 col-md">
            <img
              src="~assets/fb-smartphone/profil.jpeg"
              class="img-profil-fb"
            />
          </div>
          <div class="col-12 col-md">
            <div class="text-center">
              <img
                src="~assets/fb-smartphone/pengaturan-profil.jpeg"
                class="img-pengaturan-fb"
              />
            </div>
          </div>
        </div>
      </q-card-section>
      <!-- End section Facebook -->

      <!-- Start section Twitter -->
      <q-card-section class="q-pt-none" v-if="title === 'Twitter'">
        <div>
          Anda bisa melihat link Profil Twitter sendiri dengan menggunakan
          aplikasi di smartphone, berikut caranya :
        </div>
        <ul>
          <li>Login ke akun Twitter Anda</li>
          <li>Kemudian klik foto profil di pojok kiri atas</li>
          <li>
            Lalu dibawah Nama Twitter Anda akan menampilkan username Twitter
            Anda, contoh "@blablabla"
          </li>
          <li>
            Kemudian masukan username tersebut pada textbox yang telah
            disediakan
          </li>
        </ul>
      </q-card-section>

      <q-card-section class="q-pt-none" v-if="title === 'Twitter'">
        <div class="row">
          <div class="col-12 col-md">
            <img src="~assets/twitter/profil.png" class="img-profil-twitter" />
          </div>

          <div class="col-12 col-md">
            <img
              src="~assets/twitter/username.png"
              class="img-username-twitter"
            />
          </div>
        </div>
      </q-card-section>
      <!-- End section Twitter -->

      <!-- Start section Instagram -->
      <q-card-section class="q-pt-none" v-if="title === 'Instagram'">
        <div>
          Anda bisa melihat link Profil Instagram sendiri dengan menggunakan
          aplikasi di smartphone, berikut caranya :
        </div>
        <ul>
          <li>Login ke akun Instagram Anda</li>
          <li>Kemudian klik foto profil di pojok kanan bawah</li>
          <li>
            Lalu di pojok kiri atas terdapat username anda contoh "agus.gumelar"
          </li>
          <li>
            Kemudian masukan username tersebut pada textbox yang telah
            disediakan
          </li>
        </ul>
      </q-card-section>

      <q-card-section class="q-pt-none" v-if="title === 'Instagram'">
        <div class="row">
          <div class="col-12 col-md">
            <img src="~assets/instagram/profile.png" class="img-username-ig" />
          </div>

          <div class="col-12 col-md">
            <img src="~assets/instagram/username.png" class="img-username-ig" />
          </div>
        </div>
      </q-card-section>
      <!-- End section Instagram -->

      <!-- Start section Tiktok -->
      <q-card-section class="q-pt-none" v-if="title === 'Tiktok'">
        <div>
          Anda bisa melihat link Profil Tiktok sendiri dengan menggunakan
          aplikasi di smartphone, berikut caranya :
        </div>
        <ul>
          <li>Login ke akun Tiktok Anda</li>
          <li>Kemudian klik Foto Profil sebelah kanan bawah</li>
          <li>Lalu pilih Edit Profil</li>
          <li>
            Untuk melihat tautan TikTok akun pribadi, kamu bisa mengecek tautan
            tepat di bawah nama pengguna akun pribadi Anda
          </li>
          <li>
            Kemudian masukan username tersebut pada textbox yang telah
            disediakan
          </li>
        </ul>
      </q-card-section>

      <q-card-section class="q-pt-none" v-if="title === 'Tiktok'">
        <div class="row">
          <div class="col-12 col-md">
            <img src="~assets/tiktok/menu-tiktok.png" class="img-menu-tiktok" />
          </div>

          <div class="col-12 col-md">
            <img
              src="~assets/tiktok/edit-profile.png"
              class="img-menu-tiktok"
            />
          </div>
        </div>

        <div class="row">
          <div class="col-12 col-md">
            <img
              src="~assets/tiktok/nama-pengguna.jpeg"
              class="img-menu-tiktok"
            />
          </div>
        </div>
      </q-card-section>

      <q-card-actions align="center">
        <q-btn color="negative" outline no-caps label="Tutup" v-close-popup />

        <!-- <q-btn color="primary" no-caps label="Ya" @click="onActionConfirm" /> -->
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
    },
  },
  data() {
    return {
      username: "",
    };
  },
  methods: {
    show() {
      this.$refs.dialogConfirm.show();
    },
    hide() {
      this.$refs.dialogConfirm.hide();
    },
    // onActionConfirm() {
    //   this.$emit("ok");

    //   this.hide();
    // },
  },
};
</script>
