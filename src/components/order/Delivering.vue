<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="Delivering">
    <h4>{{ $t("delivering") }}</h4>
    <carousel :breakpoints="breakpoints">
      <slide v-for="slide in 10" :key="slide">
        <base-card>
          <img src="../../assets/Restaurant.png" alt="" />
          <p class="name">Restaurant name restaurant name...</p>
          <p class="no">#1234<span>•</span>2022-08-11 12:31</p>
          <p class="price">HK$ 98.00</p>
          <!-- <el-button>Cancel order</el-button> -->
        </base-card>
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
};
</script>
  
  <style scoped>
.Delivering {
  margin-top: 1.5rem;
}

.Delivering h4 {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: #141414;
  margin-bottom: 1rem;
}

.Delivering img {
  width: 1rem;
  margin-bottom: 1rem;
}

.Delivering p {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.02em;
  color: #141414;
}

.Delivering p.no {
  font-weight: 400;
  font-size: 12px;
  color: rgba(20, 20, 20, 0.6);
  margin: 0.5rem 0;
}

.Delivering p.no span {
  margin: 0 0.3rem;
}

.Delivering p.price {
  font-weight: 600;
}

.Delivering .el-button {
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

.Delivering :deep(.carousel__next),
.Delivering :deep(.carousel__prev) {
  background: #ffffff;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.04);
  border-radius: 40px;
}

.Delivering :deep(.carousel__prev) {
  left: -3rem;
}

.Delivering :deep(.carousel__next) {
  right: -3rem;
}

.Delivering :deep(.carousel__prev--disabled),
.Delivering :deep(.carousel__next--disabled) {
  display: none;
}

.Delivering .card {
  width: 100%;
  margin-right: 1rem;
  text-align: start;
}

@media screen and (max-width: 991px) {
  .Delivering :deep(.carousel__next) {
    right: -1rem;
  }
  .Delivering :deep(.carousel__prev) {
    left: -1.5rem;
  }
}
</style>