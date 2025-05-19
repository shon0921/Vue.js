<template>
  <div>
    <!-- 게시글 목록 제목 -->
    <h1>게시글 목록</h1>
    <!-- 게시글 목록 표시 -->
    <ul>
      <!-- 각 게시글을 동적 경로 링크로 표시 -->
      <li v-for="post in posts" :key="post.id">
        <router-link to="`/post/${post.id}`">{{ post.title }}</router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  setup() {
    // 샘플 게시글 데이터
    const posts = [
      { id: 1, title: 'Vue.js 배우기', content: 'Vue.js는 정말 재밌어요!' },
      { id: 2, title: 'SPA 만들기', content: 'SPA는 빠르고 부드럽습니다.'}
    ];
    // 템플릿에서 사용할 데이터 반환
    return { posts };
  }
}
</script>