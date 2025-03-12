<template>
  <JoGallery />
</template>

<script setup>
import JoGallery from "~/components/JoGallery.vue";

definePageMeta({
  layout: "default",
});

useHead({
  title: "Galerie | Ještědská odysea 2025 | Festival, kde se sci-fi mění v realitu",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  charset: "utf-8",
  meta: [
    {
      name: "description",
      content: "Ještědská odysea je multižánrový hudební a kulturní festival, jenž se koná v Liberci.",
    },
  ],
  htmlAttrs: {
    lang: "cs",
  },
});
</script>
