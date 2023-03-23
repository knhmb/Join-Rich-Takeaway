<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="home">Home</section>
</template>

<script>
export default {
  created() {
    this.$store.commit("TOGGLE_AUTH_TYPE", "login");
  },
};
</script>