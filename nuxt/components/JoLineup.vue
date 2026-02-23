<template>
  <div class="flex flex-col gap-4 pb-16">
    <JoStage name="The Substance / Bands" :interpreters="stages.bands" />
    <JoStage name="Event Horizon / Dyzlegtic Division" :interpreters="stages.division" />
    <JoStage name="Back to the Future / Mzc & Dms" :interpreters="stages.mzc" />
    <JoStage name="Pandemonium / Monkey boom " :interpreters="stages.monkey" />
    <JoStage name="Alien / Technord & Steakhouse" :interpreters="stages.technord" />
  </div>
</template>
<script lang="ts" setup>
import type { JoBand } from "~/nuxt/types/joBand";
import program from "../content/program.json";

const props = defineProps<{
  activeBandName?: string,
}>();

const bands = ref<JoBand[]>(program);

const stages = computed(() => {
  return {
    bands: bands.value.filter(band => band.stage === "bands"),
    division: bands.value.filter(band => band.stage === "division"),
    monkey: bands.value.filter(band => band.stage === "monkey"),
    technord: bands.value.filter(band => band.stage === "technord"),
    mzc: bands.value.filter(band => band.stage === "mzc"),
  }
});
</script>
