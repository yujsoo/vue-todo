<script setup lang="ts">
</script>

<template>
  <div class="todo-item">
    <CheckBox/>
    <div class="con">
      <p>Complete project proposal</p>
      <Tag/>
    </div>
  </div>
</template>

<style scoped>
.todo-item {
  display: flex;
  gap: 16px;
  align-items: center;
}

.todo-item .con {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
</style>
