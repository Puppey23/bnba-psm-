<template>
  <q-dialog ref="dialogConfirm" persistent>
    <q-card style="width: 350px" padding>
      <q-card-section>
        <div class="text-h6 text-center">{{ message }}</div>
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
    message: {
      type: String,
    },
    items: {
      type: Object,
    },
  },
  mounted() {
    this.items;
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
