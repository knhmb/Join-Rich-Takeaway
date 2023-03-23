<template>
  <div class="reset-password">
    <img
      @click="toggleAuth('forgot-password')"
      src="../../assets/Arrow-Left.png"
      alt=""
    />
    <h2>Reset Password</h2>
    <el-form>
      <el-form-item>
        <base-input
          v-model="ruleForm.newPassword"
          placeholder="New Password"
        ></base-input>
      </el-form-item>
      <el-form-item>
        <base-input
          v-model="ruleForm.confirmNewPassword"
          placeholder="Confirm New Password"
        ></base-input>
      </el-form-item>
      <el-form-item>
        <base-button>Reset Password</base-button>
      </el-form-item>
    </el-form>
  </div>
</template>
  
  <script>
export default {
  data() {
    return {
      ruleForm: {
        newPassword: "",
        confirmNewPassword: "",
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
.reset-password h2 {
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: -0.02em;
  color: #141414;
  margin-bottom: 1rem;
}

.reset-password img {
  width: 1.2rem;
  margin-bottom: 1rem;
  cursor: pointer;
}
</style>