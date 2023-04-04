<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="cart-2">
    <base-container>
      <h2>{{ $t("cart") }}</h2>
      <el-row :gutter="30">
        <el-col :xs="24" :sm="16">
          <DeliveryAddress />
          <PaymentMethod />
          <OrderSummary />
        </el-col>
        <el-col :xs="24" :sm="8">
          <Right />
        </el-col>
      </el-row>
    </base-container>
  </section>
</template>

<script>
import DeliveryAddress from "@/components/cart2/DeliveryAddress.vue";
import PaymentMethod from "@/components/cart2/PaymentMethod.vue";
import OrderSummary from "@/components/cart2/OrderSummary.vue";
import Right from "@/components/cart2/Right.vue";

export default {
  components: {
    DeliveryAddress,
    PaymentMethod,
    OrderSummary,
    Right,
  },
};
</script>

<style scoped>
.cart-2 {
  margin-top: 1rem;
  /* height: 100vh; */
}

.cart-2 h2 {
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: -0.02em;
  color: #141414;
  margin-bottom: 1.5rem;
}
</style>