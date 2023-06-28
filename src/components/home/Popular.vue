<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="popular">
    <h2>{{ $t("popular_near_you") }}</h2>
    <carousel :breakpoints="breakpoints">
      <slide v-for="slide in restaurants" :key="slide">
        <el-row :gutter="10">
          <el-col :sm="12" :md="6" v-for="item in restaurants" :key="item">
            <base-card @click="restDetail(item.slug)">
              <div class="top">
                <img src="../../assets/Restaurant.png" alt="" />
                <img src="../../assets/Bookmark-Off.png" alt="" />
              </div>
              <p class="name">{{ item.name }}</p>
              <p class="description">{{ item.address }}.</p>
            </base-card>
          </el-col>
        </el-row>
      </slide>
      <template #addons>
        <navigation />
      </template>
    </carousel>
    <!-- <carousel :items-to-show="4">
      <slide v-for="slide in 10" :key="slide">
        <div class="card-content">
          <base-card>
            <div class="top">
              <img src="../../assets/Restaurant.png" alt="" />
              <img src="../../assets/Bookmark-Off.png" alt="" />
            </div>
            <p class="name">Restaurant name</p>
            <p class="description">Address lorem ipsum dolor sit consect...</p>
          </base-card>
          <base-card>
            <div class="top">
              <img src="../../assets/Restaurant.png" alt="" />
              <img src="../../assets/Bookmark-Off.png" alt="" />
            </div>
            <p class="name">Restaurant name</p>
            <p class="description">Address lorem ipsum dolor sit consect...</p>
          </base-card>
        </div>
      </slide>
      <template #addons>
        <navigation />
      </template>
    </carousel> -->
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
  computed: {
    restaurants() {
      return this.$store.getters["dashboard/restaurants"];
    },
  },
  methods: {
    restDetail(slug) {
      this.$router.push({ name: "restaurant", params: { slug } });
    },
  }
};
</script>

<style scoped>
.popular {
  margin-top: 2rem;
}

.popular h2 {
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: -0.02em;
  color: #141414;
  margin-bottom: 1rem;
}

.popular .top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.popular .top img {
  width: 1rem;
}

.popular p {
  font-family: "Inter";
  font-style: normal;
  text-align: start;
}

.popular p.name {
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #141414;
  margin: 1rem 0;
}

.popular p.description {
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: rgba(20, 20, 20, 0.6);
}

.home .popular :deep(.carousel__slide) {
  justify-content: start;
  margin: 0;
  display: block;
  /* margin: 0 2rem; */
}

.popular .card-content {
  margin-right: 0.5rem;
}

.popular .card {
  width: 100%;
  margin-bottom: 0.5rem;
  cursor: pointer;
}
</style>