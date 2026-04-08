<!-- 기본 레이아웃-->
<template>
  <div id="container">
    <div class="content">
      <slot/>
    </div>
    <AppNav/>
  </div>
</template>

<style scoped>
#container {
  padding: 0 20px 120px;
}
</style>

<script setup lang="ts">

</script>
