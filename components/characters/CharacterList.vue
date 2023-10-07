<script setup lang="ts">
import { useCharacterStore } from '@/store/characterStore'

const charStore = useCharacterStore();
charStore.fetchCharacters()

</script>

<template>
  <div class="card-container">
    <div class="card" v-for="character of charStore.characters" :key="character.id">
      <CharactersCharacterItem :character="character"/>
    </div>
  </div>
</template>
  
<style lang="css" scoped>
.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.card {
  width: 27%;
  padding: 20px;
  border: 1px solid #ccc;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  border-radius: 5px;
}

</style>
  