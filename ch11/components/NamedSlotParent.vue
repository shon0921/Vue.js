<template>
  <BaseLayout>
    <!-- header 슬롯에 제목 콘텐츠 제공 -->
    <template #header>
      <h1>페이지 제목입니다</h1>
    </template>
    <!-- 기본 슬롯(default slot에 메인 콘텐츠 제공 -->
    <template #default>
      <p>이것은 메인 콘텐츠 영역입니다.</p>
      <p>여기에 추가적인 텍스트를 넣을 수 있습니다.</p>
    </template>
    <!-- footer 슬롯에 연락처 정보 제공 -->
    <template #footer>
      <p>연락처: example@email.com</p>
    </template>
  </BaseLayout>
</template>

<script>
import BaseLayout from "./BaseLayout.vue";

export default {
  name: "NamedSlotParent",
  components: {
    BaseLayout
  }
}
</script>