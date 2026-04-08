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

</script>

<template>
  <main>
    <HeadTitle title="Tasks">
      <NuxtLink to="/addTask">
        <IconPlus/>
      </NuxtLink>
    </HeadTitle>

    <TodoItem :text="item.task" v-for="item in tasks" :key="item.id"/>
  </main>
</template>
