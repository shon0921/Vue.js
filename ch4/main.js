// import { createApp } from 'vue'
// import App from './App.vue'
import { createApp } from 'vue';
import App from './App.vue';
import MyButton from './components/MyButton.vue';

const app = createApp(App);
app.component('MyButton', MyButton);  // 글로벌 등록
app.mount('#app');

// createApp(App).mount('#app')
