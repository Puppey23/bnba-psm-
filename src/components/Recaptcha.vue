<template>
  <div></div>
</template>

<script>
export default {
  mounted() {
    let recaptchaScript = document.createElement("script");
    recaptchaScript.setAttribute(
      "src",
      "https://www.google.com/recaptcha/api.js?render=6LfPmvQjAAAAAHpC2mwyxsnT2FLPNQV3gITJku9M"
    );
    document.head.appendChild(recaptchaScript);
  },
};
</script>
