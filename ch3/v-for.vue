<template>
  <ul>
    <li v-for="todo in todos" :key="todo.id">
      {{ todo.text }}
    </li>
  </ul>
</template>
<script>
export default {
  data() {
    return {
      todos: [
        { id: 1, text: 'Vue 배우기' },
        { id: 2, text: '프로젝트 시작하기'}
      ]
    }
  }
}
</script>

<!--흔히 보던 for-->
