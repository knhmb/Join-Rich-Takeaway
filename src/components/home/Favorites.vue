<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="favorites" v-if="isLoggedIn">
    <h2>{{ $t("favorites") }}</h2>
    <carousel :breakpoints="breakpoints" v-if="bookmarks.resources.restaurants.length > 0">
      <slide v-for="slide in bookmarks.resources.restaurants" :key="slide">
        <el-row :gutter="10">
          <el-col :sm="12" :md="6" v-for="item in bookmarks.resources.restaurants" :key="item">
            <base-card>
              <div class="top">
                <img src="../../assets/Restaurant.png" alt="" />
                <img src="../../assets/Bookmark-Off.png" alt="" />
              </div>
              <p class="name">{{ item.name }}</p>
              <p class="description">
                {{item.description}}
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
  computed: {
    isLoggedIn() {
      return this.$store.getters["auth/isLoggedIn"];
    },
    bookmarks() {
        return this.$store.getters['auth/bookmarks']
      }
  },
};
</script>
  
  <style scoped>
.favorites {
  margin-top: 2rem;
}

.favorites h2 {
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: -0.02em;
  color: #141414;
  margin-bottom: 1rem;
}

.favorites .el-row {
  width: 100%
}

.favorites .top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.favorites .top img {
  width: 1rem;
}

.favorites p {
  font-family: "Inter";
  font-style: normal;
  text-align: start;
}

.favorites p.name {
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #141414;
  margin: 1rem 0;
}

.favorites p.description {
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: rgba(20, 20, 20, 0.6);
}

.home .favorites :deep(.carousel__slide) {
  justify-content: start;
  margin: 0;
}

.favorites .card-content {
  margin-right: 0.5rem;
}

.favorites .card {
  width: 100%;
  margin-bottom: 0.5rem;
}
</style>