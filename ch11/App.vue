<template>
  <div id="app">
    <h1>Vue.js 3 슬롯 예제</h1>

    <!-- 이름 있는 슬롯 예제 -->
    <h2>1. 이름 있는 슬롯</h2>
    <NamedSlotParent />

    <!-- 스코프드 슬롯 예제 -->
    <h2>2. 스코프드 슬롯</h2>
    <ScopedSlotParent />
  </div>
</template>

<script>
import NamedSlotParent from "@/components/NamedSlotParent.vue";
import ScopedSlotParent from "@/components/ScopedSlotParent.vue";

export default {
  name: "App",
  components: {
    NamedSlotParent,
    ScopedSlotParent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h2 {
  margin-top: 40px;
}
</style>
