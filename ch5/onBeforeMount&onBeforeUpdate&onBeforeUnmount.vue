<template>
  <div>
    <h1>카운터: {{ count }}</h1>
    <button @click="increment">증가</button>
  </div>
</template>
<script>
import {ref, onBeforeMount, onBeforeUpdate, onBeforeUnmount} from "vue";

export default {
  setup() {
    const count = ref(0);

    const increment = () => {
      count.value++;
    };
    onBeforeMount(() => {
      console.log('마운트 전: 초기 설정 준비');
    });
    onBeforeUpdate(() => {
      console.log(`업데이트 전: count는 ${count.value}`);
    });
    onBeforeUnmount(() => {
      console.log('제거 전: 정리 작업')
    });
    return {count, increment};
  }
}
</script>
<style>
h1 {
  color: #42b983;
}
</style>
