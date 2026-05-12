<script setup lang="ts">
import HeadTitle from '~/components/HeadTitle.vue';
import { NuxtLink } from '#components';
import IconPlus from '../assets/images/icon/ic_plus.svg';
import { useTodoListStore } from '~/stores/useTodoListStore';
import { storeToRefs } from 'pinia';

// layout custom 적용을 위한 코드
definePageMeta({
  layout: 'custom',
});


const store = useTodoListStore();
const { tasks } = storeToRefs(store);

function handleToggle(id: number) {
  store.toggleTask(id);
  const task = tasks.value.find(t => t.id === id);
  console.log('completed:', task?.completed);
}

</script>

<template>
  <main>
    <HeadTitle title="Tasks">
      <NuxtLink to="/addTask">
        <IconPlus/>
      </NuxtLink>
    </HeadTitle>

    <TodoItem :text="item.task" :priority="item.priority" :completed="item.completed" @update:modelValue="handleToggle(item.id)" v-for="item in tasks" :key="item.id"/>
  </main>
</template>
