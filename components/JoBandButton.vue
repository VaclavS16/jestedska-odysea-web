<template>
  <component
      :is="wrapperComponent"
      v-bind="wrapperComponentAttributes"
  >
    <div class="jo-band-name">
      {{ props.band.name }}
      <span
          class="jo-band-genre absolute px-1 bg-slate-800 whitespace-nowrap text-xs -bottom-3 -right-1 rounded-xl text-joyellow"
      >
        {{ props.band.genre }}
      </span>
    </div>
  </component>
</template>

<script lang="ts" setup>
import {JoBand} from "~/types/joBand";

const props = defineProps<{
  band: JoBand,
}>();

const hasLink = computed<boolean>(() => {
  return !!props.band.facebook;
});

const wrapperComponent = computed(() => {
  return hasLink.value ? 'a' : 'div';
});

const wrapperComponentAttributes = computed(() => {
  return hasLink.value ? {
    href: props.band.facebook,
    target: "_blank",
    class: "jo-band-button jo-band-button--hover"
  } : {class: "jo-band-button"};
});
</script>

<style scoped>
.jo-band-button {
  @apply bg-slate-800 py-1 px-4 border-solid border-4 border-joyellow text-joyellow font-bold relative -skew-x-6
}

.jo-band-button--hover {
  @apply hover:bg-joyellow hover:text-slate-800 hover:border-slate-800
}

.jo-band-name {
  @apply uppercase;
}
</style>
