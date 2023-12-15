<template>
  <a
    aria-label="Předprodej"
    href="https://www.book-tickets.cz/index.php?page=bookticket&event=99"
    class="group bg-slate-transparent gradient-border p-6 flex flex-row hover:bg-joyellow"
  >
    <nuxt-img
      src="/icons/ticket.svg"
      alt="Předprodej"
      class="w-5 sm:w-7 m-auto group-hover:hidden"
    />
    <nuxt-img
      src="/icons/ticket_dark.svg"
      alt="Předprodej"
      class="w-5 sm:w-7 m-auto hidden group-hover:block"
    />

    <JoText class="w-full ml-5 group-hover:text-black text-slate-300">
      Předprodej zahájen. Kupte si vstupenku dopředu, ušetříte nějakou tu korunu na drinky a čas při příchodu na akci!
    </JoText>
  </a>
</template>
