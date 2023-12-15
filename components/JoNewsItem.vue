<template>
  <div class="jo-news-item__wrapper">
    <a :href="props.item.link" :aria-label="`Jdi na facebook událost pro ${props.item.title}`" target="_blank"
       class="jo-news-item__link">
      <div class="overflow-hidden">
        <nuxt-img :src="props.item.image" alt="Cover image pro zprávu" class="jo-news-item__image" />
      </div>
      <h2 class="jo-news-item__title">{{ props.item.title }}</h2>
    </a>
    <JoText class="jo-news-item__text">{{ props.item.description }}</JoText>
    <div class="jo-news-item__bottom">
      <p class="jo-news-item__date">{{ formatedDate }}</p>
      <a :href="props.item.locationUrl" :aria-label="`Kde se nachází: ${props.item.title}`" target="_blank"
         class="jo-news-item__location">{{ props.item.location }}</a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { JoNewsItem } from "~/types/joNews";

const props = defineProps<{
  item: JoNewsItem,
}>();

const formatedDate = computed(() => {
  const date = new Date(props.item.date);
  return `${date.getDate()}|${date.getMonth() + 1}|${date.getFullYear()}`;
});

</script>

<style scoped lang="scss">
.jo-news-item {
  &__wrapper {
    @apply rounded-md p-2 w-full;
    background-color: rgba(0, 0, 0, 0.85);
  }

  &__title {
    @apply absolute text-2xl font-bold text-joyellow bottom-0 left-0 px-2;
    background-color: rgba(0, 0, 0, 0.9);
  }

  &__text {
    @apply text-sm text-neutral-300;
  }

  &__bottom {
    @apply flex justify-between items-center mt-4;
  }

  &__date {
    @apply text-base font-bold bg-joyellow px-1 mr-2;
  }

  &__location {
    @apply text-base font-bold bg-joyellow px-1 hover:bg-black hover:text-joyellow;
  }

  &__image {
    @apply w-full h-48 object-cover rounded-md;
    animation: zoomInOut 5s infinite; /* 10s is the duration of one cycle */
  }

  &__link {
    @apply relative hover:opacity-60;
  }
}

@keyframes zoomInOut {
  0%, 100% {
    transform: scale(1); /* Normal size */
  }
  50% {
    transform: scale(1.03); /* Zoom in 20% */
  }
}
</style>
