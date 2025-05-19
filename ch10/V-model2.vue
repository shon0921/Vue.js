<template>
  <input type="checkbox" v-model="isChecked">
  <p>체크 상태: {{ isChecked }}</p>
</template>
<script>
export default {
  data() {
    return { isChecked: false }
  }
}
</script>
