<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="restaurant">
    <base-container>
      <el-row :gutter="35">
        <el-col :xs="24" :sm="15">
          <RestaurantInfo />
          <Popular />
        </el-col>
        <el-col :xs="24" :sm="9">
          <AddToCart />
        </el-col>
      </el-row>
    </base-container>
  </section>
</template>

<script>
import RestaurantInfo from "@/components/restaurant/RestaurantInfo.vue";
import Popular from "@/components/restaurant/Popular.vue";
import AddToCart from "@/components/restaurant/AddToCart.vue";

export default {
  components: {
    RestaurantInfo,
    Popular,
    AddToCart,
  },
};
</script>

<style scoped>
.restaurant {
  margin-top: 1rem;
}
</style>