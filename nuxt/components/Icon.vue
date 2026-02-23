<template>
  <component
    v-if="iconComponent"
    :is="iconComponent"
    class="w-5 sm:w-7 shrink-0 fill-jo-primary"
  />
</template>

<script lang="ts" setup>
import type { ComponentOptionsMixin, DefineComponent, PublicProps } from "@vue/runtime-core";

const props = defineProps<{
  iconName: string,
}>();

const EventIcon = defineAsyncComponent(() => import("~/nuxt/components/svg/EventIcon.vue"));
const FacebookIcon = defineAsyncComponent(() => import("~/nuxt/components/svg/FacebookIcon.vue"));
const InstagramIcon = defineAsyncComponent(() => import("~/nuxt/components/svg/InstagramIcon.vue"));
const LocationIcon = defineAsyncComponent(() => import("~/nuxt/components/svg/LocationIcon.vue"));
const TicketIcon = defineAsyncComponent(() => import("~/nuxt/components/svg/TicketIcon.vue"));

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
