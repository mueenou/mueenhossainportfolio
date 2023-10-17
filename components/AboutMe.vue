<template>
  <div
    class="flex flex-col md:flex md:flex-row md:px-20 md:items-center md:gap-x-10 md:justify-center items-center"
  >
    <div
      class="w-[50%] md:w-[30%] rounded-full md:ring-8 ring-4 overflow-y-hidden ring-primary/80 bg-slate-900 group mb-4 mx-auto"
    >
      <nuxt-link to="/resume">
        <img
          class="w-full group-hover:scale-105 duration-1000 ease-out"
          src="../assets/images/Sujet.png"
          width="240"
          alt="hero-picture"
        />
      </nuxt-link>
    </div>
    <div class="md:w-[50%] w-full">
      <div
        class="aboutme_skills-icons md:flex md:flex-row md:gap-x-10 md:justify-center md:mb-8 hidden"
      >
        <div class="relative">
          <Icon class="text-xl peer" name="skill-icons:javascript" />
          <div
            class="peer-hover:opacity-100 opacity-0 absolute -left-[45px] text-center -top-6 transition-all duration-300 ease-out bg-green-950 text-primary px-1 rounded-md w-28"
          >
            Javascript
          </div>
        </div>
        <div class="relative">
          <Icon class="text-xl peer" name="skill-icons:css" />
          <div
            class="peer-hover:opacity-100 opacity-0 absolute -left-[45px] text-center -top-6 transition-all duration-300 ease-out bg-green-950 text-primary px-1 rounded-md w-28"
          >
            Css
          </div>
        </div>
        <div class="relative">
          <Icon class="text-xl peer" name="skill-icons:nodejs-dark" />
          <div
            class="peer-hover:opacity-100 opacity-0 absolute -left-[45px] text-center -top-6 transition-all duration-300 ease-out bg-green-950 text-primary px-1 rounded-md w-28"
          >
            Node
          </div>
        </div>
        <div class="relative">
          <Icon class="text-xl peer" name="skill-icons:react-dark" />
          <div
            class="peer-hover:opacity-100 opacity-0 absolute -left-[45px] text-center -top-6 transition-all duration-300 ease-out bg-green-950 text-primary px-1 rounded-md w-28"
          >
            React
          </div>
        </div>
        <div class="relative">
          <Icon class="text-xl peer" name="skill-icons:vuejs-dark" />
          <div
            class="peer-hover:opacity-100 opacity-0 absolute -left-[45px] text-center -top-6 transition-all duration-300 ease-out bg-green-950 text-primary px-1 rounded-md w-28"
          >
            Vue
          </div>
        </div>
        <div class="relative">
          <Icon class="text-xl peer" name="skill-icons:github-dark" />
          <div
            class="peer-hover:opacity-100 opacity-0 absolute -left-[45px] text-center -top-6 transition-all duration-300 ease-out bg-green-950 text-primary px-1 rounded-md w-28"
          >
            Github
          </div>
        </div>
        <div class="relative">
          <Icon class="text-xl peer" name="skill-icons:mongodb" />
          <div
            class="peer-hover:opacity-100 opacity-0 absolute -left-[45px] text-center -top-6 transition-all duration-300 ease-out bg-green-950 text-primary px-1 rounded-md w-28"
          >
            Mongodb
          </div>
        </div>
        <div class="relative">
          <Icon class="text-xl peer" name="vscode-icons:file-type-sql" />
          <div
            class="peer-hover:opacity-100 opacity-0 absolute -left-[45px] text-center -top-6 transition-all duration-300 ease-out bg-green-950 text-primary px-1 rounded-md w-28"
          >
            Sql
          </div>
        </div>
      </div>
      <p class="md:text-sm text-xs text-justify">
        I have always had a passion for web development and emerging technologies. The
        dedication, which followed, allowed me to specialize in
        <span class="text-primary">Vue.js and front-end development</span>. I have a keen
        interest in graphic design and frequently use tools like Adobe Photoshop and
        Illustrator to enhance <span class="text-primary">user experiences</span>. Over
        the course of my career, I've actively engaged with different tools and coding
        languages, such as frameworks and back-end related tools, all while consistently
        honing my skills and expanding my knowledge. While I have a deep affinity for
        front-end development, I remain enthusiastic about further
        <span class="text-primary">learning and growth</span>. Thank you for considering
        my qualifications.
      </p>
      <div
        class="aboutme_skills-icons md:flex md:flex-row md:gap-x-10 md:justify-center md:mt-8 hidden"
      >
        <div class="relative">
          <Icon class="text-xl peer" name="skill-icons:nuxtjs-dark" />
          <div
            class="peer-hover:opacity-100 opacity-0 absolute -left-[45px] -bottom-7 transition-all duration-300 ease-out bg-green-950 text-primary px-1 rounded-md w-28 text-center"
          >
            Nuxt
          </div>
        </div>
        <div class="relative">
          <Icon class="text-xl peer" name="skill-icons:tailwindcss-dark" />
          <div
            class="peer-hover:opacity-100 opacity-0 absolute -left-[45px] -bottom-7 transition-all duration-300 ease-out bg-green-950 text-primary px-1 rounded-md w-28 text-center"
          >
            Tailwind
          </div>
        </div>
        <div class="relative">
          <Icon class="text-xl peer" name="skill-icons:git" />
          <div
            class="peer-hover:opacity-100 opacity-0 absolute -left-[45px] -bottom-7 transition-all duration-300 ease-out bg-green-950 text-primary px-1 rounded-md w-28 text-center"
          >
            Git
          </div>
        </div>
        <div class="relative">
          <Icon class="text-xl peer" name="skill-icons:figma-light" />
          <div
            class="peer-hover:opacity-100 opacity-0 absolute -left-[45px] -bottom-7 transition-all duration-300 ease-out bg-green-950 text-primary px-1 rounded-md w-28 text-center"
          >
            Figma
          </div>
        </div>
        <div class="relative">
          <Icon class="text-xl peer" name="skill-icons:illustrator" />
          <div
            class="peer-hover:opacity-100 opacity-0 absolute -left-[45px] -bottom-7 transition-all duration-300 ease-out bg-green-950 text-primary px-1 rounded-md w-28 text-center"
          >
            Adobe Illustrator
          </div>
        </div>
        <div class="relative">
          <Icon class="text-xl peer" name="skill-icons:photoshop" />
          <div
            class="peer-hover:opacity-100 opacity-0 absolute -left-[45px] -bottom-7 transition-all duration-300 ease-out bg-green-950 text-primary px-1 rounded-md w-28 text-center"
          >
            Adobe Photoshop
          </div>
        </div>
        <div class="relative">
          <Icon class="text-xl peer" name="skill-icons:netlify-dark" />
          <div
            class="peer-hover:opacity-100 opacity-0 absolute -left-[45px] -bottom-7 transition-all duration-300 ease-out bg-green-950 text-primary px-1 rounded-md w-28 text-center"
          >
            Netlify
          </div>
        </div>
        <div class="relative">
          <Icon class="text-xl peer" name="skill-icons:jquery" />
          <div
            class="peer-hover:opacity-100 opacity-0 absolute -left-[45px] -bottom-7 transition-all duration-300 ease-out bg-green-950 text-primary px-1 rounded-md w-28 text-center"
          >
            jQuery
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>

<style scoped></style>
