<template>
  <div class="container">
    <!-- 헤더 섹션: header 슬롯에 부모가 제공한 콘텐츠가 렌더링됨 -->
    <header>
      <slot name="header"></slot>
    </header>
    <!-- 메인 섹션: 기본 슬롯(default slot)에 부모가 제공한 콘텐츠가 렌더링됨 -->
    <main>
      <slot></slot>
    </main>
    <!-- 푸터 섹션: footer 슬롯에 부모가 제공한 콘텐츠가 렌더링됨 -->
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script>
export default {
  name: "BaseLayout"  // 컴포넌트 이름: 다중 언어로 ESLint 규칙 준수
}
</script>

<style scoped>
.container {
  border: 1px solid #ccc;
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
}
header, main, footer {
  margin: 10px 0;
  padding: 10px;
  background-color: #f9f9f9;
}
</style>