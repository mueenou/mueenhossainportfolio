<template>
  <div
    class="skills snap-x flex snap-mandatory h-screen w-full overflow-x-scroll"
    ref="slidesContainer"
  >
    <div
      class="lg:text-8xl bg-slate-900 md:text-4xl text-2xl absolute text-primary left-[30px] top-[50%] translate-y-[-50%] lg:left-[150px] rounded-full lg:w-28 lg:h-28 md:w-20 md:h-20 w-12 h-12 border border-primary grid items-center justify-center cursor-pointer hover:bg-primary/10"
      @click="previous()"
    >
      <Icon name="ion:chevron-back" />
    </div>
    <div
      class="lg:text-8xl bg-slate-900 md:text-4xl text-2xl absolute text-primary rounded-full lg:w-28 lg:h-28 md:w-20 md:h-20 w-12 h-12 border border-primary grid items-center justify-center cursor-pointer hover:bg-primary/10 right-[30px] top-[50%] translate-y-[-50%] lg:right-[150px]"
      @click="next()"
    >
      <Icon name="ion:chevron-forward" />
    </div>
    <div>
      <div
        class="h-screen w-screen snap-start flex-shrink-0 flex items-center text-[#41B883] flex-row justify-center"
        ref="slide"
      >
        <Icon name="bxl:vuejs" />
        <Icon name="simple-icons:nuxtdotjs" />
      </div>
    </div>
    <div
      class="h-screen w-screen snap-start flex-shrink-0 flex justify-center items-center text-[#7cc5d9]"
      ref="slide"
    >
      <Icon name="bxl:react" />
    </div>
    <div
      class="h-screen w-screen snap-start flex-shrink-0 flex justify-center items-center text-[#7cc5d9]"
      ref="slide"
    >
      <Icon name="devicon:supabase" />
    </div>
    <div
      class="h-screen w-screen snap-start flex-shrink-0 flex justify-center items-center text-[#3c873a]"
      ref="slide"
    >
      <Icon name="fa-brands:node" />
    </div>
    <div
      class="h-screen w-screen snap-start flex-shrink-0 flex justify-center items-center text-[#F29111] bg-slate-900"
      ref="slide"
    >
      <Icon name="bxl:postgresql" />
    </div>
  </div>
</template>

<script setup>
const slide = ref(null);
const slidesContainer = ref(null);

const previous = () => {
  const slideWidth = slide.value.clientWidth;
  slidesContainer.value.scrollLeft -= slideWidth;
};

const next = () => {
  const slideWidth = slide.value.clientWidth;
  slidesContainer.value.scrollLeft += slideWidth;
};
</script>

<style scoped>
/* Hiding scrollbar for Chrome, Safari and Opera */
.skills::-webkit-scrollbar {
  display: none;
}

/* Hiding scrollbar for IE, Edge and Firefox */
.skills {
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  scroll-behavior: smooth;
}

#slide-arrow-prev {
  left: 0;
  padding-left: 0.25rem;
  border-radius: 0 2rem 2rem 0;
}

#slide-arrow-next {
  right: 0;
  padding-left: 0.75rem;
  border-radius: 2rem 0 0 2rem;
}
</style>
