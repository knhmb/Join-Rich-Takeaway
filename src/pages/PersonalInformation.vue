<template>
  <section class="personal-information">
    <base-card>
      <h4>Personal information</h4>
      <el-form label-position="top">
        <el-form-item label="Username">
          <el-input v-model="ruleForm.username"></el-input>
        </el-form-item>
        <el-form-item label="Display name">
          <el-input v-model="ruleForm.displayName"></el-input>
        </el-form-item>
        <el-form-item label="Email">
          <el-input v-model="ruleForm.email"></el-input>
        </el-form-item>
        <el-form-item label="Phone">
          <el-input v-model="ruleForm.phone"></el-input>
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
        username: "chantaiman1234",
        displayName: "Tai Man",
        email: "chantaiman@email.com",
        phone: "98761234",
      },
    };
  },
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

.personal-information :deep(.el-input__wrapper) {
  background: #f5f5f5;
  /* border: 1px solid #ebebeb; */
  border-radius: 8px;
  padding-top: 0.3rem;
  padding-bottom: 0.3rem;
}

.personal-information .el-button {
  width: 6rem;
  padding-top: 1.4rem;
  padding-bottom: 1.4rem;
}
</style>