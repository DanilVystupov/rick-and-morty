<script setup lang="ts">

const props = defineProps({
  character: {
    type: Object,
    required: true,
    default: () => {}
  }
})

</script>

<template>
  <NuxtLink :to="`/character/${character.id}`">
    <div class="card-image">
      <img class="card-image__item" :src="character.image" alt="image character">
    </div>
  </NuxtLink>
  
  <div class="card-content">
    <h2>{{ character.name }} ({{ character.species }})</h2>
    <div class="episode-list">
      <h3>Список эпизодов с участием:</h3>
      <p v-for="(episode, index) in character.episode.slice(0, 5)" :key="index">{{ episode }}</p>
    </div>
  </div>
</template>

<style lang="css" scoped>

.card-image {
  display: flex;
  justify-content: center;
  cursor: pointer;
}
.card-image__item {
  max-width: 100%;
}

.card-content {
  margin-top: 10px;
}

.episode-list {
  margin-top: 10px;
  word-wrap: break-word;
}

</style>
