<template>
  <q-page class="flex flex-center q-pa-md">
    <div class="container">
      <intro-psm @on-click="onClick" />
    </div>

    <q-inner-loading :showing="isLoading">
      <q-spinner-bars size="50px" color="primary"></q-spinner-bars>
    </q-inner-loading>
  </q-page>
</template>

<script>
import IntroPsm from "src/components/intro/IntroPsm.vue";

export default {
  components: { IntroPsm },
  data() {
    return {
      isLoading: false,
    };
  },
  computed: {
    metTitle() {
      return "PEKERJA SOSIAL MASYARAKAT (PSM)";
    },
  },
  meta() {
    return {
      title: this.metTitle,
    };
  },
  methods: {
    onClick() {
      this.isLoading = true;
      this.$axios
        .post("/users/signin", {
          username: "psm",
          password: "Psm_20_23",
        })
        .then(({ data }) => {
          this.isLoading = false;
          let token = data.token;

          this.$q.cookies.set("token", token);
          this.$router.push("/form-psm");
        })
        .catch((e) => {
          this.isLoading = false;
        });
    },
  },
};
</script>

<style lang="scss">
@import "src/css/text.scss";
@import "src/css/fonts.scss";
</style>
