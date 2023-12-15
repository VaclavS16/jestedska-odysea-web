<template>
  <div class="flex flex-col gap-4 pb-16">
    <JoStage name="Bands" :interpreters="stages.bands" />
    <JoStage name="Dizlectic division" :interpreters="stages.division" />
    <JoStage name="Monkey Boom" :interpreters="stages.monkey" />
    <JoStage name="Hedonix" :interpreters="stages.hedonix" />
  </div>
</template>
<script lang="ts" setup>
import { JoBand } from "~/types/joBand";
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
    hedonix: bands.value.filter(band => band.stage === "hedonix"),
  }
});
</script>