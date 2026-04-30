<script setup lang="ts">

interface Props {
  priority: 'low' | 'medium' | 'high';
}

defineProps<Props>();
</script>

<template>
  <span class="tag">{{ priority }}</span>
</template>

<style scoped>
.tag {
  color: #638773;
  font-size: 14px;
  font-weight: 500;
}
</style>

<script setup lang="ts">
</script>