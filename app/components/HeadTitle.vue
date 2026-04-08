<!-- lang="ts"를 명시해야 타입스크립트 문법이 동작함. -->
<script setup lang="ts">
interface Props {
  title: string;
}

defineProps<Props>();

</script>

<template>
  <div class="head-title">
    <div class="title"><b>{{ title }}</b></div>
    <div class="right-ctrl-btn">
      <slot/>
      <!-- 오른쪽에 버튼이 올 경우 slot 추가
           - slot은 빈 태그로 적용된다.
           - 기본 폴백 버튼이 필요하다면 컴포넌트 내에 넣기
       -->
    </div>
  </div>
</template>

<style scoped>
.head-title {
  display: flex;
  position: relative;
  height: 72px;
  padding: 0 20px;
  align-items: center;
}

.title {
  width: 100%;
  text-align: center;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.right-ctrl-btn {
  position: relative;
  z-index: auto;
  margin-left: auto;
}
</style>