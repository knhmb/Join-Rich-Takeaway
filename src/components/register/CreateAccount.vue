<template>
  <div class="create-account">
    <img
      @click="toggleAuth('login')"
      src="../../assets/Arrow-Left.png"
      alt=""
    />
    <h2>{{ $t("create_account") }}</h2>
    <el-form-item>
      <base-button :icon="true" @click="toggleAuth('create-account-email')">{{
        $t("email")
      }}</base-button>
    </el-form-item>
    <el-form-item>
      <el-divider content-position="center">{{ $t("or") }}</el-divider>
    </el-form-item>
    <el-form-item>
      <base-button :facebook="true">{{ $t("continue_facebook") }}</base-button>
    </el-form-item>
    <el-form-item>
      <base-button :google="true">{{ $t("continue_google") }}</base-button>
    </el-form-item>
  </div>
</template>

<script>
export default {
  methods: {
    toggleAuth(data) {
      this.$store.commit("TOGGLE_AUTH_TYPE", data);
    },
  },
};
</script>

<style scoped>
.create-account img {
  width: 1.2rem;
  margin-bottom: 1rem;
  cursor: pointer;
}

.create-account h2 {
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: -0.02em;
  color: #141414;
  margin-bottom: 1rem;
}

.create-account :deep(.el-divider__text) {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  color: #575d66;
}
</style>