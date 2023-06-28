<template>
  <TheHeader />
  <router-view></router-view>
  <TheFooter />
</template>

<script>
import TheHeader from "./components/common/TheHeader.vue";
import TheFooter from "./components/common/TheFooter.vue";

export default {
  components: {
    TheHeader,
    TheFooter,
  },
  created() {
    this.$store.dispatch('auth/checkUser').then(() => {}).catch(() => {
      this.$store.dispatch('auth/logout')
    })
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: #f5f5f5;
}
</style>
