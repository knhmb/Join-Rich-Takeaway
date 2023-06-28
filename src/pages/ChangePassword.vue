<template>
  <section class="change-password">
    <base-card>
      <h4>{{ $t("change_password") }}</h4>
      <el-form label-position="top" :model="ruleForm" :rules="rules" ref="ruleFormRef" hide-required-asterisk>
        <el-form-item :label="$t('old_password')" prop="oldPassword">
          <base-input
            type="password"
            v-model="ruleForm.oldPassword"
          ></base-input>
        </el-form-item>
        <el-form-item :label="$t('new_password')" prop="newPassword">
          <base-input
            type="password"
            v-model="ruleForm.newPassword"
          ></base-input>
        </el-form-item>
        <el-form-item :label="$t('confirm_new_password')" prop="confirmNewPassword">
          <base-input
            type="password"
            v-model="ruleForm.confirmNewPassword"
          ></base-input>
        </el-form-item>
        <el-form-item>
          <base-button @click="update">{{ $t("save") }}</base-button>
        </el-form-item>
      </el-form>
    </base-card>
  </section>
</template>
  
<script>
import { ElNotification } from 'element-plus';

export default {
  data() {

    const validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error(this.$t('new_password_required')));
      } else {
        if (this.ruleForm.confirmNewPassword !== "") {
          if (!this.$refs.ruleFormRef) return;
          this.$refs.ruleFormRef.validateField("confirmNewPassword", () => null);
        }
        callback();
      }
    };
    const validateConfirmPass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Please enter the password again."));
      } else if (value !== this.ruleForm.newPassword) {
        callback(new Error("Passwords do not match!"));
      } else {
        callback();
      }
    };

    return {
      ruleForm: {
        oldPassword: "",
        newPassword: "",
        confirmNewPassword: "",
      },
      rules: {
        oldPassword: [
          {required: true, message: this.$t('old_password_required'), trigger: 'blur'}
        ],
        newPassword: [
          {required: true, validator: validatePass, trigger: 'blur'}
        ],
        confirmNewPassword: [
          {required: true, validator: validateConfirmPass, trigger: 'blur'}
        ],
      }
    };
  },
  computed: {
    currentUser() {
      return this.$store.getters['auth/currentUser']
    }
  },
  methods: {
    update() {
      this.$refs.ruleFormRef.validate(valid => {
        if(valid) {
          const data = {
            password: this.ruleForm.newPassword,
            password2: this.ruleForm.confirmNewPassword,
          }
          this.$store.dispatch('auth/updateUser', {data, id: this.currentUser.id}).then(() => {
            ElNotification({
              title: 'Success',
              message: this.$t('data_updated'),
              type: 'success'
            })
            this.$refs.ruleFormRef.resetFields()
          }).catch(err => {
            ElNotification({
              title: 'Error',
              message: err.response.data.message,
              type: 'error'
            })
          })
        }
      })
    }
  }
};
</script>
  
  <style scoped>
.change-password .card {
  padding: 2rem 1.5rem;
}

.change-password h4 {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: #141414;
  margin-bottom: 1rem;
}

.change-password :deep(.el-form-item__label) {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: rgba(20, 20, 20, 0.6);
  margin-bottom: 0.3rem !important;
}
.change-password .el-button {
  width: 6rem;
  padding-top: 1.4rem;
  padding-bottom: 1.4rem;
}
</style>