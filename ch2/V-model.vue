<template>
  <input v-model="message" placeholder="Y택스트를 입력하세요">
  <p>입력된 텍스트: {{ message }}</p>
</template>
<script>
export default {
  data() {
    return { message: '' }
  }
}
</script>
