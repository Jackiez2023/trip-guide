import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  const user = ref(JSON.parse(localStorage.getItem('tripguide_user') || 'null'))

  const isLoggedIn = computed(() => !!user.value)

  function register(userData) {
    const users = JSON.parse(localStorage.getItem('tripguide_users') || '[]')
    const exists = users.find(u => u.email === userData.email || u.phone === userData.phone)
    if (exists) return { success: false, message: '该邮箱或手机号已注册' }
    const newUser = { ...userData, id: Date.now(), createdAt: new Date().toISOString() }
    users.push(newUser)
    localStorage.setItem('tripguide_users', JSON.stringify(users))
    user.value = newUser
    localStorage.setItem('tripguide_user', JSON.stringify(newUser))
    return { success: true }
  }

  function login(account, password) {
    const users = JSON.parse(localStorage.getItem('tripguide_users') || '[]')
    const found = users.find(u =>
      (u.email === account || u.phone === account) && u.password === password
    )
    if (!found) return { success: false, message: '账号或密码错误' }
    user.value = found
    localStorage.setItem('tripguide_user', JSON.stringify(found))
    return { success: true }
  }

  function logout() {
    user.value = null
    localStorage.removeItem('tripguide_user')
  }

  return { user, isLoggedIn, register, login, logout }
})
