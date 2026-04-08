<script setup lang="ts">
import HeadTitle from '~/components/HeadTitle.vue';
import { NuxtLink } from '#components';
import IconPlus from '../assets/images/icon/ic_plus.svg';

// layout custom 적용을 위한 코드
definePageMeta({
  layout: 'custom',
});
</script>

<template>
  <main>
    <HeadTitle title="Tasks">
      <NuxtLink to="/addTask">
        <IconPlus/>
      </NuxtLink>
    </HeadTitle>
    <TodoItem text="Complete project proposal"/>
  </main>
</template>
