<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="e-wallet">
    <base-card>
      <h3>{{ $t("e-wallet") }}</h3>
      <p>HK$ {{ currentUser.eWallet }}</p>
      <base-button>{{ $t("topup") }}</base-button>
    </base-card>
  </section>
</template>

<script>
  export default {
    computed: {
      currentUser() {
        return this.$store.getters['auth/currentUser']
      }
    }
  }
</script>

<style scoped>
.e-wallet .card {
  padding: 2rem 1.5rem;
}

.e-wallet h3 {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: #141414;
}

.e-wallet p {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: #141414;
  margin: 1rem 0;
}

.e-wallet .el-button {
  width: 6rem;
  padding-top: 1.4rem;
  padding-bottom: 1.4rem;
}
</style>