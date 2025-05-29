<template>
  <div class="">
    <h2
      class="p-2 text-xl text-jo-primary font-semibold uppercase bg-slate-900 hover:bg-jo-primary hover:text-slate-900 cursor-pointer"
      @click="toogleShow">
      <span v-if="!show">&#9660;</span>
      <span v-if="show">&#9650;</span>
      {{ props.name }}
    </h2>

    <table v-if="show" class="table-fixed bg-slate-transparent w-full text-base">
      <tbody>
      <tr v-for="(band, index) in sortedBands" :key="index" class="text-white">
        <td class="p-1 w-16 text-sm">{{ band.start }}</td>
        <td class="p-1 text-jo-primary">
          <a v-if="band.url" :href="band.url" target="_blank" class="hover:bg-jo-primary hover:text-black">
            {{ band.name }}
          </a>
          <template v-else>
            {{ band.name }}
          </template>
        </td>
        <td class="p-1 text-sm">{{ band.genre }}</td>

      </tr>
      </tbody>
    </table>
  </div>


</template>
<script lang="ts" setup>
import type { JoBand } from "~/types/joBand";

const props = defineProps<{
  interpreters: JoBand[],
  name: string;
}>();

const show = ref(false);

const toogleShow = () => {
  show.value = !show.value;
  const showString = show.value ? "true" : "false";
  localStorage.setItem(`show-${props.name}`, showString);
}

onMounted(() => {
  const showFromLocalStorage = localStorage.getItem(`show-${props.name}`);
  show.value = showFromLocalStorage !== "false";
});

const sortedBands = computed(() => {
  return props.interpreters.sort((a, b) => {
    return a.start!.localeCompare(b.start!);
  }).map(band => {
    const startDate = new Date(band.start!);
    const hours = startDate.getHours();
    const minutes = startDate.getMinutes();
    return {
      ...band,
      start: `${hours < 10 ? "0" + hours : hours}:${minutes < 10 ? "0" + minutes : minutes}`
    }
  });
});
</script>
