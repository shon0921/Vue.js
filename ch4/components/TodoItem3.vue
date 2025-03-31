<!-- src/components/TodoItem.vue (자식) -->
<template>
  <li>
    {{ todo }}
    <button @click="removeTodo">삭제</button>
  </li>
</template>
<script>
export default {
  props: ['todo'],
  methods: {
    removeTodo() {
      this.$emit('remove', this.todo);  // 'remove' 이벤트 발생
    }
  }
}
</script>
<style scoped>
li {
  color: #333;
}
</style>
