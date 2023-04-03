<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<style scoped>
.container {
  padding: 1rem 16rem;
}

@media screen and (max-width: 1370px) {
  .container {
    padding: 1rem 4rem;
  }
}

@media screen and (max-width: 991px) {
  .container {
    padding: 1rem 1rem;
  }
}
</style>