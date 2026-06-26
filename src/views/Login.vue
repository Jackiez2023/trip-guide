<template>
  <div class="auth-page">
    <div class="auth-card">
      <h2>登录</h2>
      <p class="subtitle">欢迎回到 trip-guide</p>
      <form @submit.prevent="handleLogin">
        <div class="form-group">
          <label>手机号 / 邮箱</label>
          <input v-model="account" type="text" placeholder="请输入手机号或邮箱" required />
        </div>
        <div class="form-group">
          <label>密码</label>
          <input v-model="password" type="password" placeholder="请输入密码" required />
        </div>
        <div class="form-options">
          <label class="remember"><input type="checkbox" v-model="remember" /> 记住我</label>
        </div>
        <p class="error" v-if="errorMsg">{{ errorMsg }}</p>
        <button type="submit" class="btn-primary" :disabled="loading">
          {{ loading ? '登录中...' : '登录' }}
        </button>
      </form>
      <p class="switch-link">还没有账号？<router-link to="/register">立即注册</router-link></p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'

const router = useRouter()
const authStore = useAuthStore()

const account = ref('')
const password = ref('')
const remember = ref(false)
const loading = ref(false)
const errorMsg = ref('')

function handleLogin() {
  errorMsg.value = ''
  loading.value = true
  setTimeout(() => {
    const result = authStore.login(account.value, password.value)
    if (result.success) {
      if (remember.value) {
        localStorage.setItem('tripguide_remember', 'true')
      }
      router.push('/')
    } else {
      errorMsg.value = result.message
    }
    loading.value = false
  }, 500)
}
</script>

<style scoped>
.auth-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
}
.auth-card {
  background: #fff;
  border-radius: 12px;
  padding: 40px;
  width: 400px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
}
.auth-card h2 { font-size: 24px; text-align: center; margin-bottom: 4px; }
.subtitle { text-align: center; color: #999; font-size: 14px; margin-bottom: 28px; }
.form-group { margin-bottom: 18px; }
.form-group label { display: block; font-size: 14px; color: #555; margin-bottom: 6px; }
.form-group input {
  width: 100%;
  padding: 10px 14px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 14px;
  outline: none;
  transition: border-color 0.2s;
}
.form-group input:focus { border-color: #1a73e8; }
.form-options { display: flex; justify-content: space-between; margin-bottom: 18px; }
.remember { font-size: 13px; color: #888; display: flex; align-items: center; gap: 6px; cursor: pointer; }
.error { color: #e74c3c; font-size: 13px; margin-bottom: 12px; }
.btn-primary {
  width: 100%;
  padding: 12px;
  background: linear-gradient(135deg, #1a73e8, #0d47a1);
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: opacity 0.2s;
}
.btn-primary:hover { opacity: 0.9; }
.btn-primary:disabled { opacity: 0.6; cursor: not-allowed; }
.switch-link { text-align: center; margin-top: 20px; font-size: 14px; color: #888; }
.switch-link a { color: #1a73e8; }
</style>
