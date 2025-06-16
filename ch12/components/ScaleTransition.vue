<!-- ScaleTransition.vue -->
<template>
  <div>
    <h3>마우스를 카드 위에 올리면 살짝 커집니다!</h3>
    <div class="card-list">
      <div
        class="card"
        v-for="n in 4"
        :key="n"
        tabindex="0"
        >
        <img :src="`https://picsum.photos/200/120?random=${n}`" alt="thumb" />
        <div class="card-title">Card {{ n }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
//별도 스크립트 필요 없음
</script>

<style scoped>
.card-list{
  display: flex;
  gap: 20px;
  margin-top: 24px;
}
.card{
  width: 200px;
  background: #fff9c4;
  border-radius: 14px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  cursor: pointer;
  transition:
      transform 0.22s cubic-bezier(.55, 0, .1, 1),
      box-shadow 0.22s;
  outline: none;
}
.card img {
  width: 100%;
  height: 120px;
  object-fit: cover;
  display: block;
}
.card-title{
  font-size: 1.1rem;
  font-weight: bold;
  text-align: center;
  padding: 14px 0;
}
/* scale 트랜지션 효과 */
.card:hover,
.card:focus {
  transform: scale(1.08);
  box-shadow: 0 4px 22px rgba(0, 0, 0, 0.18);
  z-index: 2;
}
</style>