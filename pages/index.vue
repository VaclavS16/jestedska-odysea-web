<template>
  <JoProgram :active-band-name="activeBandName"/>
  <JoText key="index-text" class="mt-5">
    Čas a prostor tvoří naší realitu a existence má svá neměnná pravidla. První sobotu v červnu se proto opět uvidíme na
    dvanáctém ročníku hudebního festivalu Ještědská odysea. Opět ve Sportovním areálu Vesec, na čtyřech pódiích a v plné
    síle!!!
  </JoText>
</template>

<script setup>
definePageMeta({
  layout: "default"
});

useHead({
  title: "Ještědská odysea | Festival, kde se sci-fi mění v realitu",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  charset: "utf-8",
  meta: [
    {
      name: "description",
      content: "Ještědská odysea je multižánrový hudební a kulturní festival, jenž se koná v Liberci."
    }
  ]
});
</script>