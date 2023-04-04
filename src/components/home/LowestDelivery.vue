<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="lowest-delivery">
    <h2>{{ $t("lowest_delivery_fee") }}</h2>
    <carousel :breakpoints="breakpoints">
      <slide v-for="slide in 10" :key="slide">
        <el-row :gutter="10">
          <el-col :sm="12" :md="6" v-for="item in 8" :key="item">
            <base-card>
              <div class="top">
                <img src="../../assets/Restaurant.png" alt="" />
                <img src="../../assets/Bookmark-Off.png" alt="" />
              </div>
              <p class="name">Restaurant name</p>
              <p class="description">
                Address lorem ipsum dolor sit consect...
              </p>
            </base-card>
          </el-col>
        </el-row>
      </slide>
      <template #addons>
        <navigation />
      </template>
    </carousel>
  </section>
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
          itemsToShow: 1,
          snapAlign: "center",
        },
        // 1024 and up
        1024: {
          itemsToShow: 1,
          snapAlign: "start",
        },
      },
    };
  },
};
</script>
  
  <style scoped>
.lowest-delivery {
  margin-top: 2rem;
}

.lowest-delivery h2 {
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: -0.02em;
  color: #141414;
  margin-bottom: 1rem;
}

.lowest-delivery .top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.lowest-delivery .top img {
  width: 1rem;
}

.lowest-delivery p {
  font-family: "Inter";
  font-style: normal;
  text-align: start;
}

.lowest-delivery p.name {
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #141414;
  margin: 1rem 0;
}

.lowest-delivery p.description {
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: rgba(20, 20, 20, 0.6);
}

.home .lowest-delivery :deep(.carousel__slide) {
  justify-content: start;
  margin-right: 0;
}

.lowest-delivery .card-content {
  margin-right: 0.5rem;
}

.lowest-delivery .card {
  width: 100%;
  margin-bottom: 0.5rem;
}
</style>