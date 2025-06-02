<template>
  <div class="grandchild-container" :style="{ backgroundColor: theme.color }">
    <!-- 깊은 자식 컴포넌트: 주입받은 테마를 사용 -->
    <h4>깊은 자식 컴포넌트</h4>
    <!-- 주입받은 테마 색상 표시 -->
    <p>테마 색상: {{ theme.color }}</p>
    <!-- 랜덤 색상으로 테마 변경 버튼 -->
    <button @click="changeColor">랜덤 색상으로 변경</button>
  </div>
</template>

<script>
import { inject } from 'vue'

export default {
  name: 'ThemeGrandChild',
  setup() {
    // 'theme' 키로 제공된 데이터를 주입받음
    const theme = inject('theme')
    // 랜덤 색상 생성 및 테마 변경 메서드
    const changeColor = () => {
      theme.value.color = '#' + Math.floor(Math.random() * 16777215).toString(16)
    }
    return {theme, changeColor}
  }
}
</script>

<style scoped>
.grandchild-container {
  padding: 15px;
  margin: 10px;
  border-radius: 5px;
  color: white;
}
</style>