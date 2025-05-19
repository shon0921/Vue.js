<template>
  <input v-model="email" placeholder="이메일 입력">
  <p v-if="email && !isValidEmail(email)">올바른 이메일 형식을 입력해주세요.</p>
</template>
<script>
export default {
  data() {
    return { email: "" }
  },
methods: {
    isValidEmail(email) {
      
      return /\s+@\s+\/\s+/.test(email); 
    }
  }
}
</script>
