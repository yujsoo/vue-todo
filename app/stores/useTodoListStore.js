import { defineStore } from 'pinia';

export const useTodoListStore = defineStore('todo', {
  state: () => ({
    tasks: [],
  }),
  getters: {
    // 스토어의 computed 속정
  },
  actions: {
    // methods
    addTask(text) {
      this.tasks.push({ id: Date.now(), task: text });
    },
  },
});