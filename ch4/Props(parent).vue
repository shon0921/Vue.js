<!-- src/App.vue (부모) -->
<template>
  <div>
    <h1>할 일 목록</h1>
    <todo-item :todo="task" />
  </div>
</template>
<script>
import TodoItem from "./components/TodoItem.vue";
export default {
  components: { TodoItem },
  data() {
    return { task: 'Vue 배우기' }
  }
}
</script>
