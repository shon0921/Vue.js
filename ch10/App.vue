<template>
  <div id="app">
    <!-- 로그인 후에 네비게이션 바 보이게 하기 -->
    <nav v-if="user">
      <router-link to="/">홈</router-link> |
      <router-link to="/posts">게시글</router-link> |
      <router-link to="/account">자기소개</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth'
import { computed } from 'vue'


const authStore = useAuthStore()
const user = computed(() => authStore.user)
</script>

<style>
nav {
  background-color: #2c3e50;
  padding: 10px;
  margin-bottom: 20px;
}
nav a {
  color: white;
  margin-right: 10px;
  text-decoration: none;
}
</style>