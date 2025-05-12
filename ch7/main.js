// Vue Router에서 라우터 생성 및 히스토리 모드 설정을 위한 함수 가져오기
import { createRouter, createWebHistory } from 'vue-router'
// 총 페이지에 렌더링할 컴포넌트 가져오기
import HomeView from '../views/HomeView.vue'

// 라우터 인스턴스 생성
const router = createRouter({
  // HTML5 히스토리 모드를 사용하여 깔끔한 URL 제공 (예: /about)
  history: createWebHistory(process.env.BASE_URL),
  // 애플리케이션의 경로와 컴포넌트를 매핑하는 라우트 배열
  routes: [
    {
      path: '/', //루트경로
      name: 'home', // 라우트 이름
      component: HomeView // 렌더링 컴포넌트
    }
  ]
});

// 라우터 인스턴스를 다른 파일에서 사용할 수 있도록 내보내기
export default router
