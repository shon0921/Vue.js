<template>
  <input v-model="message">
  <p>입력한 내용: {{message}}</p>
</template>
<script>
export default {
  data() {
    return {message: ''}
  }
}
</script>
