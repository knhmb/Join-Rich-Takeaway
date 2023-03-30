<template>
  <section class="change-password">
    <base-card>
      <h4>Change Password</h4>
      <el-form label-position="top">
        <el-form-item label="Old Password">
          <base-input
            type="password"
            v-model="ruleForm.oldPassword"
          ></base-input>
        </el-form-item>
        <el-form-item label="New Password">
          <base-input
            type="password"
            v-model="ruleForm.newPassword"
          ></base-input>
        </el-form-item>
        <el-form-item label="Confirm New Password">
          <base-input
            type="password"
            v-model="ruleForm.confirmNewPassword"
          ></base-input>
        </el-form-item>
        <el-form-item>
          <base-button>Save</base-button>
        </el-form-item>
      </el-form>
    </base-card>
  </section>
</template>
  
  <script>
export default {
  data() {
    return {
      ruleForm: {
        oldPassword: "",
        newPassword: "",
        confirmNewPassword: "",
      },
    };
  },
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