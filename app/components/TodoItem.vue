<script setup lang="ts">

interface Props {
  text: string;
}

defineProps<Props>();
</script>

<template>
  <div class="todo-item">
    <CheckBox/>
    <div class="con">
      <p>{{ text }}</p>
      <Tag/>
    </div>
  </div>
</template>

<style scoped>
.todo-item {
  display: flex;
  gap: 16px;
  padding: 12px 20px;
  align-items: center;
}

.todo-item .con {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
</style>
