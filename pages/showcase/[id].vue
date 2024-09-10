<template>
  <div class="text-slate-950 z-0 container mx-auto">
    <div v-if="project" class="p-4 md:p-18 lg:p-36 text-slate-300">
      <h3 class="font-bold text-lg underline">{{ project.name }}</h3>

      <nuxt-link
        :to="project.url"
        target="_blank"
        class="flex flex-row items-center gap-x-2 mt-2 mb-6 w-fit hover:text-primary duration-300 text-xs"
      >
        <Icon name="mdi:link" />
        <p>{{ project.url }}</p>
      </nuxt-link>
      <div class="grid grid-cols-1 lg:grid-cols-2 text-sm">
        <img
          :src="`/images/${project.image}`"
          :alt="project.name"
          class="w-[350px] h-[500px] object-cover rounded-md border border-primary/10 mb-4 mx-auto"
        />
        <div class="flex flex-col gap-y-4 text-justify">
          <!-- description -->
          <div class="flex flex-col gap-y-1">
            <p class="underline">Description</p>
            <p class="text-xs">{{ project.description }}</p>
          </div>
          <!-- problematic -->
          <div class="flex flex-col gap-y-1">
            <p class="underline">Problematic:</p>
            <p class="text-xs">{{ project.problematic }}</p>
          </div>
          <!-- difficulties -->
          <div class="flex flex-col gap-y-1">
            <p class="underline">Difficulties:</p>
            <p class="text-xs">{{ project.difficulties }}</p>
          </div>
          <!-- solutions -->
          <div class="flex flex-col gap-y-1">
            <p class="underline">Solutions:</p>
            <p class="text-xs">
              {{ project.solutions }}
            </p>
          </div>
          <!-- tech stack -->
          <p class="underline">Tech stack:</p>
          <div class="flex gap-4">
            <Icon
              class="drop-shadow-2xl text-3xl"
              v-for="icon in project.tech_stack"
              :key="icon"
              :name="`vscode-icons:file-type-${icon}`"
            />
          </div>
        </div>
      </div>
    </div>
    <div v-else>loading...</div>
  </div>
</template>

<script setup>
const { params } = useRoute();
const { data: project } = await useFetch(() => "/api/showcase/" + params.id, {
  lazy: true,
});
</script>
