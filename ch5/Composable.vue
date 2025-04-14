<template>
  <div>
    <h1>카운터: {{ count }}</h1>
    <button @click="increment">증가</button>
  </div>
</template>
<script>
import { useCounter } from './composables/useCounter';

export default {
  setup() {
    const { count, increment } = useCounter();
    return { count, increment };
  }
}
</script>
<style>
h1 {
  color: #42b983;
}
</style>
