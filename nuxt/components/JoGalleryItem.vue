<template>
  <a
    class="px-2 py-1 text-jo-primary hover:text-black hover:bg-jo-primary  text-lg border-b last:border-b-0 border-solid border-jo-primary"
    :href="props.item.link"
    target="_blank">
    {{ props.item.title }}
  </a>
</template>

<script setup lang="ts">
interface Props {
  item: {
    title: string,
    link: string,
  }
}

const props = defineProps<Props>()

</script>
