<template>
  <div id="JoText" class="jo-text gradient-border">
    <p class="p-6 text-slate-300">
      {{ renderedText }}
      <span class="jo-cursor inline-block w-1 h-4 bg-white"></span>
    </p>

    <p ref="fullText" class="hidden">
      <slot></slot>
    </p>
  </div>
</template>

<script setup>
const fullText = ref(null);

const renderedText = ref("");

onMounted(() => {
  const typing = (index) => {
    requestAnimationFrame(() => {
      if (!fullText.value?.innerText || (renderedText.value.length === fullText.value.innerText.length)) return;
      renderedText.value = renderedText.value + fullText.value.innerText[index];
      typing(index + 1);
    });
  };

  setTimeout(() => {
    typing(0);
  }, 700);
});
</script>

<style scoped>
.jo-cursor {
  margin-bottom: -2px;
  animation-name: blink;
  animation-duration: 1s;
  animation-iteration-count: infinite;
}

.jo-text {
  @apply bg-slate-transparent;
}
</style>