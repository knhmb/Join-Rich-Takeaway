<template>
  <div class="create-account-with-email">
    <img
      @click="toggleAuth('create-account')"
      src="../../assets/Arrow-Left.png"
      alt=""
    />
    <h2>{{ $t("create_account") }}</h2>
    <el-form :model="ruleForm" :rules="rules" ref="ruleFormRef">
      <el-form-item prop="username">
        <base-input
          v-model="ruleForm.username"
          :placeholder="$t('username')"
        ></base-input>
      </el-form-item>
      <el-form-item prop="displayName">
        <base-input
          v-model="ruleForm.displayName"
          :placeholder="$t('display_name')"
        ></base-input>
      </el-form-item>
      <el-form-item prop="email">
        <div class="with-text">
          <p @click="getOTP">{{ $t("send_otp") }}</p>
          <base-input
            v-model="ruleForm.email"
            :placeholder="$t('email')"
          ></base-input>
        </div>
      </el-form-item>
      <el-form-item prop="emailOTP">
        <base-input
          v-model="ruleForm.emailOTP"
          :placeholder="$t('email_otp')"
        ></base-input>
      </el-form-item>
      <el-form-item prop="password">
        <base-input
          type="password"
          show-password
          v-model="ruleForm.password"
          :placeholder="$t('password')"
        ></base-input>
      </el-form-item>
      <el-form-item prop="confirmPassword">
        <base-input
          type="password"
          show-password
          v-model="ruleForm.confirmPassword"
          :placeholder="$t('confirm_password')"
        ></base-input>
      </el-form-item>
      <el-form-item>
        <base-button @click="signUp">{{ $t("continue") }}</base-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { ElNotification } from "element-plus";

export default {
  data() {
    const validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Enter password!"));
      } else {
        if (this.ruleForm.confirmPassword !== "") {
          if (!this.$refs.ruleFormRef) return;
          this.$refs.ruleFormRef.validateField("confirmPassword", () => null);
        }
        callback();
      }
    };
    const validateConfirmPass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Please enter the password again."));
      } else if (value !== this.ruleForm.password) {
        callback(new Error("Passwords do not match!"));
      } else {
        callback();
      }
    };

    return {
      ruleForm: {
        username: "",
        displayName: "",
        email: "",
        emailOTP: "",
        password: "",
        confirmPassword: "",
      },
      rules: {
        username: [
          { required: true, message: "Username is required!", trigger: "blur" },
        ],
        password: [{ validator: validatePass, trigger: "blur" }],
        confirmPassword: [{ validator: validateConfirmPass, trigger: "blur" }],
        displayName: [
          { required: true, message: "Name is required!", trigger: "blur" },
        ],
        email: [
          { required: true, message: "Email is required!", trigger: "blur" },
          {
            type: "email",
            message: "Please input correct email address",
            trigger: ["blur", "change"],
          },
        ],
        emailOTP: [
          { required: true, message: "OTP is required!", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    toggleAuth(data) {
      this.$store.commit("TOGGLE_AUTH_TYPE", data);
    },
    signUp() {
      this.$refs.ruleFormRef.validate((valid) => {
        if (valid) {
          const data = {
            displayName: this.ruleForm.displayName,
            email: this.ruleForm.email,
            username: this.ruleForm.username,
            password: this.ruleForm.password,
            password2: this.ruleForm.confirmPassword,
            otp: this.ruleForm.emailOTP,
          };

          this.$store
            .dispatch("auth/signUp", data)
            .then(() => {
              ElNotification({
                title: "Success",
                message: "Account has been created!",
                type: "success",
              });
              this.$store.commit("TOGGLE_AUTH_TYPE", "login");
              this.$refs.ruleFormRef.resetFields();
            })
            .catch((err) => {
              ElNotification({
                title: "Error",
                message: err.response.data.message,
                type: "error",
              });
            });
        }
      });
    },
    getOTP() {
      this.$refs.ruleFormRef.validateField("email", (valid) => {
        if (valid) {
          this.$store
            .dispatch("auth/getOTP", { email: this.ruleForm.email })
            .then(() => {
              ElNotification({
                title: "Success",
                message: "OTP sent to your email",
                type: "success",
              });
            })
            .catch((err) => {
              ElNotification({
                title: "Error",
                message: err.response.data.message,
                type: "error",
              });
            });
        }
      });
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