<template>
  <div class="order-summary">
    <base-card>
      <h4>{{ $t("order_summary") }}</h4>
      <div class="first-section">
        <div class="item" v-for="item in cartItems.resources.products" :key="item.id">
          <div class="top">
            <div class="left">
              <span>{{ item.quantity }}x</span>
              <span>{{ item.name }}</span>
            </div>
            <div class="right">
              <p>HK$ {{ item.price - item.discount }}</p>
            </div>
          </div>
        </div>
        <!-- <div class="item">
          <div class="top">
            <div class="left">
              <span>1x</span>
              <span>Product name</span>
            </div>
            <div class="right">
              <p>HK$ 58.0</p>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="top">
            <div class="left">
              <span>1x</span>
              <span>Product name</span>
            </div>
            <div class="right">
              <p>HK$ 58.0</p>
            </div>
          </div>
        </div> -->
      </div>
      <div class="second-section">
        <div class="subtotal">
          <p class="grey">Subtotal</p>
          <p class="grey">HK$ {{ cartItems.resources.subtotal }}</p>
        </div>
        <div class="delivery-fee">
          <p class="grey">Delivery fee</p>
          <p class="grey">HK$ {{ cartItems.resources.deliveryFee }}</p>
        </div>
      </div>
      <div class="total">
        <p>{{ $t("total") }}</p>
        <p>HK$ {{ cartItems.resources.subtotal + cartItems.resources.deliveryFee }}</p>
      </div>
    </base-card>
  </div>
</template>

<script>
export default {
  computed: {
    selectedProducts() {
      return this.$store.getters["dashboard/selectedProducts"];
    },
    products() {
      return [...new Set(this.selectedProducts)];
    },
    cartItems() {
      return this.$store.getters['cart/cartItems']
    },
    totalPrice() {
      const sum = this.selectedProducts.reduce((accumulator, object) => {
        return accumulator + (object.price - object.discount);
      }, 0);
      return sum;
    },
  },
};
</script>

<style scoped>
.order-summary {
  margin-top: 1rem;
}

.order-summary h4 {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: #141414;
  margin-bottom: 1rem;
}

.order-summary p,
.order-summary span {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.02em;
  color: #141414;
}

.order-summary p.grey {
  color: rgba(20, 20, 20, 0.6);
}

.order-summary .top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.order-summary .top .left span:first-of-type {
  margin-right: 0.5rem;
}

.order-summary .item:not(:last-of-type) {
  margin-bottom: 1rem;
}

.order-summary .first-section {
  border-bottom: 1px solid #e6e6e6;
  padding-bottom: 1rem;
}

.order-summary .second-section {
  margin-top: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e6e6e6;
}

.order-summary .second-section .subtotal {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.order-summary .second-section .delivery-fee,
.order-summary .total {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.order-summary .total {
  margin-top: 1rem;
}
</style>