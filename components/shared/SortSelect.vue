<script setup lang="ts">
import { useCharacterStore } from '@/store/characterStore';
import { ref } from 'vue';

const store = useCharacterStore();
const selectedStatus = ref('all'); 

const setStatusFilter = (status: string) => {
  selectedStatus.value = status;
  store.fetchCharactersBySearchAndStatus(store.searchQuery, status);
};

</script>

<template>
    <div class="sort-select">
      <label for="status-select">Фильтровать по статусу:</label>
      <select 
        id="status-select" 
        v-model="selectedStatus"
        @change="setStatusFilter(selectedStatus)"
      >
        <option value="all">All</option>
        <option value="Alive">Alive</option>
        <option value="Dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>
    </div>
</template>


<style scoped>
.sort-select {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
}

label {
  margin-right: 8px;
  font-weight: bold;
}

select {
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>