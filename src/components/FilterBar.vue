<template>
  <div class="filter-bar">
    <div class="filter-section">
      <label>地区</label>
      <div class="filter-options">
        <button
          v-for="r in regions"
          :key="r"
          :class="{ active: selectedRegion === r }"
          @click="$emit('update:region', selectedRegion === r ? '' : r)"
        >{{ r }}</button>
      </div>
    </div>
    <div class="filter-section">
      <label>人群</label>
      <div class="filter-options">
        <button
          v-for="p in people"
          :key="p"
          :class="{ active: selectedPeople === p }"
          @click="$emit('update:people', selectedPeople === p ? '' : p)"
        >{{ p }}</button>
      </div>
    </div>
    <div class="filter-section">
      <label>类型</label>
      <div class="filter-options">
        <button
          v-for="c in categories"
          :key="c"
          :class="{ active: selectedCategory === c }"
          @click="$emit('update:category', selectedCategory === c ? '' : c)"
        >{{ c }}</button>
      </div>
    </div>
    <div class="filter-section filter-row">
      <div class="search-box">
        <input v-model="searchText" placeholder="搜索景点..." @input="$emit('update:search', $event.target.value)" />
      </div>
      <button class="reset-btn" @click="reset">重置筛选</button>
      <span class="count">共 {{ count }} 个结果</span>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  selectedRegion: String,
  selectedPeople: String,
  selectedCategory: String,
  count: Number
})
const emit = defineEmits(['update:region', 'update:people', 'update:category', 'update:search', 'reset'])

const searchText = ref('')

const regions = ['华北', '华东', '华中', '华南', '西南', '西北']
const people = ['全年龄段', '亲子', '情侣', '学生', '青年', '中年', '老年']
const categories = ['历史文化', '自然风光', '城市休闲']

function reset() {
  searchText.value = ''
  emit('reset')
}
</script>

<style scoped>
.filter-bar {
  background: #fff;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 24px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
}
.filter-section { margin-bottom: 12px; }
.filter-section:last-child { margin-bottom: 0; }
.filter-section label {
  font-size: 13px;
  color: #666;
  display: inline-block;
  width: 48px;
  vertical-align: middle;
}
.filter-options { display: inline-flex; gap: 8px; flex-wrap: wrap; }
.filter-options button {
  border: 1px solid #ddd;
  background: #fff;
  padding: 4px 14px;
  border-radius: 16px;
  font-size: 13px;
  cursor: pointer;
  transition: all 0.2s;
  color: #555;
}
.filter-options button:hover { border-color: #1a73e8; color: #1a73e8; }
.filter-options button.active {
  background: #1a73e8;
  color: #fff;
  border-color: #1a73e8;
}
.filter-row {
  display: flex;
  align-items: center;
  gap: 12px;
  padding-top: 12px;
  border-top: 1px solid #f0f0f0;
}
.search-box input {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 8px 14px;
  width: 220px;
  font-size: 14px;
  outline: none;
  transition: border-color 0.2s;
}
.search-box input:focus { border-color: #1a73e8; }
.reset-btn {
  background: #f5f5f5;
  border: none;
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 13px;
  color: #666;
}
.reset-btn:hover { background: #e0e0e0; }
.count { font-size: 13px; color: #999; margin-left: auto; }
</style>
