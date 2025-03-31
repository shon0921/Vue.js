<template>
  <div v-if="isLoggedIn">환영합니다!</div>
</template>
<script>
export default {
  data() {
    return {isLoggedIn: true}
  }
}
</script>
