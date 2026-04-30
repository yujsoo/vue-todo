import { defineStore } from 'pinia';

interface Task {
  id: number;
  task: string;
  priority: 'high' | 'medium' | 'low';
}

export const useTodoListStore = defineStore('todo', {
  state: () :{ tasks : Task[] } => ({
    tasks: [],
  }),
  getters: {
    // 스토어의 computed 속정
  },
  actions: {
    // methods
    // 파라미터 타입을 Task['priority']로 참조 (인터페이스가 바뀌면 자동으로 따라가는 좋은 패턴)
    addTask( text:string, priority : Task['priority'] ) {
      this.tasks.push({ id: Date.now(), task: text, priority: priority });
    },
  },
});