<!-- SlideTransititon,vue -->
<template>
  <div>
    <button @click="show = !show">
      {{ show ? '슬라이드 아웃(숨기기)' : '슬라이드 인(보이기)'}}
    </button>
    <transition name="slide-horizontal">
      <div v-if="show" class="slide-box">
        오른쪽에서 왼쪽으로 슬라이드!
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const show = ref(true);
</script>

<style scoped>
/* 슬라이드 인/아웃 - 수평 방향 */
.slide-horizontal-enter-active, .slide-horizontal-leave-active {
  transition: all 0.5s cubic-bezier(.55, 0, .1, 1);
}
.slide-horizontal-enter-from {
  transform: translateX(100%);  /* 오른쪽 바깥에서 시작 */
  opacity: 0;
}
.slide-horizontal-enter-to {
  transform: translateX(0);
  opacity: 1;
}
.slide-horizontal-leave-from {
  transform: translateX(0);
  opacity: 1;
}
.slide-horizontal-leave-to {
  transform: translateX(-100%); /* 왼쪽 바깥으로 퇴장 */
  opacity: 0;
}

.slide-box {
  background: #ffd180;
  padding: 20px;
  margin-top: 16px;
  border-radius: 12px;
  min-width: 180px;
  text-align: center;
  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.09);
}
</style>