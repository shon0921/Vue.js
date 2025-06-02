// Vue Router에서 필요한 함수 가져오기
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import PostList from '../views/PostList.vue';
import PostView from '../views/PostView.vue';
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";
import { useAuthStore } from "../stores/auth";
import AccountView from "../views/AccountView.vue";

// 라우터 인스턴스 생성
const router = createRouter({
  // 해시 모드 사용
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',  // 홈 경로
      name: 'home',
      component: HomeView,
      meta: { requiresAuth: true }  // 이 페이지에 접근하려면 인증 필요
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/posts', // 게시글 목록 경로
      name: 'posts',
      component: PostList
    },
    {
      path: '/post/:id', // 동적 경로, :id는 변수
      name: 'post',
      component: PostView
    },
    {
      path: '/account',
      name: 'account',
      component: AccountView
    },
    {
      // 모든 정의되지 않은 경로를 처리
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('../views/NotFoundView.vue')  // 지연 로딩
    }
  ]
})

// 네비세이션 가드: 인증 상태에 따라 페이지 접근 제어
router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()
  if (to.meta.requiresAuth && !authStore.isLoggedIn) {
    // 인증이 필요한 페이지에 접근하려는데 로그인하지 않았다면 로그인 페이지로 리디렉트
    next({ name: 'login' })
  } else if ((to.name === 'login' || to.name === 'register') && authStore.isLoggedIn) {
    // 로그인 또는 회원가입 페이지에 접근하려는데 이미 로그인했다면 홈페이지로 리디엑트
    next({ name: 'home' })
  } else {
    // 그 외의 경우 정상적으로 페이지 이동
    next()
  }
})

export default router;