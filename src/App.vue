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
  min-height: 100vh;
}
</style>
