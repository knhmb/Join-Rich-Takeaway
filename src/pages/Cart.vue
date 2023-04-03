<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="cart">
    <base-container>
      <h2>Cart</h2>
      <el-row :gutter="35">
        <el-col :xs="24" :sm="16">
          <Left />
        </el-col>
        <el-col :xs="24" :sm="8">
          <Right />
        </el-col>
      </el-row>
    </base-container>
  </section>
</template>

<script>
import Left from "@/components/cart/Left.vue";
import Right from "@/components/cart/Right.vue";

export default {
  components: {
    Right,
    Left,
  },
};
</script>

<style scoped>
.cart {
  margin-top: 1rem;
}

.cart h2 {
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: -0.02em;
  color: #141414;
  margin-bottom: 1rem;
}
</style>