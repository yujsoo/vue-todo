<script setup lang="ts">

interface Props {
  text: string;
  priority: 'low' | 'medium' | 'high';
  completed: boolean;
}

const props = defineProps<Props>();
const emit = defineEmits(["update:modelValue"]);

</script>

<template>
  <div class="todo-item">
    <CheckBox :modelValue="completed" @update:modelValue="emit('update:modelValue', $event)" />
    <div class="con">
      <p>{{ text }}</p>
      <Tag :priority="priority" />
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
