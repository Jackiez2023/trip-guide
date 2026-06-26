<template>
  <div class="card" @click="$router.push(`/attraction/${attraction.id}`)">
    <div class="card-image">
      <div class="card-image-placeholder">
        <span>{{ attraction.name.charAt(0) }}</span>
      </div>
      <span class="card-region">{{ attraction.region }}</span>
    </div>
    <div class="card-body">
      <h3 class="card-title">{{ attraction.name }}</h3>
      <p class="card-city">{{ attraction.city }}</p>
      <div class="card-rating">
        <span class="stars">★</span>
        <span class="score">{{ attraction.rating }}</span>
      </div>
      <div class="card-tags">
        <span class="tag" v-for="tag in attraction.suitable_for" :key="tag">{{ tag }}</span>
      </div>
      <div class="card-footer">
        <span class="price" v-if="attraction.ticket_price > 0">¥{{ attraction.ticket_price }}</span>
        <span class="price free" v-else>免费</span>
        <span class="season">{{ attraction.best_season }}季最佳</span>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({ attraction: { type: Object, required: true } })
</script>

<style scoped>
.card {
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  box-shadow: 0 2px 12px rgba(0,0,0,0.06);
}
.card:hover { transform: translateY(-4px); box-shadow: 0 8px 24px rgba(0,0,0,0.12); }

.card-image {
  height: 180px;
  position: relative;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
.card-image-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.card-image-placeholder span {
  font-size: 48px;
  color: rgba(255,255,255,0.6);
  font-weight: 700;
}
.card-region {
  position: absolute;
  top: 12px;
  right: 12px;
  background: rgba(0,0,0,0.5);
  color: #fff;
  padding: 4px 10px;
  border-radius: 4px;
  font-size: 12px;
}
.card-body { padding: 16px; }
.card-title { font-size: 17px; font-weight: 600; margin-bottom: 4px; }
.card-city { font-size: 13px; color: #888; margin-bottom: 8px; }
.card-rating { display: flex; align-items: center; gap: 4px; margin-bottom: 8px; }
.stars { color: #f5a623; font-size: 16px; }
.score { font-weight: 600; font-size: 14px; color: #333; }
.card-tags { display: flex; gap: 6px; flex-wrap: wrap; margin-bottom: 12px; }
.tag {
  background: #e8f0fe;
  color: #1a73e8;
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 11px;
}
.card-footer { display: flex; justify-content: space-between; align-items: center; }
.price { font-size: 20px; font-weight: 700; color: #e74c3c; }
.price.free { color: #27ae60; }
.season { font-size: 12px; color: #999; }
</style>
