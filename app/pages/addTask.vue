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
const selectPriority = ref(''); // 선택한 task id를 저장할 ref. 초기 값은 null

function handleAdd() {
  if (!inputText.value.trim()) return false;
  store.addTask(inputText.value,selectPriority.value);
  inputText.value = '';
  console.log(tasks.value);
}

const options = [
  {
    id: 'priority_high',value: 'high' , label: 'High Priority'
  },
  {
    id: 'priority_medium',value: 'medium', label: 'Medium Priority'
  },
  {
    id: 'priority_low',value: 'low', label: 'Low Priority'
  }
]

</script>

<template>
  <main>
    <HeadTitle title="Add Tasks"/>
    <form action="" @submit.prevent="handleAdd">
      <input type="text" v-model="inputText">
      <div>
        <label v-for="{value, id, label} in options" :key="id">
          <input type="radio" :id="id" :value="value" name="priority" v-model="selectPriority"/>
          <span>{{label}}</span>
        </label>
<!--        <label for="priority_high" class="tag">-->
<!--          <input type="radio" id="priority_high" name="priority" value="high" v-model="selectPriority" />-->
<!--          <span>High Priority</span>-->
<!--        </label>-->
<!--        <label for="priority_medium" class="tag">-->
<!--          <input type="radio" id="priority_medium" name="priority" value="medium" v-model="selectPriority"/>-->
<!--          <span>Medium Priority</span>-->
<!--        </label>-->
<!--        <label for="priority_low" class="tag">-->
<!--          <input type="radio" id="priority_low" name="priority" value="low" v-model="selectPriority"/>-->
<!--          <span>Low Priority</span>-->
<!--        </label>-->
      </div>
      <button type="submit">제출</button>
    </form>
  </main>
</template>

<style scoped>
.tag {
  border-radius: 10px;
  background-color:#eee;
}

</style>
