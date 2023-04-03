<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="login">
    <el-dialog v-model="authDialogVisible" @close="closeDialog">
      <template v-if="authType === 'login'">
        <h2>Login</h2>
        <el-form>
          <el-form-item>
            <base-input
              v-model="ruleForm.username"
              placeholder="Username"
            ></base-input>
            <!-- <el-input
            placeholder="Username"
            v-model="ruleForm.username"
          ></el-input> -->
          </el-form-item>
          <el-form-item>
            <base-input
              v-model="ruleForm.password"
              placeholder="Password"
              type="password"
              show-password
            ></base-input>
          </el-form-item>
          <el-form-item>
            <p class="forgot-password" @click="toggleAuth('forgot-password')">
              Forgot password ?
            </p>
          </el-form-item>
          <el-form-item>
            <base-button>Continue</base-button>
          </el-form-item>
          <el-form-item>
            <el-divider content-position="center">Or</el-divider>
          </el-form-item>
          <el-form-item>
            <base-button :facebook="true">Continue with Facebook</base-button>
          </el-form-item>
          <el-form-item>
            <base-button :google="true">Continue with Google</base-button>
          </el-form-item>
          <el-form-item>
            <p class="no-account">
              Don’t have account yet?
              <span @click="toggleAuth('create-account')">Sign up</span>
            </p>
          </el-form-item>
        </el-form>
      </template>
      <ForgotPassword v-if="authType === 'forgot-password'" />
      <ResetPassword v-if="authType === 'reset-password'" />
      <CreateAccount v-if="authType === 'create-account'" />
      <CreateAccountEmail v-if="authType === 'create-account-email'" />
    </el-dialog>
  </div>
</template>

<script>
import ForgotPassword from "../forgot-password/ForgotPassword.vue";
import ResetPassword from "../forgot-password/ResetPassword.vue";
import CreateAccount from "@/components/register/CreateAccount.vue";
import CreateAccountEmail from "@/components/register/CreateAccountEmail.vue";

export default {
  components: {
    ForgotPassword,
    ResetPassword,
    CreateAccount,
    CreateAccountEmail,
  },
  data() {
    return {
      ruleForm: {
        username: "",
        password: "",
      },
    };
  },
  computed: {
    authDialogVisible() {
      return this.$store.getters.authDialogVisible;
    },
    authType() {
      return this.$store.getters.authType;
    },
  },
  methods: {
    closeDialog() {
      this.$store.commit("TOGGLE_AUTH_DIALOG", false);
      this.$store.commit("TOGGLE_AUTH_TYPE", "login");
    },
    toggleAuth(data) {
      this.$store.commit("TOGGLE_AUTH_TYPE", data);
    },
  },
};
</script>

<style scoped>
.login :deep(.el-dialog) {
  background: #ffffff;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.04);
  border-radius: 8px;
  width: 25rem;
}
.login :deep(.el-dialog .el-dialog__header) {
  display: none;
}

.login h2 {
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: -0.02em;
  color: #141414;
  margin-bottom: 1rem;
}

.login :deep(.el-input__wrapper) {
  background: #f5f5f5;
  border-radius: 8px;
  padding: 0.4rem 1rem;
}

.login p.forgot-password {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: -0.02em;
  color: #141414;
  text-align: center;
  width: 100%;
  cursor: pointer;
}

.login :deep(.el-divider__text) {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  color: #575d66;
}

.login p.no-account {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: #141414;
  text-align: center;
  width: 100%;
}
.login p.no-account span {
  font-weight: 700;
  color: #1c8b71;
  cursor: pointer;
}

@media screen and (max-width: 430px) {
  .login :deep(.el-dialog) {
    width: 90%;
  }
}
</style>