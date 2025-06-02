<template>
  <div>
    <!-- 게시글 목록 제목 -->
    <h1>게시글 목록</h1>
    <!-- 게시글 목록 표시 -->
    <ul>
      <!-- 각 게시글을 동적 경로 링크로 표시 -->
      <li v-for="post in posts" :key="post.id">
        <router-link :to="`/post/${post.id}`">{{ post.title }}</router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  setup() {
    // 샘플 게시글 데이터
    const posts = [
      { id: 1, title: 'test1', content: '테스트 1' },
      { id: 2, title: 'test2', content: '테스트 2'},
      { id: 3, title: 'test3', content: '테스트 3'}
    ];
    // 템플릿에서 사용할 데이터 반환
    return { posts };
  }
}
</script>