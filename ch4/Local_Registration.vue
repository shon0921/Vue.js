<!-- src/App.vue -->
<template>
  <div>
    <h1>Vue 앱</h1>
    <my-button /> <!-- 어디서든 사용 가능 -->
  </div>
</template>
<script>
import MyButton from "./components/MyButton2.vue";

export default {
  components: {
    MyButton // 지역 등록
  }
}
</script>
