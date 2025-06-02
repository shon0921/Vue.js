<!-- src/views/RegisterView.vue -->
<template>
  <div>
    <h2>회원가입</h2>
    <!-- Form 컴포넌트: 검증 스키마와 제출 핸들러를 연결 -->
    <Form :validation-schema="schema" @submit="onSubmit">
      <!-- 제목 필드: 선택 박스 -->
      <div class="form-group">
        <label>제목</label>
        <Field name="title" as="select" class="form-control">
          <option value="">제목 선택</option>
          <option value="Mr">Mr</option>
          <option value="Mrs">Mrs</option>
          <option value="Miss">Miss</option>
        </Field>
        <ErrorMessage name="title" class="text-danger" />
      </div>
      <!-- 이름 필드 -->
      <div class="form-group">
        <label>이름</label>
        <Field name="firstName" class="form-control" />
        <ErrorMessage name="firstName" class="text-danger" />
      </div>
      <!-- 성 필드 -->
      <div class="form-group">
        <label>성</label>
        <Field name="lastName" class="form-control" />
        <ErrorMessage name="lastName" class="text-danger" />
      </div>
      <!-- 생년월일 필드: 날짜 입력 -->
      <div class="form-group">
        <label>생년월일</label>
        <Field name="dob" type="date" class="form-control" />
        <ErrorMessage name="dob" class="text-danger" />
      </div>
      <!-- 이메일 필드 -->
      <div class="form-group">
        <label>이메일</label>
        <Field name="email" type="email" class="form-control" />
        <ErrorMessage name="email" class="text-danger" />
      </div>
      <!-- 비밀번호 필드 -->
      <div class="form-group">
        <label>비밀번호</label>
        <Field name="password" type="password" class="form-control" />
        <ErrorMessage name="password" class="text-danger" />
      </div>
      <!-- 비밀번호 확인 필드 -->
      <div class="form-group">
        <label>비밀번호 확인</label>
        <Field name="confirmPassword" type="password" class="form-control" />
        <ErrorMessage name="confirmPassword" class="text-danger" />
      </div>
      <!-- 약관 동의 체크박스 -->
      <div class="form-group form-check">
        <Field name="acceptTerms" type="checkbox" class="form-check-input" />
        <label class="form-check-label">약관 동의</label>
        <ErrorMessage name="acceptTerms" class="text-danger" />
      </div>
      <!-- 제출 버튼 -->
      <button type="submit" class="btn btn-primary">가입하기</button>
    </Form>
  </div>
</template>

<script setup>
import { Form, Field, ErrorMessage} from "vee-validate";
import * as Yup from 'yup'
import { useAuthStore } from '../stores/auth'
import { useRouter } from 'vue-router'

const authStore = useAuthStore()
const router = useRouter()

// 유효성 검증 스키마 정의
const schema = Yup.object().shape({
  title: Yup.string().required('제목은 필수입니다'),
  firstName: Yup.string().required('이름은 필수입니다'),
  lastName: Yup.string().required('성은 필수입니다'),
  dob: Yup.string().required('생년월일은 필수입니다').nullable(),
  email: Yup.string().email('유효한 이메일 주소를 입력해주세요').required('이메일은 필수입니다'),
  password: Yup.string().min(6, '비밀번호는 최소 6자리 이상이어야 합니다').required('비밀번호는 필수입니다'),
  confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], '비밀번호가 일치하지 않습니다')
      .required('비밀번호 확인은 필수입니다'),
  acceptTerms: Yup.boolean().oneOf([true], '약관에 동의해야 합니다')
})

// 폼 제출 처리
const onSubmit = (values) => {
  authStore.register(values)
  router.push({ name: 'home' })
}

</script>