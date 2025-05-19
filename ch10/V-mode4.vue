<template>
  <input v-model="firstName" placeholder="이름">
  <input v-model="lastName" placeholder="성">
  <p>입력된 이름 {{ firstName }} {{ lastName }}</p>
</template>
<script>
export default {
  data() {
    return {
      firstName: '',
      lastName: '',
    }
  }
}
</script>
