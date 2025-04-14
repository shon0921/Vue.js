<template>
  <p>{{ state.count }}  - {{ state.message }}</p>
</template>
<script>
import { reactive } from 'vue';
export default {
  setup() {
    const state = reactive({
      count: 0,
      message: 'Hello'
    });
    const increment = () => {
      state.count++;
    };
    return { state, increment };
  }
}
</script>
