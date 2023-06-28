<template>
  <header>
    <base-container>
      <div class="header">
        <div class="left">
          <img
            @click="$router.push('/')"
            class="logo"
            src="../../assets/Logo-1-Member.png"
            alt=""
          />
          <div class="search">
            <el-input
              :prefix-icon="Search"
              :placeholder="$t('search_restaurant_product')"
            ></el-input>
            <img
              @click="filterDialog = true"
              src="../../assets/filter.png"
              class="filter"
              alt=""
            />
          </div>
        </div>
        <div class="right">
          <el-dropdown
            trigger="click"
            popper-class="language"
            v-model="$i18n.locale"
          >
            <span class="el-dropdown-link">
              {{ $i18n.locale === "en-US" ? "English" : "Chinese" }}
              <el-icon class="el-icon--right">
                <ArrowDown />
              </el-icon>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item @click="setLang('en-US')"
                  >English</el-dropdown-item
                >
                <el-dropdown-item @click="setLang('zh')"
                  >Chinese</el-dropdown-item
                >
              </el-dropdown-menu>
            </template>
          </el-dropdown>
          <el-button @click="openAuthDialog" v-if="!isLoggedIn"> {{ $t("login") }} </el-button>
          <div v-else class="login-content">
            <div class="box" @click="$router.push('/cart')">
              <img src="../../assets/Cart-Off.png" alt="" />
            </div>
            <div class="box" @click="toggleMenu">
              <img src="../../assets/Profile-Off.png" alt="" />
            </div>
            <div class="menu-list" v-if="isMenuDisplayed">
              <div class="single-item" @click="navigate('/user-profile')">
                <!-- <img
                  src="../../assets/profile-personal-information.png"
                  alt=""
                /> -->
                <p>Profile</p>
              </div>
              <div class="single-item" @click="navigate('/order')">
                <!-- <img src="../../assets/summary.png" alt="" /> -->
                <p>Order</p>
              </div>
              <div class="single-item" @click="logout">
                <!-- <img src="../../assets/profile-logout.png" alt="" /> -->
                <p>Logout</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </base-container>
  </header>
  <Login />
  <FilterDialog
    @closedDialog="filterDialog = $event"
    :filter-dialog="filterDialog"
  />
</template>

<script>
import { Search, ArrowDown } from "@element-plus/icons-vue";
import Login from "../login/Login.vue";
import FilterDialog from "@/components/FilterDialog.vue";

export default {
  components: {
    ArrowDown,
    Login,
    FilterDialog,
  },
  data() {
    return {
      Search,
      filterDialog: false,
      isMenuDisplayed: false
    };
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters['auth/isLoggedIn']
    }
  },
  methods: {
    openAuthDialog() {
      this.$store.commit("TOGGLE_AUTH_DIALOG", true);
    },
    setLang(option) {
      this.$i18n.locale = option;
    },
    toggleMenu() {
      this.isMenuDisplayed = !this.isMenuDisplayed
    },
    logout() {
      this.$store.dispatch('auth/logout').then(() =>{
        this.$router.replace('/')
      })
    },
    navigate(path) {
      this.$router.push(path)
      this.isMenuDisplayed = false
    }
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
  min-width: 6rem;
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

.header div.search {
  display: flex;
  align-items: center;
  justify-content: center;
}

header .login-content {
  display: inline-flex;
  justify-content: end;
  position: relative;
  width: fit-content;
  margin-left: 1rem;
}

header .login-content .box {
  background: #ffffff;
  border: 1px solid #e6e4e4;
  border-radius: 100%;
  width: fit-content;
  padding: 0.2rem;
  cursor: pointer;
}

header .login-content .box:first-of-type {
  margin-right: 1rem;
}

header .login-content .box img {
  width: 1.5rem;
}

header .login-content .menu-list {
  background: #ffffff;
  border: 1px solid #e6e4e4;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.08), 0px 4px 16px rgba(0, 0, 0, 0.04);
  border-radius: 8px;
  padding: 1rem;
  position: absolute;
  bottom: -9.5rem;
  left: -4rem;
  min-width: 9rem;
  z-index: 1;
}

header .login-content .menu-list .single-item {
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: 0.3s;
}

header .login-content .menu-list .single-item:hover {
  padding-left: 0.5rem;
}

header .login-content .menu-list .single-item:not(:last-of-type) {
  margin-bottom: 1rem;
}

header .login-content .menu-list .single-item p {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: #141414;
  margin-left: 0.5rem;
}

@media screen and (max-width: 880px) {
  .header,
  .header .left {
    flex-direction: column;
  }

  .header div.search {
    margin: 1rem 0;
  }
}
@media screen and (max-width: 430px) {
  .header div.search {
    flex-direction: column;
  }

  .header div.search img {
    margin-top: 0.5rem;
  }

  .header .el-input {
    margin: 0;
  }
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