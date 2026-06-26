<template>
  <div>
    <div class="hero">
      <h1>探索中国最美风景</h1>
      <p>为你精选十大热门景点，开启完美旅行</p>
    </div>
    <FilterBar
      :selectedRegion="selectedRegion"
      :selectedPeople="selectedPeople"
      :selectedCategory="selectedCategory"
      :count="filteredAttractions.length"
      @update:region="selectedRegion = $event"
      @update:people="selectedPeople = $event"
      @update:category="selectedCategory = $event"
      @update:search="searchQuery = $event"
      @reset="resetFilters"
    />
    <div v-if="filteredAttractions.length === 0" class="empty">
      <p>未找到相关景点，试试其他筛选条件</p>
    </div>
    <div class="card-grid" v-else>
      <AttractionCard v-for="a in filteredAttractions" :key="a.id" :attraction="a" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import AttractionCard from '../components/AttractionCard.vue'
import FilterBar from '../components/FilterBar.vue'
import { attractions } from '../data/attractions'

const selectedRegion = ref('')
const selectedPeople = ref('')
const selectedCategory = ref('')
const searchQuery = ref('')

const filteredAttractions = computed(() => {
  let list = attractions
  if (selectedRegion.value) list = list.filter(a => a.region === selectedRegion.value)
  if (selectedPeople.value) list = list.filter(a => a.suitable_for.includes(selectedPeople.value))
  if (selectedCategory.value) list = list.filter(a => a.category === selectedCategory.value)
  if (searchQuery.value) {
    const q = searchQuery.value.toLowerCase()
    list = list.filter(a => a.name.toLowerCase().includes(q) || a.city.toLowerCase().includes(q))
  }
  return list
})

function resetFilters() {
  selectedRegion.value = ''
  selectedPeople.value = ''
  selectedCategory.value = ''
  searchQuery.value = ''
}
</script>

<style scoped>
.hero {
  text-align: center;
  padding: 40px 0 32px;
}
.hero h1 { font-size: 32px; font-weight: 700; color: #1a1a1a; margin-bottom: 8px; }
.hero p { font-size: 16px; color: #888; }
.card-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}
@media (max-width: 1024px) { .card-grid { grid-template-columns: repeat(3, 1fr); } }
@media (max-width: 768px) { .card-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 480px) { .card-grid { grid-template-columns: 1fr; } }
.empty { text-align: center; padding: 60px 0; color: #999; font-size: 15px; }
</style>
