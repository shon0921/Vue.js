<template>
  <div v-if="showText">v-if로 보여요</div>
  <div v-show="showText">v-show로 보여요</div>
  <button @click="showText = !showText">토글</button>
</template>
<script>
export default {
  data() {
    return {showText: true}
  }
}
</script>

<!--토글로 보이게 안보이기-->
