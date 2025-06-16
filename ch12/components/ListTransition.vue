<template>
  <div>
    <button @click="add">할 일 추가</button>
    <transition-group name="list" tag="ul" class="list-ul">
      <li
        v-for="item in items"
        :key="item.id"
        class="list-item"
        @click="remove(item.id)"
      >
        {{ item.text }} (클릭하면 삭제)
      </li>
    </transition-group>
  </div>
</template>

<script setup>
import { ref } from 'vue'
let id = 3
const items = ref([
  { id: 1, text: '공부하기' },
  { id: 2, text: '산책하기' },
])
function add() {
  id++
  items.value.push({ id, text: `새 할 일 ${id}` })
}
function remove(itemId) {
  items.value = items.value.filter(i => i.id !== itemId)
}
</script>
<style scoped>
.list-ul {
  padding: 0;
  margin-top: 22px;
}
.list-item {
  list-style: none;
  margin-bottom: 12px;
  padding: 12px 18px;
  background: #f3e5f5;
  border-radius: 10px;
  box-shadow: 0 2px 7px #e0e0e0;
  cursor: pointer;
  font-size: 1.05rem;
  transition: none;
}

/* 트랜지션 효과 (슬라이드+페이드) */
.list-enter-active, .list-leave-active {
  transition: all 0.45s cubic-bezier(.55,0,.1,1);
}
.list-enter-from {
  opacity: 0;
  transform: translateX(50px);
}
.list-enter-to {
  opacity: 1;
  transform: translateX(0);
}
.list-leave-from {
  opacity: 1;
  transform: translateX(0);
}
.list-leave-to {
  opacity: 0;
  transform: translateX(-50px);
}
</style>