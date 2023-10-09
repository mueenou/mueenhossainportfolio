<template>
  <div class="skills snap-x flex snap-mandatory h-screen w-full overflow-x-scroll">
    <div
      class="vue-container h-screen w-screen snap-start flex-shrink-0 flex justify-center items-center text-[#41B883]"
    >
      <Icon name="bxl:vuejs" />
      <Icon name="simple-icons:nuxtdotjs" />
    </div>
    <div
      class="h-screen w-screen snap-start flex-shrink-0 flex justify-center items-center text-[#7cc5d9]"
    >
      <Icon name="bxl:react" />
    </div>
    <div
      class="h-screen w-screen snap-start flex-shrink-0 flex justify-center items-center text-[#7cc5d9]"
    >
      <Icon name="devicon:supabase" />
    </div>
    <div
      class="h-screen w-screen snap-start flex-shrink-0 flex justify-center items-center text-[#3c873a]"
    >
      <Icon name="fa-brands:node" />
    </div>
    <div
      class="h-screen w-screen snap-start flex-shrink-0 flex justify-center items-center text-[#F29111] bg-slate-900"
    >
      <Icon name="bxl:postgresql" />
    </div>
  </div>
</template>

<script></script>

<style scoped>
/* Hiding scrollbar for Chrome, Safari and Opera */
.skills::-webkit-scrollbar {
  display: none;
}

/* Hiding scrollbar for IE, Edge and Firefox */
.skills {
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
}
</style>
