<template>
  <div>
    <h1>홈 페이지</h1>
    <p v-if="user">환영합니다, {{ user.name }}!</p>
    <button v-if="user" v-on:click="logout" class="btn btn-primary">로그아웃</button>
  </div>
</template>

<script setup>
import { useAuthStore } from '../stores/auth'
import { computed } from 'vue'
import {useRouter} from "vue-router";

const authStore = useAuthStore()
const router = useRouter()
const user = computed(() => authStore.user)

const logout = () => {
  authStore.logout()
  router.push({ name: 'login' })
}
</script>