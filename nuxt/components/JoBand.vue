<template>
  <div v-if="activeBand" class="flex flex-row mt-8 gap-y-2">
    <nuxt-img ref="bandImageRef" :alt="props.activeBandName || ''" :src="activeBand.imgPath" class="hidden" />
    <span :style="{ backgroundImage: `url(${bandImageSrc})` }" class="jo-band__image"></span>
    <JoText class="w-full">{{ activeBand.desc }}</JoText>
  </div>
</template>
<script lang="ts" setup>
import type { JoBand } from "~/nuxt/types/joBand";
import program from "../content/program.json";

const props = defineProps<{
  activeBandName?: string,
}>();

const bands = ref<JoBand[]>(program);

const bandImageRef = ref(null);

const bandImageSrc = computed(() => {
  return bandImageRef.value?.$el.src;
});

const activeBand = computed<JoBand | null>(() => {
  return bands.value.find(band => band.pathPart === props.activeBandName);
});

</script>

<style scoped>
.jo-band__image {
  @apply min-w-52 h-52 bg-cover bg-center;
  filter: sepia(84%) saturate(3228%) hue-rotate(67deg) brightness(93%) contrast(120%);
}

</style>
