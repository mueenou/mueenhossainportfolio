<template>
  <div class="text-slate-950 z-0 container mx-auto">
    <div class="p-4 md:p-36 lg:py-64">
      <h2 class="text-slate-300 font-bold text-2xl mb-16">My projects</h2>
      <div
        v-if="projects"
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center text-center gap-x-10 gap-y-16 w-max mx-auto"
      >
        <nuxt-link
          v-for="project in projects"
          :key="project.id"
          :to="`/showcase/${project.id}`"
          class="relative ring ring-green-600 w-[250px] h-[250px] rounded-xl group overflow-hidden"
        >
          <!-- Project Image -->
          <img
            :src="`/images/${project.image}`"
            :alt="project.name"
            class="w-full h-full object-cover"
          />

          <!-- Overlay panel -->
          <div
            class="absolute flex flex-col inset-0 opacity-0 bg-green-950 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-60 justify-center items-center transition-all duration-300 group-hover:opacity-100 text-white text-xs"
          >
            <p class="tracking-tighter">{{ project.description.slice(0, 65) + "..." }}</p>
            <div class="text-2xl flex gap-4 mt-6 py-1 px-2">
              <Icon
                class="drop-shadow-2xl"
                v-for="icon in project.tech_stack"
                :name="`vscode-icons:file-type-${icon}`"
              />
            </div>
            <nuxt-link
              :to="`/showcase/${project.id}`"
              class="rounded-full py-2 px-3 text-sm bg-slate-900 text-primary hover:bg-green-400/10 border border-green-400 duration-500 font-bold mt-4 group hover:-translate-y-1"
              >Read more</nuxt-link
            >
          </div>
        </nuxt-link>
      </div>
      <div v-else>
        <p>Loading...</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const { data: projects } = useFetch("/api/showcase");
</script>
