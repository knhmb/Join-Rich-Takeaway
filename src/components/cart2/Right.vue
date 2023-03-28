<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="cart-total">
    <base-card>
      <p>Total</p>
      <p>HK$ 189.0</p>
      <base-button>Checkout</base-button>
    </base-card>
  </div>
</template>

<style scoped>
.cart-total .card {
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.04);
}

.cart-total p {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: rgba(20, 20, 20, 0.8);
}

.cart-total p:last-of-type {
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  color: #1c8b71;
  margin: 0.5rem 0 1rem 0;
}

.cart-total .el-button {
  width: 100%;
  padding-top: 1.3rem;
  padding-bottom: 1.3rem;
}
</style>