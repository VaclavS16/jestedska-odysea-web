<template>
  <div class="jo-wrapper bg-center bg-cover h-screen overflow-hidden">
    <div class="h-full z-10 flex flex-col items-center overflow-auto relative">
      <nuxt-link to="/" class="w-48">
        <JoLogo
          class="absolute w-48 top-0 left-2 sm:left-auto xl:left-0 xl:w-96 z-30 mt-4 xl:mt-10 xl:ml-10 fill-joprimary"
        />
      </nuxt-link>
      <div
        class="jo-content mt-40 mb-20 xl:mt-40  w-11/12 sm:w-3/4 lg:w-1/2 z-40"
      >
        <JoNav></JoNav>
        <nuxt-page></nuxt-page>
      </div>
      <JoEvent class="mt-0 absolute right-0 lg:right-20 top-10"></JoEvent>
      <JoFooter class="z-20 md:fixed bottom-0 left-0 w-full"></JoFooter>
    </div>
  </div>
</template>

<script setup lang="ts">
import JoLogo from "~/components/svg/JoLogo.vue";
import JoEvent from "~/components/JoEvent.vue";
import JoFooter from "~/components/JoFooter.vue";
</script>

<style>
body {
  background-size: cover;
  background-image: url("~/static/images/back_min_v2.webp");
}

.page-enter-active,
.page-leave-active {
  transition: all 0.7s;
}

.page-enter-from,
.page-leave-to {
  margin-top: 60vh;
  /*filter: blur(0.5rem);*/
}
</style>
