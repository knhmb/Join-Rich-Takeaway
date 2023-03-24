<template>
  <div class="create-account-with-email">
    <img
      @click="toggleAuth('create-account')"
      src="../../assets/Arrow-Left.png"
      alt=""
    />
    <h2>Create Account</h2>
    <el-form>
      <el-form-item>
        <base-input
          v-model="ruleForm.username"
          placeholder="Username"
        ></base-input>
      </el-form-item>
      <el-form-item>
        <base-input
          v-model="ruleForm.displayName"
          placeholder="Display Name"
        ></base-input>
      </el-form-item>
      <el-form-item>
        <div class="with-text">
          <p>Send OTP</p>
          <base-input v-model="ruleForm.email" placeholder="Email"></base-input>
        </div>
      </el-form-item>
      <el-form-item>
        <base-input
          v-model="ruleForm.emailOTP"
          placeholder="Email OTP"
        ></base-input>
      </el-form-item>
      <el-form-item>
        <base-input
          v-model="ruleForm.password"
          placeholder="Password"
        ></base-input>
      </el-form-item>
      <el-form-item>
        <base-input
          v-model="ruleForm.confirmPassword"
          placeholder="Confirm Password"
        ></base-input>
      </el-form-item>
      <el-form-item>
        <base-button>Continue</base-button>
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
        displayName: "",
        email: "",
        emailOTP: "",
        password: "",
        confirmPassword: "",
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
.create-account-with-email img {
  width: 1.2rem;
  margin-bottom: 1rem;
  cursor: pointer;
}

.create-account-with-email h2 {
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: -0.02em;
  color: #141414;
  margin-bottom: 1rem;
}

.create-account-with-email div.with-text {
  position: relative;
  width: 100%;
}

.create-account-with-email div.with-text p {
  position: absolute;
  top: 50%;
  right: 1rem;
  transform: translateY(-50%);
  z-index: 1;
  cursor: pointer;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.03em;
  color: #1c8b71;
}

.create-account-with-email div.with-text :deep(.el-input__wrapper) {
  padding-right: 5rem;
}
</style>