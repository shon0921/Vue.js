<template>
  <div class="consumer-container">
    <!-- 중간 컴포넌트: 테마를 직접 사용하지 않고 자식에게 전달 -->
    <h3>중간 컴포넌트</h3>
    <!-- 깊은 자식 컴포넌트 호출 -->
    <ThemeGrandChild/>
  </div>
</template>

<script>
import ThemeGrandChild from "./ThemeGrandChild";

export default {
  name: "ThemeConsumer",
  components: {
    ThemeGrandChild // 깊은 자식 컴포넌트 등록
  }
}
</script>

<style scoped>
.consumer-container {
  padding: 15px;
  margin: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>
