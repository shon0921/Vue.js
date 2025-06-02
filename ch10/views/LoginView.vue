<!-- src/views/LoginView.vue -->
<template>
  <div>
    <h2>로그인</h2>
    <!-- 폼 컴포넌트: 유효성 검증 스키마와 제출 핸들러 연결 -->
    <Form :validation-schema="schema" @submit="onSubmit">
      <div class="form-group">
        <label>이메일</label>
        <Field name="email" type="email" class="form-control" />
        <ErrorMessage name="email" class="text-danger" />
      </div>
      <div class="form-group">
        <label>비밀번호</label>
        <Field name="password" type="password" class="form-control" />
        <ErrorMessage name="password" class="text-danger" />
      </div>
      <button type="submit" class="btn btn-primary">로그인</button>
    </Form>
  </div>
  <button v-on:click="register" class="btn btn-primary">회원가입</button>
</template>

<script setup>
import {ErrorMessage, Field} from "vee-validate";
import * as Yup from 'yup'
import { useAuthStore } from '../stores/auth'
import { useRouter } from 'vue-router'

const authStore = useAuthStore()
const router = useRouter()

// 유효성 검증 스키마 정의
const schema = Yup.object().shape({
  email: Yup.string().email('유효한 이메일 주소를 입력해주세요').required('이메일은 필수입니다'),
  password: Yup.string().required('비밀번호는 필수입니다')
})

// 폼 제출 처리
const onSubmit = (values) => {
  authStore.login(values)
  router.push({ name: 'home' })
}

const register = () => {
  router.push({ name: 'register' })
}
</script>