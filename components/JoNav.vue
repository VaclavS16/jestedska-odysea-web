<template>
  <nav class="jo-nav">
    <ul class="flex flex-row justify-center">
      <li
          v-for="item in navItems"
          :key="item.title"
          class="jo-nav__item"
          :class="{'jo-nav__item--active': currentPath === item.path}"
          @click="navChange"
      >
        <nuxt-link :to="item.path" class="px-2 py-1">
          {{ item.title }}
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import navItemsJson from "~/content/navigation.json";

const navItems = ref(navItemsJson);

const currentPath = ref(null);

const route = useRoute();

onMounted(() => {
  currentPath.value = window.location.pathname;
});

watch(route, (to) => {
  currentPath.value = to.path;
});
</script>

<style scoped lang="scss">
.jo-nav {
  @apply mb-0.5 ml-auto w-fit;

  &__item {
    @apply bg-slate-transparent text-slate-300 text-center text-joyellow font-semibold uppercase tracking-widest;
    @apply hover:text-slate-transparent;
    @apply hover:bg-joyellow;
    @apply hover:cursor-pointer;
    @apply flex items-center justify-center;
    -moz-transform: skew(-15deg, 0deg);
    -webkit-transform: skew(-15deg, 0deg);
    -o-transform: skew(-15deg, 0deg);
    -ms-transform: skew(-15deg, 0deg);
    transform: skew(-15deg, 0deg);

    &--active {
      @apply bg-joyellow;
      @apply text-slate-transparent;
    }
  }
}
</style>