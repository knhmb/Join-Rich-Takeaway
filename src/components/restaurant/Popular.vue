<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="popular">
    <h3>{{ $t("popular") }}</h3>
    <base-card>
      <div
        class="item"
        v-for="item in restaurantProducts"
        :key="item.id"
        @click="setSelectedItem(item)"
      >
        <div class="text">
          <p class="name">{{ item.name }}</p>
          <span class="discount">HK$ {{ item.price }}</span>
          <span class="price" v-if="item.discount"
            >HK$ {{ item.price - item.discount }}</span
          >
        </div>
        <!-- <div class="dot"></div> -->
      </div>
      <!-- <div class="item">
        <div class="text">
          <p class="name">Product name</p>
          <span class="discount">HK$ 58.0</span>
          <span class="price">HK$ 97.0</span>
        </div>
      </div>
      <div class="item">
        <div class="text">
          <p class="name">Product name</p>
          <span class="discount">HK$ 58.0</span>
          <span class="price">HK$ 97.0</span>
        </div>
      </div>
      <div class="item">
        <div class="text">
          <p class="name">Product name</p>
          <span class="discount">HK$ 58.0</span>
          <span class="price">HK$ 97.0</span>
        </div>
      </div>
      <div class="item">
        <div class="text">
          <p class="name">Product name</p>
          <span class="discount">HK$ 58.0</span>
          <span class="price">HK$ 97.0</span>
        </div>
      </div>
      <div class="item">
        <div class="text">
          <p class="name">Product name</p>
          <span class="discount">HK$ 58.0</span>
          <span class="price">HK$ 97.0</span>
        </div>
        <div class="dot">3</div>
      </div>
      <div class="item">
        <div class="text">
          <p class="name">Product name</p>
          <span class="discount">HK$ 58.0</span>
          <span class="price">HK$ 97.0</span>
        </div>
      </div>
      <div class="item">
        <div class="text">
          <p class="name">Product name</p>
          <span class="discount">HK$ 58.0</span>
          <span class="price">HK$ 97.0</span>
        </div>
      </div>
      <div class="item">
        <div class="text">
          <p class="name">Product name</p>
          <span class="discount">HK$ 58.0</span>
          <span class="price">HK$ 97.0</span>
        </div>
      </div>
      <div class="item">
        <div class="text">
          <p class="name">Product name</p>
          <span class="discount">HK$ 58.0</span>
          <span class="price">HK$ 97.0</span>
        </div>
      </div> -->
    </base-card>
  </section>
</template>

<script>
export default {
  computed: {
    restaurantProducts() {
      return this.$store.getters["dashboard/restaurantProducts"];
    },
    selectedProducts() {
      return this.$store.getters["dashboard/selectedProducts"];
    },
  },
  methods: {
    setSelectedItem(item) {
      let count = 1;

      for (const element of this.selectedProducts) {
        if (element === item) {
          count += 1;
        }
      }
      console.log(count);
      item.quantity = count;
      this.$store.commit("dashboard/SELECTED_PRODUCTS", item);
    },
  },
  created() {
    this.$store.dispatch("dashboard/getProducts");
  },
};
</script>

<style scoped>
.popular h3 {
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: -0.02em;
  color: #141414;
  margin: 2rem 0 1rem 0;
}

.popular .item {
  display: flex;
  /* align-items: center; */
  justify-content: space-between;
  cursor: pointer;
}

.popular .item:not(:last-of-type) {
  margin-bottom: 1rem;
  border-bottom: 1px solid #e6e6e6;
  padding-bottom: 0.5rem;
}

.popular p.name {
  margin-bottom: 0.2rem;
}

.popular p.name,
.popular span {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.02em;
  color: #141414;
}

.popular span.discount,
.popular span.price {
  font-weight: 400;
}

.popular span.price {
  text-decoration-line: line-through;
  color: #9c9c9c;
  margin-left: 0.5rem;
}

.popular .dot {
  background: #1c8b71;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #ffffff;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* padding: 0.5rem; */
}
</style>