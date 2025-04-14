<template>
  <p>{{ count }}</p>
  <button @click="increment">증가</button>
</template>
<script>
import { ref } from 'vue';
export default {
  setup() {
    const count = ref(0);
    const increment = () => {
      count.value++;
    };
    return {count, increment};
  }
}
</script>
