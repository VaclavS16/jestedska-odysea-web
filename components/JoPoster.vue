<template>
  <div>
    <nuxt-img alt="Plagát" class="jo-poster" @click="openModal" src="/2023poster_800.webp" />
    <JoModal :show="showPosterModal" @close="closeModal">
      <nuxt-img alt="Plagát" class="jo-poster__modal" src="/2023poster_2000.webp" />
    </JoModal>
  </div>
</template>

<script setup>
const showPosterModal = ref(false);

const openModal = () => {
  showPosterModal.value = true;
};

const closeModal = () => {
  showPosterModal.value = false;
};
</script>

<style scoped>
.jo-poster {
  @apply w-64 h-auto hover:cursor-zoom-in;
}

.jo-poster__modal {
  @apply max-h-screen;
}
</style>
