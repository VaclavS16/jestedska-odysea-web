<template>
  <div class="jo-news-item__wrapper">
    <a :href="props.item.link" :aria-label="`Jdi na facebook událost pro ${props.item.title}`" target="_blank"
       class="jo-news-item__link">
      <div class="overflow-hidden">
        <nuxt-img
          :src="props.item.image"
          alt="Cover image pro zprávu"
          class="jo-news-item__image"
          :class="imagePositionClass"
        />
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
import type { JoNewsItem } from "~/types/joNews";

const props = defineProps<{
  item: JoNewsItem,
}>();

const formatedDate = computed(() => {
  const date = new Date(props.item.date);
  return `${date.getDate()}|${date.getMonth() + 1}|${date.getFullYear()}`;
});

const imagePositionClass = computed(() => {
  return props.item.imagePosition ? `jo-news-item__image--${props.item.imagePosition}` : "jo-news-item__image--center";
});
</script>

<style scoped lang="scss">
.jo-news-item {
  &__wrapper {
    @apply rounded-md p-2 w-full;
    background-color: rgba(0, 0, 0, 0.85);
  }

  &__title {
    @apply absolute text-2xl font-bold text-joprimary bottom-0 left-0 px-2;
    background-color: rgba(0, 0, 0, 0.9);
  }

  &__text {
    @apply text-sm text-neutral-300;
  }

  &__bottom {
    @apply flex justify-between items-center mt-4;
  }

  &__date {
    @apply text-base font-bold bg-joprimary px-1 mr-2;
  }

  &__location {
    @apply text-base font-bold bg-joprimary px-1 hover:bg-black hover:text-joprimary;
  }

  &__image {
    @apply w-full h-48 object-cover rounded-md;
    animation: zoomInOut 5s infinite; /* 10s is the duration of one cycle */

    &--center {
      @apply object-center;
    }

    &--top {
      @apply object-top;
    }

    &--bottom {
      @apply object-bottom;
    }

    &--left {
      @apply object-left;
    }

    &--right {
      @apply object-right;
    }
  }

  &__link {
    @apply relative hover:opacity-60;
  }
}

.jo-news-item__wrapper:only-child {
  .jo-news-item__image {
    height: calc(100vh - 20rem);
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
