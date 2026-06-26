<template>
  <div id="app-container">
    <header class="app-header">
      <div class="header-inner">
        <router-link to="/" class="logo">🏔️ trip-guide</router-link>
        <nav>
          <router-link to="/">首页</router-link>
          <template v-if="authStore.user">
            <router-link to="/profile">个人中心</router-link>
            <a href="#" @click.prevent="logout">退出</a>
          </template>
          <template v-else>
            <router-link to="/login">登录</router-link>
            <router-link to="/register">注册</router-link>
          </template>
        </nav>
      </div>
    </header>
    <main class="app-main">
      <router-view />
    </main>
    <footer class="app-footer">
      <p>&copy; 2026 trip-guide 旅行指南</p>
    </footer>
  </div>
</template>

<script setup>
import { useAuthStore } from './stores/auth'
import { useRouter } from 'vue-router'

const authStore = useAuthStore()
const router = useRouter()

function logout() {
  authStore.logout()
  router.push('/')
}
</script>

<style>
* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: 'PingFang SC', 'Microsoft YaHei', sans-serif; background: #f5f6fa; color: #333; }
a { text-decoration: none; color: inherit; }

.app-header {
  background: linear-gradient(135deg, #1a73e8, #0d47a1);
  color: #fff;
  padding: 0 24px;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
}
.header-inner {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 56px;
}
.logo { font-size: 22px; font-weight: 700; letter-spacing: 1px; }
nav { display: flex; gap: 20px; align-items: center; }
nav a { color: rgba(255,255,255,0.9); font-size: 15px; transition: color 0.2s; }
nav a:hover, nav a.router-link-active { color: #fff; }

.app-main { max-width: 1200px; margin: 0 auto; padding: 24px; min-height: calc(100vh - 120px); }
.app-footer { text-align: center; padding: 20px; color: #999; font-size: 13px; border-top: 1px solid #eee; }
</style>
