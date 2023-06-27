<template>
  <div class="restaurant-info">
    <base-card>
      <div class="top">
        <h3>{{ restaurantDetail.name }}</h3>
        <p>
          {{ restaurantDetail.description }}
        </p>
      </div>
      <div class="information">
        <div class="bottom">
          <div class="icon">
            <img src="../../assets/Phone.png" alt="" />
          </div>
          <div class="text">
            <p>{{ $t("phone") }}</p>
            <p>{{ restaurantDetail.phone }}</p>
          </div>
        </div>
      </div>
      <div class="information">
        <div class="bottom">
          <div class="icon">
            <img src="../../assets/Hours.png" alt="" />
          </div>
          <div class="text">
            <p>{{ $t("opening_hours") }}</p>
            <p>{{ restaurantDetail.openingHours }}</p>
          </div>
        </div>
      </div>
      <div class="information">
        <div class="bottom">
          <div class="icon">
            <img src="../../assets/Address.png" alt="" />
          </div>
          <div class="text">
            <p>{{ $t("address") }}</p>
            <p>
              {{ restaurantDetail.address }}
            </p>
          </div>
        </div>
      </div>
    </base-card>
  </div>
</template>

<script>
export default {
  computed: {
    restaurantDetail() {
      return this.$store.getters["dashboard/restaurantDetail"];
    },
  },
};
</script>

<style scoped>
.restaurant-info .card {
  padding: 0;
}

.restaurant-info .card .top {
  padding: 1rem;
  border-bottom: 0.5px solid #e6e6e6;
}

.restaurant-info h3 {
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  letter-spacing: -0.02em;
  color: #141414;
  margin-bottom: 0.5rem;
}

.restaurant-info p {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: -0.02em;
  color: rgba(20, 20, 20, 0.6);
}

.restaurant-info .card .bottom {
  /* padding: 1rem 1rem 0.5rem 1rem; */
  padding: 1rem;
  display: flex;
  align-items: center;
}

.restaurant-info .card .bottom img {
  width: 1.3rem;
  margin-right: 0.5rem;
}

.restaurant-info .card .bottom .text p {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
}

.restaurant-info .card .bottom .text p:first-of-type {
  line-height: 12px;
  color: rgba(20, 20, 20, 0.6);
  margin-bottom: 0.5rem;
}
.restaurant-info .card .bottom .text p:last-of-type {
  line-height: 16px;
  letter-spacing: -0.02em;
  color: #141414;
}
</style>