// Vue 애플리케이션 인스턴스를 생성하기 위한 함수 가져오기
import { createApp } from 'vue';
// 최상위 App 컴포넌트 사져오기
import App from './App.vue';
// 설정한 라우터 인스턴스 가져오기
import router from './router'
import { createPinia } from 'pinia'

// Vue 앱 생성
const app = createApp(App)

// 라우터와 Pinia 사용
app.use(router)
app.use(createPinia())

// 앱 마운트
app.mount('#app')
// createApp(App).mount('#app')
