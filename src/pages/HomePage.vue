<template>
  <q-page class="flex flex-center q-pa-md bg-home">
    <div class="container">
      <div class="glass">
        <div class="text-center">
          <div class="text-3xl">DATA BNBA</div>
          <div class="text-lg">PEKERJA SOSIAL MASYARAKAT (PSM)</div>
        </div>

        <div class="q-pt-md">
          <div class="text-subtitle1 text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </div>
        </div>
      </div>

      <div class="text-center q-pt-md">
        <q-btn color="primary" label="isi formulir" @click="onclick" />
      </div>
    </div>

    <q-inner-loading :showing="isLoading">
      <q-spinner-bars size="50px" color="primary"></q-spinner-bars>
    </q-inner-loading>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
    };
  },
  methods: {
    onclick() {
      this.isLoading = true;

      this.$axios
        .post("/users/signin", {
          username: "guest",
          password: "justguest",
        })
        .then(({ data }) => {
          this.isLoading = false;
          let token = data.token;

          this.$q.cookies.set("token", token);

          this.$router.push("/form-bnba-psm");
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
</style>
