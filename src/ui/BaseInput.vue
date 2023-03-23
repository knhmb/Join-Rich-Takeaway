<template>
  <el-input>
    <slot></slot>
  </el-input>
</template>

<style scoped>
.el-input :deep(.el-input__wrapper) {
  background: #f5f5f5;
  border-radius: 8px;
  padding: 0.4rem 1rem;
}
</style>