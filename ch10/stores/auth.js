// src/stores/auth.js
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth' , {
    state: () => ({
        token: localStorage.getItem('token') || null,   // 로컬 스토리지에서 토큰 가져오기
        user: null
    }),
    getters: {
        isLoggedIn: (state) => !!state.token    // 토큰이 존재하면 로그인 상태로 간주
    },
    actions: {
        login() {
            // 실제로는 백엔드 API 호출 후 토큰 저장
            // 여기서는 더미 데이터로 시뮬레이션
            this.token = 'dummy-token'
            localStorage.setItem('token', this.token)
            this.user = { name: '손해성' } // 더미 사용자 데이터
        },
        register(userData) {
            // 실제로는 백엔드 API 호출 후 토큰 저장
            // 여기서는 더미 데이터로 시뮬레이션
            this.token = 'dummy-token'
            localStorage.setItem('token', this.token)
            this.user = {
                name : `${userData.firstName} ${userData.lastName}`,
                email : userData.email
            }
        },
        logout() {
            this.token = null
            localStorage.removeItem('token')
            this.user = null
        }
    }
})
