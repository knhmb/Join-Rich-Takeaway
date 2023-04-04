<template>
  <div class="forgot-password">
    <img
      @click="toggleAuth('login')"
      src="../../assets/Arrow-Left.png"
      alt=""
    />
    <h2>{{ $t("forgot_password") }}</h2>
    <el-form>
      <el-form-item>
        <base-input
          v-model="ruleForm.username"
          :placeholder="$t('username')"
        ></base-input>
      </el-form-item>
      <el-form-item>
        <base-input
          v-model="ruleForm.email"
          :placeholder="$t('email')"
        ></base-input>
      </el-form-item>
      <el-form-item>
        <base-button @click="toggleAuth('reset-password')">{{
          $t("continue")
        }}</base-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        username: "",
        email: "",
      },
    };
  },
  methods: {
    toggleAuth(data) {
      this.$store.commit("TOGGLE_AUTH_TYPE", data);
    },
  },
};
</script>

<style scoped>
.forgot-password h2 {
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: -0.02em;
  color: #141414;
  margin-bottom: 1rem;
}

.forgot-password img {
  width: 1.2rem;
  margin-bottom: 1rem;
  cursor: pointer;
}
</style>