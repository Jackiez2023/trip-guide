<template>
  <div class="profile-page" v-if="authStore.user">
    <div class="profile-header">
      <div class="avatar">{{ authStore.user.nickname.charAt(0).toUpperCase() }}</div>
      <div class="user-info">
        <h2>{{ authStore.user.nickname }}</h2>
        <p>{{ authStore.user.email }}</p>
        <p>{{ authStore.user.phone }}</p>
      </div>
    </div>

    <div class="profile-sections">
      <div class="section-card">
        <h3>📋 个人资料</h3>
        <div class="info-row"><span>昵称</span><span>{{ authStore.user.nickname }}</span></div>
        <div class="info-row"><span>邮箱</span><span>{{ authStore.user.email }}</span></div>
        <div class="info-row"><span>手机号</span><span>{{ authStore.user.phone }}</span></div>
        <div class="info-row"><span>注册时间</span><span>{{ formatDate(authStore.user.createdAt) }}</span></div>
      </div>

      <div class="section-card">
        <h3>⭐ 我的收藏</h3>
        <p class="empty-hint">暂无收藏景点</p>
      </div>

      <div class="section-card">
        <h3>🕐 浏览历史</h3>
        <p class="empty-hint">暂无浏览记录</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useAuthStore } from '../stores/auth'
const authStore = useAuthStore()

function formatDate(d) {
  if (!d) return '-'
  return new Date(d).toLocaleDateString('zh-CN')
}
</script>

<style scoped>
.profile-page { max-width: 700px; margin: 0 auto; }
.profile-header {
  display: flex;
  align-items: center;
  gap: 20px;
  background: #fff;
  padding: 28px;
  border-radius: 12px;
  margin-bottom: 24px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
}
.avatar {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: linear-gradient(135deg, #1a73e8, #0d47a1);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  font-weight: 700;
  flex-shrink: 0;
}
.user-info h2 { font-size: 20px; margin-bottom: 4px; }
.user-info p { font-size: 14px; color: #888; margin-bottom: 2px; }

.profile-sections { display: flex; flex-direction: column; gap: 16px; }
.section-card {
  background: #fff;
  border-radius: 12px;
  padding: 20px 24px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
}
.section-card h3 { font-size: 16px; margin-bottom: 14px; }
.info-row {
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
  border-bottom: 1px solid #f5f5f5;
  font-size: 14px;
}
.info-row:last-child { border-bottom: none; }
.info-row span:first-child { color: #888; }
.empty-hint { color: #bbb; font-size: 14px; text-align: center; padding: 20px 0; }
</style>
