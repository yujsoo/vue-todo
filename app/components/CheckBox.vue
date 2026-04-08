<script setup lang="ts">

</script>

<template>
  <label class="checkbox">
    <input type="checkbox" id="checkbox"/>
    <i></i>
  </label>
</template>

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
  background-color: #fff;
}

.checkbox input:checked + i {
  border-color: #638773;
  background-color: #638773;
  background-image: url(/ic_check.svg);
}

</style>
