<template>
  <div class="delivery-address">
    <base-card>
      <div class="top">
        <h4>{{ $t("delivery_address") }}</h4>
        <img src="../../assets/edit.png" alt="" />
      </div>
      <p class="name">Address name</p>
      <p class="description">
        Address detail : lorem ipsum dolor sit amet, consectetur adipiscing
        elit.
      </p>
    </base-card>
  </div>
</template>

<style scoped>
.delivery-address .top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.delivery-address .top h4 {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: #141414;
}

.delivery-address .top img {
  width: 1.5rem;
  cursor: pointer;
}

.delivery-address p.name {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.02em;
  color: #141414;
}

.delivery-address p.description {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: -0.02em;
  color: rgba(20, 20, 20, 0.6);
  margin-top: 0.5rem;
}
</style>