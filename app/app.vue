<script setup>
import '@/assets/reset.css';
</script>

<template>
  <!-- 레이아웃 설정하려면 NuxtLayout -->
  <NuxtLayout>
    <!-- 보조 기술에 페이지 제목 변경을 알림으로써 접근성 향샹 -->
    <NuxtRouteAnnouncer/>
    <NuxtPage/>
  </NuxtLayout>
</template>
