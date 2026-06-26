<template>
  <div class="detail-page" v-if="attraction">
    <div class="detail-header">
      <div class="header-image">
        <div class="image-placeholder">{{ attraction.name.charAt(0) }}</div>
      </div>
      <div class="header-info">
        <h1>{{ attraction.name }}</h1>
        <div class="meta">
          <span class="location">{{ attraction.city }} · {{ attraction.region }}</span>
          <span class="rating">★ {{ attraction.rating }}</span>
          <span class="category-tag">{{ attraction.category }}</span>
        </div>
        <div class="quick-info">
          <div class="qi-item">
            <span class="qi-label">门票</span>
            <span class="qi-value" :class="{ free: attraction.ticket_price === 0 }">
              {{ attraction.ticket_price === 0 ? '免费' : '¥' + attraction.ticket_price }}
            </span>
          </div>
          <div class="qi-item">
            <span class="qi-label">开放时间</span>
            <span class="qi-value">{{ attraction.open_time }}</span>
          </div>
          <div class="qi-item">
            <span class="qi-label">建议游玩</span>
            <span class="qi-value">{{ attraction.suggested_duration }}</span>
          </div>
          <div class="qi-item">
            <span class="qi-label">最佳季节</span>
            <span class="qi-value">{{ attraction.best_season }}季</span>
          </div>
        </div>
      </div>
    </div>

    <div class="detail-body">
      <section class="section">
        <h2>景点简介</h2>
        <p>{{ attraction.description }}</p>
      </section>

      <section class="section">
        <h2>景点亮点</h2>
        <ul class="highlights">
          <li v-for="h in attraction.highlights" :key="h">{{ h }}</li>
        </ul>
      </section>

      <section class="section">
        <h2>出行时间</h2>
        <div class="info-grid">
          <div class="info-card">
            <strong>最佳季节</strong>
            <span>{{ attraction.best_travel_time.best_season }}</span>
          </div>
          <div class="info-card">
            <strong>推荐月份</strong>
            <span>{{ attraction.best_travel_time.best_months.join('、') }}</span>
          </div>
          <div class="info-card">
            <strong>每日时段</strong>
            <span>{{ attraction.best_travel_time.daily_time }}</span>
          </div>
          <div class="info-card">
            <strong>旺季</strong>
            <span>{{ attraction.best_travel_time.peak_season }}</span>
          </div>
          <div class="info-card">
            <strong>淡季</strong>
            <span>{{ attraction.best_travel_time.off_season }}</span>
          </div>
          <div class="info-card warn">
            <strong>建议避开</strong>
            <span>{{ attraction.best_travel_time.avoid_time }}</span>
          </div>
        </div>
      </section>

      <section class="section">
        <h2>到达方式</h2>
        <div class="trans-info">
          <div class="trans-card">
            <strong>✈️ 飞机</strong>
            <p>{{ attraction.transportation.airport.name }}</p>
            <span>{{ attraction.transportation.airport.distance }} · {{ attraction.transportation.airport.duration }}</span>
          </div>
          <div class="trans-card">
            <strong>🚄 火车</strong>
            <p>{{ attraction.transportation.train.nearest_station }}</p>
            <span>{{ attraction.transportation.train.distance }} · {{ attraction.transportation.train.duration }}</span>
          </div>
          <div class="trans-card">
            <strong>🚌 公交</strong>
            <p>{{ attraction.transportation.bus.description }}</p>
            <span>{{ attraction.transportation.bus.routes.join('、') }}</span>
          </div>
          <div class="trans-card">
            <strong>🚗 自驾</strong>
            <p>{{ attraction.transportation.self_driving.route }}</p>
            <span>{{ attraction.transportation.self_driving.parking }}</span>
          </div>
        </div>
        <div class="trans-tips">
          <strong>💡 出行建议：</strong>{{ attraction.transportation.tips }}
        </div>
      </section>

      <section class="section">
        <h2>出行贴士</h2>
        <p>{{ attraction.travel_tips }}</p>
      </section>
    </div>

    <div class="back-link">
      <router-link to="/">← 返回首页</router-link>
    </div>
  </div>
  <div v-else class="not-found">
    <p>景点未找到</p>
    <router-link to="/">返回首页</router-link>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { attractions } from '../data/attractions'

const route = useRoute()
const attraction = computed(() => attractions.find(a => a.id === Number(route.params.id)))
</script>

<style scoped>
.detail-page { max-width: 900px; margin: 0 auto; }

.detail-header { display: flex; gap: 24px; margin-bottom: 32px; }
.header-image {
  width: 360px;
  height: 240px;
  border-radius: 12px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.image-placeholder { font-size: 72px; color: rgba(255,255,255,0.5); font-weight: 700; }
.header-info { flex: 1; }
.header-info h1 { font-size: 28px; margin-bottom: 8px; }
.meta { display: flex; gap: 16px; align-items: center; margin-bottom: 16px; font-size: 14px; color: #666; }
.rating { color: #f5a623; font-weight: 600; }
.category-tag { background: #e8f0fe; color: #1a73e8; padding: 2px 10px; border-radius: 12px; font-size: 12px; }

.quick-info { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
.qi-item { background: #f8f9fa; border-radius: 8px; padding: 10px 14px; }
.qi-label { font-size: 12px; color: #999; display: block; margin-bottom: 2px; }
.qi-value { font-size: 15px; font-weight: 600; color: #333; }
.qi-value.free { color: #27ae60; }

.detail-body { background: #fff; border-radius: 12px; padding: 28px; box-shadow: 0 2px 8px rgba(0,0,0,0.04); }
.section { margin-bottom: 28px; }
.section:last-child { margin-bottom: 0; }
.section h2 { font-size: 18px; color: #1a1a1a; margin-bottom: 12px; padding-bottom: 8px; border-bottom: 2px solid #1a73e8; display: inline-block; }
.section p { font-size: 15px; line-height: 1.8; color: #555; }

.highlights { list-style: none; padding: 0; display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
.highlights li { background: #fff8e1; padding: 10px 14px; border-radius: 8px; font-size: 14px; }
.highlights li::before { content: '🌟 '; }

.info-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }
.info-card { background: #f0f7ff; padding: 14px; border-radius: 8px; }
.info-card strong { display: block; font-size: 12px; color: #1a73e8; margin-bottom: 4px; }
.info-card span { font-size: 14px; color: #333; }
.info-card.warn { background: #fff3f0; }
.info-card.warn strong { color: #e74c3c; }

.trans-info { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 14px; }
.trans-card { background: #f8f9fa; padding: 14px; border-radius: 8px; }
.trans-card strong { display: block; font-size: 14px; margin-bottom: 4px; }
.trans-card p { font-size: 14px; color: #333; margin-bottom: 2px; line-height: 1.5; }
.trans-card span { font-size: 12px; color: #888; }
.trans-tips { background: #e8f5e9; padding: 14px; border-radius: 8px; font-size: 14px; color: #2e7d32; line-height: 1.7; }

.back-link { margin-top: 24px; text-align: center; }
.back-link a { color: #1a73e8; font-size: 15px; }
.not-found { text-align: center; padding: 60px 0; }
.not-found a { color: #1a73e8; }

@media (max-width: 768px) {
  .detail-header { flex-direction: column; }
  .header-image { width: 100%; }
  .highlights, .trans-info { grid-template-columns: 1fr; }
  .info-grid { grid-template-columns: 1fr 1fr; }
}
</style>
