<template>
  <select v-model="selected">
    <option value="option1">옵션 1</option>
    <option value="option2">옵션 2</option>
  </select>
  <p>선택된 옵션: {{ selected }}</p>
</template>
<script>
export default {
  data() {
    return { selected: "option1" }
  }
}
</script>
