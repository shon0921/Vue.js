<template>
  <h1>{{ text }}</h1>
  <button v-on:click="changeText">클릭!</button>
</template>
<script>
export default {
  data() {
    return { text: 'Hello Vue 3' }
  },
  methods: {
    changeText() {
      this.text = 'Vue.js는 재밌어요!';
    }
  }
}
</script>

<!-- 화면에 "Hello Vue 3“ 출력 ({{ }}) --!>
<!-- 버튼 클릭 시 메시지 변경 (v-on, methods)  --!>
<!-- 변경 시 메시지는 자유롭게 작성 --!>
