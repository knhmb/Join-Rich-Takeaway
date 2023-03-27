<template>
  <div class="add-to-cart">
    <base-card>
      <h3>Papadam Indian Authentic</h3>
      <div class="info">
        <p>Delivery Time</p>
        <p>ASAP (40min)</p>
      </div>
      <div class="item">
        <div class="left">
          <el-select v-model="value" placeholder="Select"> </el-select>
          <span>Product name</span>
        </div>
        <div class="right">
          <p class="price">HK$ 97.0</p>
          <p class="discount">HK$ 58.0</p>
        </div>
      </div>
      <div class="item">
        <div class="left">
          <el-select v-model="value" placeholder="Select"> </el-select>
          <span>Product name</span>
        </div>
        <div class="right">
          <p class="price">HK$ 97.0</p>
          <p class="discount">HK$ 58.0</p>
        </div>
      </div>
      <div class="item">
        <div class="left">
          <el-select v-model="value" placeholder="Select"> </el-select>
          <span>Product name</span>
        </div>
        <div class="right">
          <p class="price">HK$ 97.0</p>
          <p class="discount">HK$ 58.0</p>
        </div>
      </div>
      <div class="total">
        <p>Subtotal</p>
        <p>HK$ 174.0</p>
      </div>
      <base-button>Add to cart</base-button>
    </base-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 1,
    };
  },
};
</script>

<style scoped>
.add-to-cart .card {
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.04);
}

.add-to-cart h3 {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: #141414;
  margin-bottom: 0.5rem;
}

.add-to-cart .info p {
  font-family: "Inter";
  font-style: normal;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.02em;
}

.add-to-cart .info {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.add-to-cart .info p:first-of-type {
  font-weight: 400;
  color: rgba(20, 20, 20, 0.6);
}
.add-to-cart .info p:last-of-type {
  font-weight: 500;
  color: #1c8b71;
}

.add-to-cart .el-select {
  width: 3.5rem;
}

.add-to-cart :deep(.el-input__inner) {
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  letter-spacing: -0.02em;
  color: #1c8b71;
}

.add-to-cart :deep(.el-icon) {
  color: #1c8b71;
}

.add-to-cart .item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem 0;
  border-bottom: 1px solid #e6e6e6;
  padding-bottom: 0.5rem;
}

.add-to-cart .item .left span {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.02em;
  color: #141414;
  margin-left: 0.5rem;
}

.add-to-cart .item .right p {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: -0.02em;
}

.add-to-cart .item .right p.price {
  text-decoration-line: line-through;
  color: #9c9c9c;
}

.add-to-cart .item .right p.discount {
  color: #141414;
}

.add-to-cart .total {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.add-to-cart .total p {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.02em;
}

.add-to-cart .total p:first-of-type {
  color: rgba(20, 20, 20, 0.6);
}
.add-to-cart .total p:last-of-type {
  color: #141414;
}

.add-to-cart .el-button {
  margin-top: 1rem;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
}
</style>