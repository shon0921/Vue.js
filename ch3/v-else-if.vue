<template>
  <div v-if="score >= 90">A등급</div>           <!-- 흔히 보는 if else -->
  <div v-else-if="score >= 80">B등급</div>
  <div v-else>다시 시도하세요</div>
</template>
<script>
export default {
  data() {
    return {score: 80}
  }
}
</script>
