<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="home">
    <base-container>
      <carousel :breakpoints="breakpoints">
        <slide v-for="slide in 10" :key="slide">
          <img class="banner" src="../assets/Rectangle-50.png" alt="" />
        </slide>
        <template #addons>
          <navigation />
        </template>
      </carousel>
      <Popular />
      <Favorites />
      <LowestDelivery />
    </base-container>
  </section>
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";
import Popular from "@/components/home/Popular.vue";
import LowestDelivery from "@/components/home/LowestDelivery.vue";
import Favorites from "@/components/home/Favorites.vue";

export default {
  components: {
    Carousel,
    Slide,
    Navigation,
    Popular,
    LowestDelivery,
    Favorites,
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
          itemsToShow: 3,
          snapAlign: "start",
        },
      },
    };
  },
  created() {
    this.$store.commit("TOGGLE_AUTH_TYPE", "login");
  },
};
</script>

<style scoped>
.home .carousel {
  margin-top: 1rem;
}

.home img.banner {
  width: 100%;
  padding-right: 8px;
}

.home :deep(.carousel__next),
.home :deep(.carousel__prev) {
  background: #ffffff;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.04);
  border-radius: 40px;
}

.home :deep(.carousel__prev) {
  left: -3rem;
}

.home :deep(.carousel__next) {
  right: -3rem;
}

.home :deep(.carousel__prev--disabled),
.home :deep(.carousel__next--disabled) {
  display: none;
}

@media screen and (max-width: 991px) {
  .home :deep(.carousel__next) {
    right: -1.5rem;
  }

  .home :deep(.carousel__prev) {
    left: -1.5rem;
  }
}
</style>