<script setup lang="ts">
import { useCharacterStore } from '@/store/characterStore'
import { computed } from 'vue';

const charStore = useCharacterStore();
charStore.fetchCharacters()

const filteredCharacters = computed(() => {
  if (charStore.selectedStatus === 'all') {
    return charStore.characters;
  } else {
    return charStore.characters.filter(
      (character) => character.status === charStore.selectedStatus
    );
  }
});

const noCharactersFound = computed(() => {
  return (
    (!charStore.characters) ||
    (charStore.selectedStatus !== 'all' &&
      !filteredCharacters.value.some((character) =>
        character.status === charStore.selectedStatus
      ))
  );
});

</script>

<template>
  <div v-if="charStore.isLoading">
    <LazyUtilsLoader/>
  </div>
  <div class="card-container">
    <div class="card" v-for="character of filteredCharacters" :key="character.id">
      <CharactersCharacterItem :character="character"/>
    </div>
    <div class="not-found" v-if="noCharactersFound">Ничего не найдено</div>
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

.not-found{
  width: 100%;
  font-size: calc(24px + 11 * (100vw / 1280));
  text-align: center;
  color: red;
}
</style>
  