<template>
  <section class="personal-information">
    <base-card>
      <h4>{{ $t("personal_information") }}</h4>
      <el-form label-position="top">
        <el-form-item :label="$t('username')">
          <base-input v-model="ruleForm.username"></base-input>
        </el-form-item>
        <el-form-item :label="$t('display_name')">
          <base-input v-model="ruleForm.displayName"></base-input>
        </el-form-item>
        <el-form-item :label="$t('email')">
          <base-input v-model="ruleForm.email"></base-input>
        </el-form-item>
        <el-form-item :label="$t('phone')">
          <base-input v-model="ruleForm.phone"></base-input>
        </el-form-item>
        <el-form-item>
          <base-button>{{ $t("save") }}</base-button>
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
.personal-information .el-button {
  width: 6rem;
  padding-top: 1.4rem;
  padding-bottom: 1.4rem;
}
</style>