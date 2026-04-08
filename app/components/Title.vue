<template>
  <div class="title"><b>{{ title }}</b></div>
</template>

<!-- lang="ts"를 명시해야 타입스크립트 문법이 동작함. -->
<script setup lang="ts">
interface Props {
  title: string;
}

defineProps<Props>();
</script>

<style scoped>
.title {
  padding: 20px 0;
  text-align: center;
}
</style>