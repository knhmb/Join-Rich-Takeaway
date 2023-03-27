<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="cart-right">
    <base-card>
      <p class="subtotal">Subtotal</p>
      <p class="price">HK$ 174.0</p>
      <base-button>Select address and payment</base-button>
    </base-card>
  </div>
</template>

<style scoped>
.cart-right .card {
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.04);
}

.cart-right p {
  font-family: "Inter";
  font-style: normal;
  letter-spacing: -0.02em;
}

.cart-right p.subtotal {
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: rgba(20, 20, 20, 0.8);
}

.cart-right p.price {
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  color: #1c8b71;
  margin: 0.5rem 0;
}

.cart-right .el-button {
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
}
</style>