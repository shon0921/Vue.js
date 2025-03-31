<template>
  <img v-bind:src="imageUrl" alt="Vue Logo">
</template>
<script>
export default {
  data()  {
    return {imageUrl: "https://vuejs.org/images/logo.png"}
  }
}
</script>
