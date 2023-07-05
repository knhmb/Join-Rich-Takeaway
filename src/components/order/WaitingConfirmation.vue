<template>
  <div class="waiting-confirmation">
    <h4>{{ $t("waiting_confirmation") }}</h4>
    <carousel :breakpoints="breakpoints" v-if="orders.length > 0">
      <slide v-for="slide in orders" :key="slide.id">
        <template v-for="order in orders" :key="order.id">
        <base-card v-if="order.status === 'Waiting_For_Confirmation'">
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
.waiting-confirmation {
  margin-top: 1.5rem;
}

.waiting-confirmation h4 {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: #141414;
  margin-bottom: 1rem;
}

.waiting-confirmation img {
  width: 1rem;
  margin-bottom: 1rem;
}

.waiting-confirmation p {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.02em;
  color: #141414;
}

.waiting-confirmation p.no {
  font-weight: 400;
  font-size: 12px;
  color: rgba(20, 20, 20, 0.6);
  margin: 0.5rem 0;
}

.waiting-confirmation p.no span {
  margin: 0 0.3rem;
}

.waiting-confirmation p.price {
  font-weight: 600;
}

.waiting-confirmation .el-button {
  background: #e63939;
  border-radius: 80px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.02em;
  color: #ffffff;
  margin-left: auto;
  border-color: #e63939;
  display: flex;
  margin-top: 0.5rem;
}

.waiting-confirmation :deep(.carousel__next),
.waiting-confirmation :deep(.carousel__prev) {
  background: #ffffff;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.04);
  border-radius: 40px;
}

.waiting-confirmation :deep(.carousel__prev) {
  left: -3rem;
}

.waiting-confirmation :deep(.carousel__next) {
  right: -3rem;
}

.waiting-confirmation :deep(.carousel__prev--disabled),
.waiting-confirmation :deep(.carousel__next--disabled) {
  display: none;
}

.waiting-confirmation .card {
  width: 100%;
  margin-right: 1rem;
  text-align: start;
}

@media screen and (max-width: 991px) {
  .waiting-confirmation :deep(.carousel__next) {
    right: -1.5rem;
  }

  .waiting-confirmation :deep(.carousel__prev) {
    left: -1.5rem;
  }
}
</style>