// Vue Router에서 라우터 생성 및 히스토리 모드 설정을 위한 함수 가져오기
import { createRouter, createWebHistory } from 'vue-router'
// 총 페이지에 렌더링할 컴포넌트 가져오기
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    // 루트 경로 '/'에 대한 설정
    path: '/',
    // 라우트 이름, 프로그래밍적 네비게이션에 유용
    name: 'home',
    // 이 경로에서 렌더링할 컴포넌트
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]
// 라우터 인스턴스 생성 및 설정
const router = createRouter({
  // HTML5 히스토리 모드를 사용하여 깔끔한 URL 제공 (예: /about)
  history: createWebHistory(process.env.BASE_URL),
  // 애플리케이션의 경로와 컴포넌트를 매핑하는 라우트 배열
  routes
})

// 라우터 인스턴스를 다른 파일에서 사용할 수 있도록 내보내기
export default router
