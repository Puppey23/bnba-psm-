<template>
  <q-dialog ref="dialogNotify">
    <q-card>
      <q-card-section
        class="row items-center"
        :class="
          title === 'Sukses' ? 'bg-positive text-white' : 'bg-red-6 text-white'
        "
      >
        <div class="text-xl">{{ title }}</div>
      </q-card-section>

      <q-card-section>
        <div class="text-base text-center">{{ message }}</div>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn color="primary" no-caps label="Tutup" v-close-popup />
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
    message: {
      type: String,
    },
  },
  methods: {
    show() {
      this.$refs.dialogNotify.show();
    },
    hide() {
      this.$refs.dialogNotify.hide();
    },
  },
};
</script>

<style lang="scss">
@import "src/css/text.scss";
@import "src/css/fonts.scss";
</style>
