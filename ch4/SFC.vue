<!-- src/App.vue -->
<!-- Single File Component --!>
<template>
  <ul>
    <todo-item v-for="todo in todos" :key="todo.id" :todo="todo.text" />
  </ul>
</template>
<script>
import TodoItem from "./components/TodoItem.vue";
export default {
  components: { TodoItem },
  data() {
    return { todos: [{ id: 1, text: 'Vue 배우기'}] }
  }
}
</script>
