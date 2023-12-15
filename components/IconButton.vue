<template>
  <a
    :aria-label="`${props.alt || props.iconName} Ještědské Odysey`"
    :href="props.link"
    class="jo-button--icon rounded-full p-2 sm:p5 inline-flex  border-solid border-2 border-joyellow hover:bg-joyellow group"
    target="_blank"
    @mouseenter="hover = true"
    @mouseleave="hover = false"
  >
    <nuxt-img
      :src="`/icons/${props.iconName}.svg`"
      :alt="props.alt || props.iconName"
      class="w-5 sm:w-7 m-auto group-hover:hidden"
    />
    <nuxt-img
      :src="`/icons/${props.iconName}_dark.svg`"
      :alt="props.alt || props.iconName"
      class="w-5 sm:w-7 m-auto hidden group-hover:block"
    />
  </a>
</template>

<script lang="ts" setup>
const props = defineProps<{
  iconName: string,
  link: string,
  alt?: string,
}>();
</script>

<style scoped>
.jo-button--icon:hover {
  animation: pulse-border 1s infinite;
}
</style>
