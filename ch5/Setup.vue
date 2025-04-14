<template>
  <p>{{ message }}</p>
</template>
<script>
export default {
  setup() {
    const message = 'Hello Composition API';
    return {message};
  }
}
</script>
