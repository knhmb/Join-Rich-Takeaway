<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="order-dialog">
    <el-dialog v-model="dialogVisible">
      <div class="box">
        <p>Estimated delivery time</p>
        <p class="time">11:30 - 11:45</p>
        <div class="range">
          <div class="inner-range"></div>
        </div>
        <p class="rider-info">Your rider has picked up your food.</p>
      </div>
      <OrderDetails />
    </el-dialog>
  </div>
</template>

<script>
import OrderDetails from "@/components/order/OrderDetails";

export default {
  components: {
    OrderDetails,
  },
  data() {
    return {
      dialogVisible: true,
    };
  },
};
</script>

<style scoped>
.order-dialog :deep(.el-dialog) {
  border-radius: 8px;
  width: 40rem;
}

.order-dialog .box {
  border: 1px solid #e6e6e6;
  border-radius: 4px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.order-dialog p {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: -0.02em;
  color: rgba(20, 20, 20, 0.6);
}

.order-dialog p.time {
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #141414;
}

.order-dialog .range {
  background: #e6e6e6;
  border-radius: 8px;
  width: 20rem;
  height: 0.6rem;
  margin: 1rem 0;
}

.order-dialog .range .inner-range {
  background: #1c8b71;
  width: 70%;
  border-radius: inherit;
  height: inherit;
}

.order-dialog p.rider-info {
  color: #141414;
}
</style>