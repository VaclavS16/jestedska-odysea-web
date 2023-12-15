<template>
  <div class="jo-event">
    <div class="jo-event--box">
      <span class="jo-event--head">Den</span>
      <span class="jo-event--content pl-3">1.</span>
    </div>
    <div class="jo-event--box">
      <span class="jo-event--head">Měsíc</span>
      <span class="jo-event--content">6.</span>
    </div>
    <div class="jo-event--box">
      <span class="jo-event--head">Rok</span>
      <span class="jo-event--content">2024</span>
    </div>
    <div class="jo-event--box h-12 sm:h-14 xl:h-16">
      <IconButton
          class="border-none bg-slate-900 rounded-none xl:p-4 h-full"
          icon-name="event"
          link="https://www.facebook.com/events/2022704964728696"
          title="Facebook událost">
      </IconButton>
    </div>
  </div>
</template>

<style scoped>
.jo-event {
  @apply z-20 flex items-stretch lg:items-end border-2 border-solid border-joyellow lg:border-0
}

.jo-event--box {
  @apply flex lg:flex-col items-center lg:mr-4 items-stretch
}

.jo-event--box:last-of-type {
  @apply mr-0
}

.jo-event--head {
  @apply hidden lg:block border-slate-900 w-full text-center border-solid border-2 text-slate-300 text-xs xl:text-joyellow bg-slate-transparent;
}

.jo-event--content {
  @apply py-3 lg:px-4 first-of-type:pl-3 text-joyellow text-base sm:text-xl font-bold lg:text-2xl xl:text-4xl bg-slate-900 text-center
}

</style>
