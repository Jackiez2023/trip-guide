<template>
  <div class="auth-page">
    <div class="auth-card">
      <h2>注册</h2>
      <p class="subtitle">创建你的 trip-guide 账号</p>
      <form @submit.prevent="handleRegister">
        <div class="form-group">
          <label>昵称</label>
          <input v-model="nickname" type="text" placeholder="2-12个字符" required />
        </div>
        <div class="form-group">
          <label>邮箱</label>
          <input v-model="email" type="email" placeholder="请输入邮箱" required />
        </div>
        <div class="form-group">
          <label>手机号</label>
          <input v-model="phone" type="tel" placeholder="请输入11位手机号" required />
        </div>
        <div class="form-group">
          <label>密码</label>
          <input v-model="password" type="password" placeholder="8-20位，含字母和数字" required />
        </div>
        <div class="form-group">
          <label>确认密码</label>
          <input v-model="confirmPassword" type="password" placeholder="再次输入密码" required />
        </div>
        <p class="error" v-if="errorMsg">{{ errorMsg }}</p>
        <p class="success" v-if="successMsg">{{ successMsg }}</p>
        <button type="submit" class="btn-primary" :disabled="loading">
          {{ loading ? '注册中...' : '注册' }}
        </button>
      </form>
      <p class="switch-link">已有账号？<router-link to="/login">立即登录</router-link></p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'

const router = useRouter()
const authStore = useAuthStore()

const nickname = ref('')
const email = ref('')
const phone = ref('')
const password = ref('')
const confirmPassword = ref('')
const loading = ref(false)
const errorMsg = ref('')
const successMsg = ref('')

function handleRegister() {
  errorMsg.value = ''
  successMsg.value = ''

  if (nickname.value.length < 2 || nickname.value.length > 12) {
    errorMsg.value = '昵称需2-12个字符'
    return
  }
  if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
    errorMsg.value = '请输入有效的邮箱地址'
    return
  }
  if (!/^1[3-9]\d{9}$/.test(phone.value)) {
    errorMsg.value = '请输入有效的11位手机号'
    return
  }
  if (password.value.length < 8 || password.value.length > 20 || !/[a-zA-Z]/.test(password.value) || !/\d/.test(password.value)) {
    errorMsg.value = '密码需8-20位，且包含字母和数字'
    return
  }
  if (password.value !== confirmPassword.value) {
    errorMsg.value = '两次密码输入不一致'
    return
  }

  loading.value = true
  setTimeout(() => {
    const result = authStore.register({
      nickname: nickname.value,
      email: email.value,
      phone: phone.value,
      password: password.value
    })
    if (result.success) {
      successMsg.value = '注册成功，即将跳转...'
      setTimeout(() => router.push('/'), 1000)
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
  width: 420px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
}
.auth-card h2 { font-size: 24px; text-align: center; margin-bottom: 4px; }
.subtitle { text-align: center; color: #999; font-size: 14px; margin-bottom: 24px; }
.form-group { margin-bottom: 14px; }
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
.error { color: #e74c3c; font-size: 13px; margin-bottom: 12px; }
.success { color: #27ae60; font-size: 13px; margin-bottom: 12px; }
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
