<template>
  <footer>
    <base-container>
      <p>Join Rich International Limited</p>
      <p @click="$router.push('privacy-policy')" class="right">
        {{ $t("privacy_policy") }}
      </p>
    </base-container>
  </footer>
</template>

<style scoped>
footer {
  background: #ffffff;
}

footer .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

footer p {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: #141414;
}

footer p.right {
  font-weight: 400;
  cursor: pointer;
}
</style>