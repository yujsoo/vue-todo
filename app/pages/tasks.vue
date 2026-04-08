<script setup lang="ts">
import Title from '~/components/Title';

// layout custom 적용을 위한 코드
definePageMeta({
  layout: 'custom',
});
</script>

<template>
  <main>
    <Title title="Tasks"/>
    <TodoItem/>
  </main>
</template>
