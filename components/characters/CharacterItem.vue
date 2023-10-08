<script setup lang="ts">

const props = defineProps({
  character: {
    type: Object,
    required: true,
    default: () => {}
  }
})

const getEpisodeId = (episode: string) => {
  const episodeUrlParts = episode.split('/');
  return episodeUrlParts[episodeUrlParts.length - 1];
};

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
      <ul>
        <li v-for="(episode, id) in character.episode.slice(0, 5)" :key="id">
          <NuxtLink :to="`/episode/${getEpisodeId(episode)}`">{{ episode }}</NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="css" scoped>

ul {
  display: flex;
  flex-direction: column;
  gap: 10px;
  list-style: none;
  margin-top: 10px;
  padding: 0;
}

a {
  text-decoration: none;
  color: black;
}

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
