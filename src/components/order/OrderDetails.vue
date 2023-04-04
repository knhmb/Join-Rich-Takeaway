<template>
  <div class="order-details">
    <div class="box">
      <h4>{{ $t("order_details") }}</h4>
      <div class="order-info">
        <div class="single-info">
          <p>{{ $t("order_number") }}:</p>
          <div class="pill">#1234</div>
        </div>
        <div class="single-info">
          <p>{{ $t("order_from") }}:</p>
          <p class="dark">Papadam Indian Authentic</p>
        </div>
        <div class="single-info">
          <p>{{ $t("delivery_address") }}:</p>
          <p class="dark">
            Address detail lorem ipsum dolor sit amet, consectetur adipiscing
            elit...
          </p>
        </div>
      </div>
      <div class="order-summary">
        <div class="first-section">
          <div class="item">
            <div class="top">
              <div class="left">
                <span>1x</span>
                <span>Product name</span>
              </div>
              <div class="right">
                <p>HK$ 58.0</p>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="top">
              <div class="left">
                <span>1x</span>
                <span>Product name</span>
              </div>
              <div class="right">
                <p>HK$ 58.0</p>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="top">
              <div class="left">
                <span>1x</span>
                <span>Product name</span>
              </div>
              <div class="right">
                <p>HK$ 58.0</p>
              </div>
            </div>
          </div>
        </div>
        <div class="second-section">
          <div class="subtotal">
            <p class="grey">{{ $t("subtotal") }}</p>
            <p class="grey">HK$ 174.0</p>
          </div>
          <div class="delivery-fee">
            <p class="grey">{{ $t("delivery_fee") }}</p>
            <p class="grey">HK$ 15.0</p>
          </div>
        </div>
        <div class="total">
          <p>{{ $t("total") }}</p>
          <p>HK$ 189.0</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.order-details {
  margin-top: 1.5rem;
}

.order-dialog .box {
  border: 1px solid #e6e6e6;
  border-radius: 4px;
  padding: 1rem;
}

.order-details h4 {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  letter-spacing: -0.02em;
  color: #141414;
  margin-bottom: 1rem;
}

.order-details p,
.order-summary span {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: -0.02em;
  color: rgba(20, 20, 20, 0.6);
}

.order-details .order-info {
  margin-bottom: 2rem;
}

.order-details .order-info .single-info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.order-details .order-info .single-info:last-of-type {
  margin-bottom: 0;
}

.order-details .order-info .single-info .pill {
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(28, 139, 113, 0.1);
  border-radius: 14px;
  width: 3.2rem;
  height: 1.4rem;
  color: #1c8b71;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: -0.02em;
}

.order-details p.dark {
  color: #141414;
}

.order-summary .top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.order-summary .top .left span:first-of-type {
  margin-right: 0.5rem;
}

.order-summary .item:not(:last-of-type) {
  margin-bottom: 1rem;
}

.order-summary .first-section {
  border-bottom: 1px solid #e6e6e6;
  padding-bottom: 1rem;
}

.order-summary .second-section {
  margin-top: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e6e6e6;
}

.order-summary .second-section .subtotal {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.order-summary .second-section .delivery-fee,
.order-summary .total {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.order-summary .total {
  margin-top: 1rem;
}

.order-summary .total p {
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.02em;
  color: rgba(20, 20, 20, 0.8);
}
</style>