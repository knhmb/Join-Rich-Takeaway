<template>
  <el-button :class="{ 'facebook-button': facebook, 'google-button': google }">
    <img
      class="facebook"
      src="../assets/facebook.png"
      alt=""
      v-if="isFacebook"
    />
    <img class="google" src="../assets/google.png" alt="" v-if="isGoogle" />
    <img
      class="email"
      src="../assets/email.png"
      alt=""
      v-if="!isGoogle && !isFacebook"
    />
    <slot></slot>
  </el-button>
</template>

<script>
export default {
  props: ["facebook", "google"],
  data() {
    return {
      isFacebook: null,
      isGoogle: null,
    };
  },
  created() {
    this.isFacebook = this.facebook;
    this.isGoogle = this.google;
  },
};
</script>

<style scoped>
.el-button {
  background: #1c8b71;
  border-radius: 80px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  width: 100%;
  padding: 1.7rem 1rem;
  position: relative;
}
.facebook-button {
  background: #1c77ed;
  box-shadow: 4px 0px 8px rgba(0, 0, 0, 0.08);
}

.google-button {
  background: #ffffff;
  border: 1px solid rgba(87, 93, 102, 0.2);
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.08);
  color: #575d66;
}

img {
  width: 2rem;
  position: absolute;
  top: 50%;
  left: 1rem;
  transform: translateY(-50%);
}
</style>