<template>
  <div
    class="snap-y snap-mandatory h-screen w-screen overflow-y-scroll overflow-x-hidden bg-slate-900"
  >
    <div
      class="h-screen w-screen px-20 snap-start flex justify-center items-center text-8xl bg-slate-900"
    >
      <Landing id="home" />
    </div>
    <div
      class="h-screen w-screen px-20 snap-start flex justify-center items-center bg-slate-900"
    >
      <AboutMe id="about-me" />
    </div>
    <div
      class="h-screen w-screen snap-start flex justify-center items-center md:text-[250px] text-[100px] bg-slate-900 p-4 relative"
    >
      <Skills id="skills" class="px-20" />
    </div>
    <div
      id="contact"
      class="h-screen w-screen px-20 snap-start flex justify-center items-center bg-slate-900"
    >
      <Contact />
    </div>
  </div>
</template>
