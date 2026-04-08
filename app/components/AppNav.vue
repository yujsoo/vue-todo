<script setup lang="ts">
import IconHome from '~/assets/images/icon/ic_home.svg';
import IconTask from '~/assets/images/icon/ic_task.svg';
import IconCalendar from '~/assets/images/icon/ic_calendar.svg';
</script>

<template>
  <nav>
    <NuxtLink to="/">
      <IconHome/>
      Home
    </NuxtLink>
    <NuxtLink to="/task">
      <IconTask/>
      Tasks
    </NuxtLink>
    <NuxtLink to="/calendar">
      <IconCalendar/>
      Calendar
    </NuxtLink>
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 95px;
  padding-top: 8px;
  border-top: 1px solid #F0F5F2;
}

nav a {
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
  color: #638773;
  font-weight: 600;
  font-size: 14px;
  text-align: center;
}

nav a svg {
  display: block;
  margin: 0 auto;
}
</style>
