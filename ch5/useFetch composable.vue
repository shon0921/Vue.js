<!-- src/App.vue -->
<template>
  <div>
    <h1>사용자 목록</h1>
    <button @click="fetchData" :disabled="loading">데이터 가져오기</button>
    <div v-if="loading">로딩 중...</div>
    <div v-if="error">에러 : {{ error }}</div>
    <ul v-if="data">
      <li v-for="user in data" :key="user.id">{{user.name}}</li>
    </ul>
  </div>
</template>
<script>
import { useFetch } from './composables/useFetch';
export default {
  setup() {
    const {data, error, loading, fetchData} = useFetch(
        'https://jsonplaceholder.typicode.com/users'
    );
    return { data, error, loading, fetchData };
  }
}
</script>
<style>
h1 {
  color: #42b983;
}
</style>
