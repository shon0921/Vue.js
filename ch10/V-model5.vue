<template>
  <input v-model="username" placeholder="아이디 입력">
  <p v-if="!username">아이디를 입력해주세요.</p>
</template>
<script>
export default {
  data() {
    return { username: '' }
  }
}
</script>
