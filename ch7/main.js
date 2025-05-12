// Vue 애플리케이션 인스턴스를 생성하기 위한 함수 가져오기
import { createApp } from 'vue';
// 최상위 App 컴포넌트 사져오기
import App from './App.vue';
import MyButton from './components/MyButton.vue';
// 설정한 라우터 인스턴스 가져오기
import router from './router'

const app = createApp(App).use(router);
app.component('MyButton', MyButton);  // 글로벌 등록
app.mount('#app');

// createApp(App).mount('#app')
