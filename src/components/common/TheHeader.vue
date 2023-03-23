<template>
  <header>
    <base-container>
      <div class="header">
        <div class="left">
          <img class="logo" src="../../assets/Logo-1-Member.png" alt="" />
          <el-input
            :prefix-icon="Search"
            placeholder="Search Restaurant and Product"
          ></el-input>
          <img src="../../assets/filter.png" class="filter" alt="" />
        </div>
        <div class="right">
          <el-dropdown trigger="click" popper-class="language">
            <span class="el-dropdown-link">
              English
              <el-icon class="el-icon--right">
                <ArrowDown />
              </el-icon>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>English</el-dropdown-item>
                <el-dropdown-item>Chinese</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
          <el-button @click="openAuthDialog"> Login </el-button>
        </div>
      </div>
    </base-container>
  </header>
  <Login />
</template>

<script>
import { Search, ArrowDown } from "@element-plus/icons-vue";
import Login from "../login/Login.vue";

export default {
  components: {
    ArrowDown,
    Login,
  },
  data() {
    return {
      Search,
    };
  },
  methods: {
    openAuthDialog() {
      this.$store.commit("TOGGLE_AUTH_DIALOG", true);
    },
  },
};
</script>

<style scoped>
header {
  background: #ffffff;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.08);
}

.header {
  justify-content: space-between;
}

.header .left,
.header {
  display: flex;
  align-items: center;
}

.header img.logo {
  width: 13rem;
  cursor: pointer;
}

.header .el-input {
  width: 22rem;
  margin: 0 1rem;
}

.header .el-input :deep(.el-input__wrapper) {
  background: #f2f2f2;
  border-radius: 8px;
  padding: 0.3rem 1rem;
}

.header ::placeholder {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: rgba(20, 20, 20, 0.6);
}

.header img.filter {
  width: 2rem;
  cursor: pointer;
}

.header .el-dropdown {
  border: 1px solid #e6e4e4;
  border-radius: 40px;
  padding: 0.5rem 1rem;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.02em;
  color: #141414;
  cursor: pointer;
  width: 6rem;
  height: inherit;
}

.header
  .el-dropdown
  :deep(.el-dropdown-link.el-tooltip__trigger.el-tooltip__trigger) {
  display: flex;
  align-items: center;
  justify-content: space-between;
  outline: none;
}

.header .el-button {
  background: #1c8b71;
  border-radius: 80px;
  padding: 0.5rem 1rem;
  height: inherit;
  line-height: 20px;
  width: 6rem;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  letter-spacing: -0.02em;
  color: #ffffff;
  margin-left: 1rem;
}
</style>

<style>
.language .el-dropdown-menu__item {
  font-family: "Inter" !important;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.02em;
  color: #141414;
}
</style>