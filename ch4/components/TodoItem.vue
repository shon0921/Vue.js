<template>
  <li>{{ todo }}</li>
</template>
<script>
export default {
  props: ['todo']
}
</script>
<style scoped>
li {
  color: #333;
}
</style>