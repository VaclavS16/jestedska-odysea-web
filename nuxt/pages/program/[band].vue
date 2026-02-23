<template>
  <div>
    <JoProgram :active-band-name="activeBandName" />
    <JoBand :active-band-name="activeBandName"></JoBand>
  </div>
</template>
<script lang="ts" setup>
import { onMounted, ref } from "@vue/runtime-core";

const route = useRoute();

const activeBandName = ref<string>("");

onMounted(() => {
  activeBandName.value = typeof route.params.band === "string" ? route.params.band : "";
})
</script>