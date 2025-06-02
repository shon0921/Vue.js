<template>
  <FancyList :items="items">
    <!-- 스코프드 슬롯: 자식 컴포넌트로부터 item 데이터를 받아 렌더링 -->
    <template #default="slotProps">
      <li>
        {{ slotProps.item.name }} - 가격: {{ slotProps.item.price }}dnjs
        <button @click="slotProps.item.price += 100">가격 증가</button>
      </li>
    </template>
  </FancyList>
</template>
<script>
import FancyList from "./FancyList.vue";

export default {
  name: "ScopedSlotParent",
  components: {
    FancyList
  },
  data() {
    return {
      items: [
        { id: 1, name: '사과', price: 1000 },
        { id: 2, name: '바나나', price: 1500 },
        { id: 3, name: '포도', price: 2000 }
      ]
    }
  }
}
</script>