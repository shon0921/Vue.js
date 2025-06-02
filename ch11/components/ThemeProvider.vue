<template>
  <div class="provider-container">
    <!-- 제목 표시 -->
    <h2>테마 제공 컴포넌트</h2>
    <!-- 테마 색상 입력 필드: 사용자가 색상을 입력하면 테마가 변경됨 -->
    <input v-model="theme.color" placeholder="테마 색상 입력 (예: $ff0000)" style="margin-bottom: 10px" />
    <!-- 현재 테마 색상 표시 -->
    <p>현재 테마 색상: {{ theme.color }}</p>
    <!-- 자식 컴포넌트 호출: 테마를 주임받아 사용 -->
    <ThemeConsumer />
  </div>
</template>

<script>
import { ref, provide } from 'vue';
import ThemeConsumer from './ThemeConsumer.vue';

export default {
  name: 'ThemeProvider', // 컴포넌트 이름: 다중 단어로 EsLint 규칙 준수
  components: {
    ThemeConsumer
  },
  setup() {
    // 반응형 테마 객체: 색상을 동적으로 변경 가능
    const theme = ref({ color: '#42b983' })
    // 'theme' 키로 테마 객체를 자손 컴포넌트에 제공
    provide('theme', theme)
    return { theme }
  }
}
</script>

<style scoped>
.provider-container {
  padding: 20px;
  text-align: center;
}
</style>