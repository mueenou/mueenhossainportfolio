<template>
  <div class="flex flex-col items-center justify-center">
    <h1
      class="mx-auto max-w-xl text-3xl text-center text-balance font-bold leading-10 text-gray-300"
      v-motion="{
        initial: {
          y: 20,
          opacity: 0,
        },
        enter: {
          y: 0,
          opacity: 1,
          transition: {
            duration: 1500,
            ease: 'linear',
          },
        },
      }"
    >
      Hi there, I am <span class="text-primary">Mueen Hossain.</span> <br />Front end web
      developer based in France.
    </h1>
    <nuxt-link to="/resume" class="h-fit">
      <button
        class="rounded py-2 px-3 text-sm bg-slate-900 text-primary hover:bg-green-400/10 border border-green-400 duration-500 hover:translate-x-3 h-fit font-bold"
      >
        My Resume
      </button>
    </nuxt-link>
  </div>
</template>

<script></script>

<style scoped></style>
