<!-- FadeTransition.vue -->
<template>
  <div>
    <button @click="show = !show">
      {{ show ? '숨기기' : '보이기'}}
    </button>
    <!-- 트랜지션을 적용할 엘리먼트 -->
    <transition name="fade">
      <p v-if="show" class="fade-target">
        이 텍스트는 데이드 인/아웃됩니다!
      </p>
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const show = ref(true);
</script>

<style scoped>
/* transition name="fade"일 때 아래 클래스 네이밍 필수! */
/* 트랜지션 진입 */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
/* 시작 상태 (보여줄 때) */
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
/* 끝 상태 (사라질 때) */
.fade-enter-to, .fade-leave-to {
  opacity: 1;
}
</style>