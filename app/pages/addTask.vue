<script setup>
import HeadTitle from '~/components/HeadTitle.vue';
import { useTodoListStore } from '~/stores/useTodoListStore';
import { ref } from 'vue';
//
// const { tasks, addTask } = useTodoListStore();
import { storeToRefs } from 'pinia';

// layout custom 적용을 위한 코드
definePageMeta({
  layout: 'custom',
});

const store = useTodoListStore();
const { tasks } = storeToRefs(store);
const inputText = ref('');

function handleAdd() {
  if (!inputText.value.trim()) return false;
  store.addTask(inputText.value);
  inputText.value = '';
  console.log(tasks.value);
}
</script>

<template>
  <main>
    <HeadTitle title="Add Tasks"/>
    <form action="" @submit.prevent="handleAdd">
      <input type="text" v-model="inputText">
      <button type="submit">제출</button>
    </form>
  </main>
</template>
