<template>
  <Teleport to="body">
    <div v-if="props.show" class="jo-modal" @click="close">
      <slot></slot>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
const props = defineProps<{
  show: boolean,
}>();

const emit = defineEmits<{
  (e: 'close'): void
}>();

const close = () => {
  emit('close');
};
</script>

<style scoped>
.jo-modal {
  @apply fixed top-0 left-0 w-full h-full flex items-center justify-center z-50;
  background-color: rgba(0, 0, 0, 0.6);
}
</style>