<template>
  <section class="personal-information">
    <base-card>
      <h4>{{ $t("personal_information") }}</h4>
      <el-form label-position="top" :model="ruleForm" :rules="rules" ref="ruleFormRef" hide-required-asterisk>
        <el-form-item :label="$t('username')" prop="username">
          <base-input v-model="ruleForm.username"></base-input>
        </el-form-item>
        <el-form-item :label="$t('display_name')" prop="displayName">
          <base-input v-model="ruleForm.displayName"></base-input>
        </el-form-item>
        <el-form-item :label="$t('email')" prop="email">
          <base-input disabled v-model="ruleForm.email"></base-input>
        </el-form-item>
        <el-form-item :label="$t('phone')" prop="phone">
          <base-input v-model="ruleForm.phone"></base-input>
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
    return {
      ruleForm: {
        username: "chantaiman1234",
        displayName: "Tai Man",
        email: "chantaiman@email.com",
        phone: "98761234",
      },
      rules: {
        username: [
          {required: true, message: this.$t('username_required'), trigger: 'blur'}
        ],
        displayName: [
          {required: true, message: this.$t('name_required'), trigger: 'blur'}
        ],
        email: [
          {required: true, message: this.$t('email_required'), trigger: 'blur'},
          {type: 'email', message: this.$t('email_format'), trigger: 'blur'}
        ],
        phone: [
          {required: false, trigger: 'blur'}
        ]
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
            username: this.ruleForm.username,
            displayName: this.ruleForm.displayName,
            email: this.ruleForm.email,
            phone: this.ruleForm.phone
          }
          this.$store.dispatch('auth/updateUser', {data, id: this.currentUser.id}).then(() => {
            ElNotification({
              title: 'Success',
              message: this.$t('data_updated'),
              type: 'success'
            })
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
  },
  created() {
    this.ruleForm.username = this.currentUser.username,
    this.ruleForm.displayName = this.currentUser.displayName,
    this.ruleForm.email = this.currentUser.email,
    this.ruleForm.phone = this.currentUser.phone
  }
};
</script>

<style scoped>
.personal-information .card {
  padding: 2rem 1.5rem;
}

.personal-information h4 {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: #141414;
  margin-bottom: 1rem;
}

.personal-information :deep(.el-form-item__label) {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: rgba(20, 20, 20, 0.6);
  margin-bottom: 0.3rem !important;
}
.personal-information .el-button {
  width: 6rem;
  padding-top: 1.4rem;
  padding-bottom: 1.4rem;
}
</style>