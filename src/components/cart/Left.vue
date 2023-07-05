<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="cart-left">
    <base-card v-if="Object.keys(cartItems).length > 0">
      <h3>{{ restaurantDetail.name }}</h3>
      <div class="info">
        <p>{{ $t("delivery_time") }}</p>
        <p>ASAP ({{cartItems.resources.deliveryTime}}min)</p>
      </div>
      <div class="item" v-for="item in cartItems.resources.products" :key="item.id">
        <div class="left">
          <el-select v-model="item.quantity" placeholder="Select"> </el-select>
          <span>{{ item.name }}</span>
        </div>
        <div class="right">
          <p class="price" v-if="item.discount">HK$ {{ item.price }}</p>
          <p class="discount">
            HK$ {{ item.discount ? item.price - item.discount : item.price }}
          </p>
        </div>
      </div>
      <p class="add-more" @click="$router.go(-1)">{{ $t("add_more_items") }}</p>
    </base-card>
    <base-card>
      <div class="total" v-if="Object.keys(cartItems).length > 0">
        <p>{{ $t("subtotal") }}</p>
        <p>HK$ {{ cartItems.resources.subtotal }}</p>
      </div>
    </base-card>
  </div>
</template>

<script>

export default {
  data() {
    return {
      value: 1,
    };
  },
  computed: {
    restaurantDetail() {
      return this.$store.getters["dashboard/restaurantDetail"];
    },
    selectedProducts() {
      return this.$store.getters["dashboard/selectedProducts"];
    },
    cartItems() {
      return this.$store.getters['cart/cartItems']
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
  },
};
</script>

<style scoped>
/* .cart-left {
  height: 100vh;
} */
.cart-left h3 {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: #141414;
  margin-bottom: 0.5rem;
}

.cart-left .info p {
  font-family: "Inter";
  font-style: normal;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.02em;
}

.cart-left .info {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.cart-left .info p:first-of-type {
  font-weight: 400;
  color: rgba(20, 20, 20, 0.6);
}
.cart-left .info p:last-of-type {
  font-weight: 500;
  color: #1c8b71;
}

.cart-left .el-select {
  width: 3.5rem;
}

.cart-left :deep(.el-input__inner) {
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  letter-spacing: -0.02em;
  color: #1c8b71;
}

.cart-left :deep(.el-icon) {
  color: #1c8b71;
}

.cart-left .item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem 0;
  border-bottom: 1px solid #e6e6e6;
  padding-bottom: 0.5rem;
}

.cart-left .item .left span {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.02em;
  color: #141414;
  margin-left: 0.5rem;
}

.cart-left .item .right p {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: -0.02em;
}

.cart-left .item .right p.price {
  text-decoration-line: line-through;
  color: #9c9c9c;
}

.cart-left .item .right p.discount {
  color: #141414;
}

.cart-left .total {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.cart-left .total p {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.02em;
}

.cart-left .total p:first-of-type {
  color: rgba(20, 20, 20, 0.6);
}
.cart-left .total p:last-of-type {
  color: #141414;
}

.cart-left .el-button {
  margin-top: 1rem;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
}

.cart-left p.add-more {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.02em;
  color: #1c8b71;
  cursor: pointer;
}

.cart-left .card:last-of-type {
  margin-top: 1rem;
}
</style>