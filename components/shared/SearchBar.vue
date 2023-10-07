<script setup lang="ts">
import { ref } from 'vue';
import { useCharacterStore } from '@/store/characterStore';
   
const store = useCharacterStore();
const searchQuery = ref('');
   
const handleSearchInput = () => {
    store.searchCharactersByName(searchQuery.value);
};

const handleSubmit = (event: Event) => {
    event.preventDefault(); 
    store.searchCharactersByName(searchQuery.value);
};

watch(searchQuery, (newValue) => {
  store.searchCharactersByName(newValue);
});
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
    </form>
</template>
   x
<style scoped> 
.search-bar {
    margin: 10px 0;
}
   
.search-input {
    width: 100%;
    padding: 10px 0;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    text-align: center;
}
</style>