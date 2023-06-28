<template>
  <section class="user-profile">
    <base-container>
      <el-row :gutter="35">
        <el-col :xs="24" :sm="8">
          <base-card>
            <div class="user-content">
              <div class="user-image">
                <img class="user-img" src="../assets/Avatar.png" alt="" />
              </div>
              <p>{{ currentUser.displayName }}</p>
            </div>
            <div class="list">
              <div
                class="single-item"
                @click="navigate('personal-information')"
                :class="{
                  'is-selected': $route.name === 'personal-information',
                }"
              >
                <p>{{ $t("personal_information") }}</p>
              </div>
              <div
                class="single-item"
                @click="navigate('change-password')"
                :class="{
                  'is-selected': $route.name === 'change-password',
                }"
              >
                <p>{{ $t("change_password") }}</p>
              </div>
              <div
                class="single-item"
                @click="navigate('delivery-address')"
                :class="{
                  'is-selected': $route.name === 'delivery-address',
                }"
              >
                <p>{{ $t("delivery_address") }}</p>
              </div>
              <div
                class="single-item"
                @click="navigate('e-wallet')"
                :class="{
                  'is-selected': $route.name === 'e-wallet',
                }"
              >
                <p>{{ $t("e-wallet") }}</p>
              </div>
              <div
                class="single-item"
                @click="navigate('favorites')"
                :class="{
                  'is-selected': $route.name === 'favorites',
                }"
              >
                <p>{{ $t("favorites") }}</p>
              </div>
              <div class="single-item">
                <p @click="logout">{{ $t("logout") }}</p>
              </div>
            </div>
          </base-card>
          <base-card class="delete-box">
            <p>{{ $t("delete_my_account") }}</p>
          </base-card>
        </el-col>
        <el-col :xs="24" :sm="16">
          <router-view class="user-pages"></router-view>
        </el-col>
      </el-row>
    </base-container>
  </section>
</template>

<script>
export default {
  computed: {
    currentUser() {
      return this.$store.getters['auth/currentUser']
    }
  },
  methods: {
    navigate(path) {
      this.$router.push({ name: path });
    },
    logout() {
      this.$store.dispatch('auth/logout').then(() =>{
        this.$router.replace('/')
      })
    },
  },
};
</script>

<style scoped>
.user-profile {
  margin-top: 1.5rem;
}

.user-profile .card {
  padding-left: 0;
  padding-right: 0;
  padding-top: 2rem;
}

.user-profile .user-content {
}

.user-profile .user-content .user-image {
  border: 1px solid #e6e6e6;
  border-radius: 200px;
  width: 7rem;
  height: 7rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

.user-profile img.user-img {
  width: 5rem;
}
.user-profile p {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: #141414;
  text-align: center;
  margin-top: 1rem;
}

.user-profile .list {
  margin-top: 2rem;
}

.user-profile .list .single-item {
  background: #ffffff;
  border-bottom: 1px solid #e6e6e6;
  padding: 1.5rem 1.5rem;
  cursor: pointer;
}

.user-profile .list .single-item:last-of-type {
  border: none;
}

.user-profile .list .single-item.is-selected {
  background: #1c8b71;
}

.user-profile .list .single-item p {
  margin-top: 0;
  text-align: start;
}

.user-profile .list .single-item.is-selected p {
  color: #fff;
}

.user-profile .delete-box {
  margin-top: 1rem;
  padding: 1rem 1.5rem;
}

.user-profile .delete-box p {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: #e53939;
  margin-top: 0;
  text-align: start;
  cursor: pointer;
}

@media screen and (max-width: 767px) {
  .user-profile .user-pages {
    margin-top: 1rem;
  }
}
</style>