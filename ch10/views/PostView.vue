<template>
  <div>
    <!-- 게시글 제목 -->
    <h1>{{ post.title }}</h1>
    <!-- 게시글 내용 -->
    <p>{{ post.content }}</p>
    <!-- 뒤로 가기 버튼 -->
    <button @click="goBack">목록으로</button>
  </div>
</template>
<script>
// 경로와 라우터 접근 함수 가져오기
import { useRoute, useRouter } from "vue-router";

export default {
  setup() {
    // 현재 경로 정보 가져오기
    const route = useRoute();
    // 라우터 인스턴스 가져오기
    const router = useRouter();
    // 샘플 게시글 데이터 (실제로는 API 호출 가능)
    const posts = [
      { id: '1', title: 'test1', content: 'test1'},
      { id: '2', title: 'test2', content: 'test2'},
      { id: '3', title: 'test3', content: 'test3'}
    ];
    // 경로의 id 파라미터롤 게시글 찾기
    const post = posts.find(p => p.id === route.params.id);
    // 게시글 목록으로 이동하는 함수
    const goBack = () => {
      router.push('/posts');
    };
    // 템플릿에서 사용할 데이터 반환
    return{ post, goBack };
  }
}
</script>