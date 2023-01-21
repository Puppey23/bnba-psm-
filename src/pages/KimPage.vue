<template>
  <q-page class="flex flex-center q-pa-md">
    <div class="container">
      <intro-kim @on-click="onclick" />
    </div>

    <q-inner-loading :showing="isLoading">
      <q-spinner-bars size="50px" color="primary"></q-spinner-bars>
    </q-inner-loading>
  </q-page>
</template>

<script>
import IntroKim from "src/components/intro/IntroKim.vue";

export default {
  components: { IntroKim },
  data() {
    return {
      isLoading: false,
    };
  },
  computed: {
    metaTitle() {
      return "KELOMPOK INFORMASI MASYARAKAT (KIM)";
    },
  },
  meta() {
    return {
      title: this.metaTitle,
    };
  },
  methods: {
    onclick() {
      this.$q.notify({
        message: "cooming soon",
        color: "info",
        actions: [{ icon: "close", color: "white" }],
      });
      // this.isLoading = true;
      // this.$axios
      //   .post("/users/signin", {
      //     username: "guest",
      //     password: "justguest",
      //   })
      //   .then(({ data }) => {
      //     this.isLoading = false;
      //     let token = data.token;

      //     this.$q.cookies.set("token", token);
      //     this.$router.push("/form-page");
      //   })
      //   .catch((e) => {
      //     this.isLoading = false;
      //   });
    },
  },
};
</script>

<style lang="scss">
@import "src/css/text.scss";
@import "src/css/fonts.scss";
</style>
