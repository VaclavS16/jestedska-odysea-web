<template>
  <div class="flex flex-row flex-wrap place-content-center gap-4">
    <JoBandButton v-for="(band, index) in bands" :key="index" :band="band" />
  </div>
</template>
<script lang="ts" setup>
import JoBandButton from "./JoBandButton.vue";
import type { JoBand } from "~/types/joBand";
import program from "../content/program.json";

const props = defineProps<{
  activeBandName?: string,
}>();

const bands = ref<JoBand[]>(program);
</script>