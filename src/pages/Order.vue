<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="order">
    <base-container>
      <h2>{{ $t("order") }}</h2>
      <WaitingConfirmation />
      <Delivering />
      <PastOrders />
      <Dialog />
    </base-container>
  </section>
</template>

<script>
import WaitingConfirmation from "@/components/order/WaitingConfirmation.vue";
import Delivering from "@/components/order/Delivering.vue";
import PastOrders from "@/components/order/PastOrders.vue";
import Dialog from "@/components/order/Dialog.vue";

export default {
  components: {
    WaitingConfirmation,
    Delivering,
    PastOrders,
    Dialog,
  },
};
</script>

<style scoped>
.order {
  margin-top: 1rem;
}

.order h2 {
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: -0.02em;
  color: #141414;
}
</style>