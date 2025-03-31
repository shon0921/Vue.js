<!-- src/App.vue (부모) -->
<template>
  <div>
    <h1>할 일 목록</h1>
    <todo-item :todo="task" @remove="handleRemove" />
  </div>
</template>
<script>
import TodoItem from "./components/TodoItem3.vue";
export default {
  components: { TodoItem },
  data() {
    return { task: 'Vue 배우기' }
  },
  methods: {
    handleRemove(todo) {
      alert(`${todo} 삭제됨!`);
    }
  }
}
</script>
