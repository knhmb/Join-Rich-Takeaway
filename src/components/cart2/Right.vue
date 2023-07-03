<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="cart-total">
    <base-card>
      <p>{{ $t("total") }}</p>
      <p>HK$ {{ totalPrice + products[0].deliveryFee }}</p>
      <base-button :disabled="isDisabled" @click="checkout">{{
        $t("checkout")
      }}</base-button>
    </base-card>
  </div>
</template>

<script>
import { ElNotification } from "element-plus";
export default {
  computed: {
    selectedProducts() {
      return this.$store.getters["dashboard/selectedProducts"];
    },
    products() {
      return [...new Set(this.selectedProducts)];
    },
    totalPrice() {
      const sum = this.selectedProducts.reduce((accumulator, object) => {
        return accumulator + (object.price - object.discount);
      }, 0);
      return sum;
    },
    isLoggedIn() {
      return this.$store.getters["auth/isLoggedIn"];
    },
    savedAddress() {
      return this.$store.getters["profile/savedAddress"];
    },
    isDisabled() {
      return Object.keys(this.savedAddress).length < 0;
    },
  },
  methods: {
    checkout() {
      if (!this.isLoggedIn) {
        ElNotification({
          title: "Error",
          message: "Please Login First",
          type: "error",
        });
        return;
      }

      if (Object.keys(this.savedAddress).length <= 0) {
        ElNotification({
          title: "Error",
          message: "Please Select an address",
          type: "error",
        });
        return;
      }
    },
  },
};
</script>

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

@media screen and (max-width: 767px) {
  .cart-total {
    margin-top: 1rem;
  }
}
</style>