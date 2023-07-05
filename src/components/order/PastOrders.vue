<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="past-orders">
    <h4>{{ $t("past_orders") }}</h4>
    <carousel :breakpoints="breakpoints" v-if="orders.length > 0">
      <slide v-for="slide in orders" :key="slide.id">
        <template v-for="order in orders" :key="order.id">
        <base-card v-if="order.status === 'Order_Completed'">
          <img src="../../assets/Restaurant.png" alt="" />
          <p class="name">{{order.restaurant}}</p>
          <p class="no">#{{order.id}}<span>•</span>{{order.createdAt}}</p>
          <p class="price">HK$ {{ order.subtotal }}</p>
        </base-card>
      </template>
      </slide>
      <template #addons>
        <navigation />
      </template>
    </carousel>
  </div>
</template>
    
    <script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";

export default {
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  data() {
    return {
      breakpoints: {
        300: {
          itemsToShow: 1,
          snapAlign: "center",
        },
        // 700px and up
        700: {
          itemsToShow: 2,
          snapAlign: "center",
        },
        // 1024 and up
        1024: {
          itemsToShow: 4,
          snapAlign: "start",
        },
      },
    };
  },
  computed: {
    orders() {
      return this.$store.getters['cart/orders']
    }
  }
};
</script>
    
    <style scoped>
.past-orders {
  margin-top: 1.5rem;
}

.past-orders h4 {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: #141414;
  margin-bottom: 1rem;
}

.past-orders img {
  width: 1rem;
  margin-bottom: 1rem;
}

.past-orders p {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.02em;
  color: #141414;
}

.past-orders p.no {
  font-weight: 400;
  font-size: 12px;
  color: rgba(20, 20, 20, 0.6);
  margin: 0.5rem 0;
}

.past-orders p.no span {
  margin: 0 0.3rem;
}

.past-orders p.price {
  font-weight: 600;
}

.past-orders .el-button {
  background: #1c8b71;
  border-radius: 80px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.02em;
  color: #ffffff;
  margin-left: auto;
  border-color: #1c8b71;
  display: flex;
  margin-top: 0.5rem;
}

.past-orders :deep(.carousel__next),
.past-orders :deep(.carousel__prev) {
  background: #ffffff;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.04);
  border-radius: 40px;
}

.past-orders :deep(.carousel__prev) {
  left: -3rem;
}

.past-orders :deep(.carousel__next) {
  right: -3rem;
}

.past-orders :deep(.carousel__prev--disabled),
.past-orders :deep(.carousel__next--disabled) {
  display: none;
}

.past-orders .card {
  width: 100%;
  margin-right: 1rem;
  text-align: start;
}

@media screen and (max-width: 991px) {
  .past-orders :deep(.carousel__next) {
    right: -1rem;
  }
  .past-orders :deep(.carousel__prev) {
    left: -1.5rem;
  }
}
</style>