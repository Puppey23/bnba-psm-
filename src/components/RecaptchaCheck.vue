<template>
  <div id="g-recaptcha-check"></div>
</template>

<script>
export default {
  mounted() {
    let recaptchaScript = document.createElement("script");
    recaptchaScript.setAttribute(
      "src",
      "https://www.google.com/recaptcha/api.js"
    );
    document.head.appendChild(recaptchaScript);

    setTimeout(() => {
      window.grecaptcha.render("g-recaptcha-check", {
        sitekey: "6LcIvQAkAAAAANNzNE_E3M24CjU1rhcvZiP_w8wy",
        callback: this.verifyRecaptcha,
      });
    }, 1000);
  },
  methods: {
    verifyRecaptcha(response) {
      this.$emit("on-validate", response);
    },
  },
};
</script>
