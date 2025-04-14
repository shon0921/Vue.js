<!-- src/components/CounterComponent.vue -->
<template>
  <p>{{ count }}</p>
  <button @click="increment">증가</button>
</template>
<script>
import { ref, onMounted, onUmounted } from 'vue';
export default {
  setup() {
    const count = ref(0);
    const increment = () => {
      count.value++;
    };
    onMounted(() => {
      console.log('컴포넌트가 마운트됐어요!');
    });
    onUmounted(() => {
      console.log('컴포넌트가 제거됐어요!');
    });
    return { count, increment };
  }
}
</script>
