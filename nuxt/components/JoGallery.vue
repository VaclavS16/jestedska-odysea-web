<template>
  <div class="jo-gallery">
    <JoGalleryItem v-for="item in galleryItems" :key="item.title" :item="item" />
  </div>
</template>

<script setup lang="ts">
import galleryItems from "~/nuxt/content/gallery.json"
</script>

<style scoped>
.jo-gallery {
  @apply rounded-md p-2 w-full bg-black  flex flex-col;
}
</style>
