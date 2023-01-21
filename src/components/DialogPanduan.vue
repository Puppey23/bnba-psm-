<template>
  <q-dialog ref="dialogConfirm" persistent>
    <q-card style="width: 350px" padding>
      <q-card-section>
        <div class="text-2xl text-center">{{ title }}</div>

        <div class="q-mt-md text-sm">
          Pastikan akun sosial media anda tidak dalam status private
        </div>
      </q-card-section>

      <q-card-actions align="center">
        <q-btn color="negative" outline no-caps label="Batal" v-close-popup />

        <q-btn color="primary" no-caps label="Ya" @click="onActionConfirm" />
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
  methods: {
    show() {
      this.$refs.dialogConfirm.show();
    },
    hide() {
      this.$refs.dialogConfirm.hide();
    },
    onActionConfirm() {
      this.$emit("ok", this.items);

      this.hide();
    },
  },
};
</script>
