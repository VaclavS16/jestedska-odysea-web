<template>
  <JoNewsItem v-for="item of joNews" :item="item" :key="item.title" class="mb-4" />
</template>

<script setup lang="ts">
import joNews from "~/nuxt/content/news.json";
import JoNewsItem from "~/nuxt/components/JoNewsItem.vue";
</script>

<style scoped>
</style>
