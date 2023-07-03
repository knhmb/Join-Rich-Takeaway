<template>
  <div class="payment-method">
    <base-card>
      <h4>{{ $t("payment_method") }}</h4>
      <div class="payment-selection-content">
        <div
          class="item"
          @click="setOption('cash')"
          :class="{ 'is-selected': currentOption === 'cash' }"
        >
          {{ $t("cash") }}
        </div>
        <div
          class="item"
          @click="setOption('stripe')"
          :class="{ 'is-selected': currentOption === 'stripe' }"
        >
          {{ $t("stripe") }}
        </div>
        <div
          class="item"
          @click="setOption('ewallet')"
          :class="{ 'is-selected': currentOption === 'ewallet' }"
        >
          {{ $t("e-wallet") }}
        </div>
      </div>
      <div class="promotion-code-content">
        <img src="../../assets/coupon.png" alt="" />
        <p class="promotion-code">{{ $t("use_promotion_code") }}</p>
      </div>
    </base-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentOption: "cash",
    };
  },
  methods: {
    setOption(option) {
      this.currentOption = option;
      this.$store.commit("SET_PAYMENT_METHOD", option);
    },
  },
};
</script>

<style scoped>
.payment-method {
  margin-top: 1rem;
}

.payment-method h4 {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: #141414;
  margin-bottom: 1rem;
}

.payment-method .payment-selection-content {
  border: 1px solid #e6e6e6;
  border-radius: 80px;
  background: #fff;
  width: 100%;
  display: flex;
  align-items: center;
}

.payment-method .payment-selection-content .item {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #141414;
  padding: 1rem;
  text-align: center;
  width: 100%;
  cursor: pointer;
}

.payment-method .payment-selection-content .item.is-selected {
  background: #1c8b71;
  border-radius: 80px;
  color: #fff;
}

.payment-method .promotion-code-content {
  padding-top: 1rem;
  border-top: 1px solid #e6e6e6;
  margin-top: 1rem;
}

.payment-method p.promotion-code {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.02em;
  color: #1c8b71;
  display: inline-block;
  vertical-align: middle;
  cursor: pointer;
}

.payment-method img {
  width: 1.5rem;
  vertical-align: middle;
  margin-right: 0.5rem;
}
</style>