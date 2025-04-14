<!-- src/App.vue -->
<template>
  <div>
    <h1>부모</h1>
    <child-component />
  </div>
</template>
<script>
import { provide, ref } from 'vue';
import ChildComponent from './components/ChildComponent.vue';
export default {
  components: { ChildComponent },
  setup() {
    const theme = ref('light');
    provide('theme', theme);
  }
}
</script>
