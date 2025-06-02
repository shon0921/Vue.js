<template>
  <div class="list-container">
    <!-- 리스트 아이템을 반복하며 스코프트 슬롯 호출 -->
    <ul>
      <slot v-for="item in items" :key="item.id" :item="item">
        <!-- 기본 콘텐츠: 부모가 슬롯 콘텐츠를 제공하지 않을 경우 표시 -->
        <li>{{ item.name }} (기본 콘텐츠</li>
      </slot>
    </ul>
  </div>
</template>

<script>
export default {
  name: "FancyList",
  props: {
    items: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.list-container {
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 5px 0;
  padding: 10px;
  background-color: #e0f7fa;
}
</style>