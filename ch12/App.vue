<!-- App.vue -->
<template>
  <div>
    <h1>Vue 3 트랜지션 실습장</h1>
    <!-- 아래의 컴포넌트 중 하나씩만 남기고 나머지는 주석처리하면서 실습해보세요! -->
    <FadeTransition/>
    <SlideTransition/>
    <ScaleTransition/>
    <ListTransition/>
  </div>
</template>
<script setup>
// 각 예제 컴포넌트를 불러오기(import)
// 파일 위치와 이름이 다르면 경로도 꼭 맞게 써주세요!
import FadeTransition from "@/components/FadeTransition.vue";
import SlideTransition from "@/components/SlideTransition.vue";
import ScaleTransition from "@/components/ScaleTransition.vue";
import ListTransition from "@/components/ListTransition.vue";
</script>