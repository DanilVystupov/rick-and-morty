<script setup lang="ts">
import { ref } from 'vue';
import { useCharacterStore } from '@/store/characterStore';

const store = useCharacterStore();
const searchQuery = ref('');
let timer: ReturnType<typeof setTimeout> | null = null;

const handleSearchInput = () => {

    if (timer !== null) {
        clearTimeout(timer);
    }

    timer = setTimeout(() => {
        store.fetchCharactersBySearchAndStatus(searchQuery.value, store.selectedStatus);
    }, 500);
};

const handleSubmit = (event: Event) => {
    event.preventDefault();
    store.fetchCharactersBySearchAndStatus(searchQuery.value, store.selectedStatus);
};

const clearSearchInput = () => {
    searchQuery.value = '';

    if (timer !== null) {
        clearTimeout(timer);
    }
}
</script>

<template>
    <form @submit.preventDefault="handleSubmit" class="search-bar">
        <input
            type="text"
            v-model="searchQuery"
            placeholder="Введите имя персонажа..."
            class="search-input"
            @input="handleSearchInput"
        />    
        <span 
            class="clear-input"
            v-if="searchQuery"
            @click="clearSearchInput"
        >
            &#11198;
        </span>
    </form>
</template>
   
<style scoped> 
.search-bar {
    margin: 10px 0;
    position: relative;
}
   
.search-input {
    width: 100%;
    padding: 10px 0;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    text-align: center;
}
.clear-input {
  position: absolute;
  top: 50%; 
  right: 10px; 
  transform: translateY(-50%); 
  cursor: pointer;
}
</style>