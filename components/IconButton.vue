<template>
  <a
    v-if="iconComponent"
    :aria-label="`${props.alt || props.iconName} Ještědské Odysey`"
    :href="props.link"
    class="jo-button--icon rounded-full p-2 sm:p5 inline-flex  border-solid border-2 border-joprimary hover:bg-joprimary group"
    target="_blank"
  >
    <component
      :is="iconComponent"
      :alt="props.alt || props.iconName"
      class="w-5 sm:w-7 m-auto fill-joprimary group-hover:fill-black"
    />
  </a>
</template>

<script lang="ts" setup>
import type { ComponentOptionsMixin, DefineComponent, PublicProps } from "@vue/runtime-core";

const props = defineProps<{
  iconName: string,
  link: string,
  alt?: string,
}>();

const EventIcon = defineAsyncComponent(() => import("~/components/svg/EventIcon.vue"));
const FacebookIcon = defineAsyncComponent(() => import("~/components/svg/FacebookIcon.vue"));
const InstagramIcon = defineAsyncComponent(() => import("~/components/svg/InstagramIcon.vue"));
const LocationIcon = defineAsyncComponent(() => import("~/components/svg/LocationIcon.vue"));
const TicketIcon = defineAsyncComponent(() => import("~/components/svg/TicketIcon.vue"));

const componentsMap: {
  [iconName: string]: DefineComponent<{}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<{}>>, {}, {}>
} = {
  event: EventIcon,
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  location: LocationIcon,
  ticket: TicketIcon,
};
const iconComponent = computed(() => {
  return componentsMap[props.iconName];
});
</script>

<style scoped>
.jo-button--icon:hover {
  animation: pulse-border 1s infinite;
}
</style>
