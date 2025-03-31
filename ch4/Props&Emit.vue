<!-- src/App.vue -->
<template>
  <div>
    <h1>할 일 목록</h1>
    <todo-item
        v-for="todo in todos"
        :key="todo.id"
        :todo="todo"
        @toggle="toggleTodo"/>
  </div>
</template>
<script>
import TodoItem from "./components/TodoItem4.vue";
export default {
  components: { TodoItem },
  data() {
    return {
      todos: [
        { id: 1, text: 'Vue 비우기', done: false }
      ]
    }
  },
  methods: {
    toggleTodo(todo) {
      todo.done = !todo.done;
    }
  }
}
</script>
