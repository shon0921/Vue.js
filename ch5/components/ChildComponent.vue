<!-- src/components/ChildComponent.vue -->
<template>
  <div>
    <p>테마: {{ theme }}</p>
  </div>
</template>
<script>
import { inject } from 'vue';
export default {
  setup() {
    const theme = inject('theme');
    return { theme };
  }
}
</script>
