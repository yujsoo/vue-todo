<template>
  <label class="checkbox">
    <input type="checkbox"/>
    <i></i>
  </label>
</template>

<script setup lang="ts">

</script>

<style scoped>
.checkbox {
  display: flex;
}

.checkbox input {
  display: none;
}

.checkbox i {
  display: block;
  width: 20px;
  height: 20px;
  border: 2px solid #DBE5DE;
  border-radius: 4px;
}

</style>
