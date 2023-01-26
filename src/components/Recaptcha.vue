<template>
  <div :id="id"></div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default: "id-grecaptcha",
    },
  },
  mounted() {
    let recaptchaScript = document.createElement("script");
    recaptchaScript.setAttribute(
      "src",
      "https://www.google.com/recaptcha/api.js"
    );
    document.head.appendChild(recaptchaScript);

    setTimeout(() => {
      window.grecaptcha.render(this.id, {
        sitekey: "6LcIvQAkAAAAANNzNE_E3M24CjU1rhcvZiP_w8wy",
        callback: this.verifyRecaptcha,
      });
    }, 3000);
  },
  methods: {
    verifyRecaptcha(response) {
      this.$emit("on-validate", response);
    },
  },
};
</script>
