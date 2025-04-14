<template>
  <div>
    <h1>카운터: {{ count }}</h1>
    <p>두 배: {{ doubleCount }}</p>
    <button @click="increment">증가</button>
  </div>
</template>
<script>
import { ref, computed, watch, onMounted } from "vue";
export default {
  setup() {
    // ref로 반응형 데이터
    const count = ref(0);
    // 메서드
    const increment = () => {
      count.value++;
    };
    // 계산된 속성
    const doubleCount = computed(() => count.value * 2);
    // 감시자
    watch(count, (newValue) => {
      console.log(`카운트가 ${newValue}로 바뀌었어요!`);
    });
    // 라이프사이클 훅
    onMounted(() => {
      console.log('카운터가 시작됐습니다!');
    })
    return { count, increment, doubleCount};
  }
}
</script>
<style>
h1 {
  color: #42b983;
}
</style>
