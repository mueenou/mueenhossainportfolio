<template>
  <div class="text-slate-950 z-0">
    <div
      class="p-10 mt-36 md:w-[758px] w-[80%] shadow-lg rounded-xl bg-slate-100 mx-auto flex flex-col divide-y-2 gap-y-8 divide-primary z-0 mb-16"
    >
      <div class="flex flex-row items-center justify-between w-full pt-8">
        <div class="avatar z-0">
          <div class="w-24 rounded">
            <img class="scale-[175%]" src="../../assets/images/avatar.jpg" />
          </div>
        </div>
        <div class="text-center">
          <h1 class="text-green-700 font-extrabold">Mueen Hossain</h1>
          <blockquote>Front End Developer</blockquote>
        </div>
        <div>
          <button
            class="border border-primary rounded-full p-2 hover:bg-primary/10 hover:cursor-pointer"
          >
            <a href="#" target="_blank" download="../../assets/files/cv_mueen_tw.pdf">
              <Icon
                class="text-4xl text-primary duration-100"
                name="material-symbols:download-rounded"
              />
            </a>
          </button>
        </div>
      </div>
      <div class="flex flex-col justify-between w-full pt-8 relative">
        <h2 class="absolute -top-3 px-1 bg-slate-900 rounded-md text-primary">
          About me
        </h2>
        <div>
          <p class="text-sm text-justify">
            I have always had a passion for web development and emerging technologies. The
            dedication, which followed, allowed me to specialize in Vue.js and front-end
            development. I have a keen interest in graphic design and frequently use tools
            like Adobe Photoshop and Illustrator to enhance user experiences. Over the
            course of my career, I've actively engaged with different tools and coding
            languages, such as frameworks and back-end related tools, all while
            consistently honing my skills and expanding my knowledge. While I have a deep
            affinity for front-end development, I remain enthusiastic about further
            learning and growth. Thank you for considering my qualifications.
          </p>
        </div>
      </div>
      <div class="flex flex-col w-full pt-8 relative">
        <h2 class="absolute -top-3 px-1 bg-slate-900 rounded-md text-primary">Skills</h2>
        <div
          class="my-10 scale-x-150 scale-y-125 md:my-0 md:scale-100 md:grid-cols-4 grid grid-col-1 md:gap-2 md:gap-y-6 mx-auto"
        >
          <div>
            <p class="text-xs mb-2 text-slate-600 flex flex-row items-center">
              <Icon class="text-sm" name="devicon:vuejs" />
              <Icon class="text-sm" name="devicon:nuxtjs" />
              <span class="ml-2">VUE/NUXT</span>
            </p>
            <div class="h-3 bg-slate-200 w-[160px]">
              <div
                class="h-full shadow-lg bg-green-400"
                v-motion="{
                  initial: {
                    width: 0,
                  },
                  enter: {
                    width: 155,
                    transition: {
                      duration: 1000,
                      ease: 'circOut',
                    },
                  },
                }"
              ></div>
            </div>
          </div>
          <div>
            <p class="text-xs mb-2 text-slate-600 flex flex-row items-center">
              <Icon class="text-sm" name="devicon:react" /><span class="ml-2">REACT</span>
            </p>
            <div class="h-3 bg-slate-200 w-[160px]">
              <div
                class="h-full shadow-lg bg-[#00d8ff]"
                v-motion="{
                  initial: {
                    width: 0,
                  },
                  enter: {
                    width: 120,
                    transition: {
                      delay: 100,
                      duration: 1000,
                      ease: 'circOut',
                    },
                  },
                }"
              ></div>
            </div>
          </div>
          <div>
            <p class="text-xs mb-2 text-slate-600 flex flex-row items-center">
              <Icon class="text-sm" name="devicon:html5" /><span class="ml-2">HTML</span>
            </p>
            <div class="h-3 bg-slate-200 w-[160px]">
              <div
                class="h-full shadow-lg bg-[#E34C26]"
                v-motion="{
                  initial: {
                    width: 0,
                  },
                  enter: {
                    width: 155,
                    transition: {
                      delay: 300,
                      duration: 1000,
                      ease: 'circOut',
                    },
                  },
                }"
              ></div>
            </div>
          </div>
          <div>
            <p class="text-xs mb-2 text-slate-600 flex flex-row items-center">
              <Icon class="text-sm" name="skill-icons:css" /><span class="ml-2">CSS</span>
            </p>
            <div class="h-3 bg-slate-200 w-[160px]">
              <div
                class="h-full shadow-lg bg-[#E31B5F]"
                v-motion="{
                  initial: {
                    width: 0,
                  },
                  enter: {
                    width: 155,
                    transition: {
                      delay: 1000,
                      duration: 1000,
                      ease: 'circOut',
                    },
                  },
                }"
              ></div>
            </div>
          </div>
          <div>
            <p class="text-xs mb-2 text-slate-600 flex flex-row items-center">
              <Icon class="text-sm" name="devicon:nodejs" /><span class="ml-2"
                >NODEJS</span
              >
            </p>
            <div class="h-3 bg-slate-200 w-[160px]">
              <div
                class="h-full shadow-lg bg-[#3c873a]"
                v-motion="{
                  initial: {
                    width: 0,
                  },
                  enter: {
                    width: 140,
                    transition: {
                      delay: 200,
                      duration: 1000,
                      ease: 'circOut',
                    },
                  },
                }"
              ></div>
            </div>
          </div>
          <div>
            <p class="text-xs mb-2 text-slate-600 flex flex-row items-center">
              <Icon class="text-sm" name="vscode-icons:file-type-sql" />
              <Icon class="text-sm" name="devicon:postgresql" /><span class="ml-2"
                >SQL/POSTGRESQL</span
              >
            </p>
            <div class="h-3 bg-slate-200 w-[160px]">
              <div
                class="h-full shadow-lg bg-[#00758f]"
                v-motion="{
                  initial: {
                    width: 0,
                  },
                  enter: {
                    width: 100,
                    transition: {
                      delay: 600,
                      duration: 1000,
                      ease: 'circOut',
                    },
                  },
                }"
              ></div>
            </div>
          </div>
          <div>
            <p class="text-xs mb-2 text-slate-600 flex flex-row items-center">
              <Icon class="text-sm" name="devicon:javascript" /><span class="ml-2"
                >JAVASCRIPT</span
              >
            </p>
            <div class="h-3 bg-slate-200 w-[160px]">
              <div
                class="h-full shadow-lg bg-yellow-300"
                v-motion="{
                  initial: {
                    width: 0,
                  },
                  enter: {
                    width: 150,
                    transition: {
                      delay: 300,
                      duration: 1000,
                      ease: 'circOut',
                    },
                  },
                }"
              ></div>
            </div>
          </div>
          <div>
            <p class="text-xs mb-2 text-slate-600 flex flex-row items-center">
              <Icon class="text-sm" name="devicon:tailwindcss" /><span class="ml-2"
                >TAILWIND</span
              >
            </p>
            <div class="h-3 bg-slate-200 w-[160px]">
              <div
                class="h-full shadow-lg bg-red-600"
                v-motion="{
                  initial: {
                    width: 0,
                  },
                  enter: {
                    width: 150,
                    transition: {
                      delay: 800,
                      duration: 1000,
                      ease: 'circOut',
                    },
                  },
                }"
              ></div>
            </div>
          </div>
        </div>
        <div class="mt-10">
          <h3 class="text-sm text-center text-slate-600 font-bold">TOOLS & OTHERS</h3>
          <div class="p-10 grid md:grid-cols-7 grid-cols-3 gap-x-10 gap-y-2">
            <Icon
              class="text-3xl"
              name="devicon:supabase"
              v-motion="{
                initial: {
                  y: 10,
                  opacity: 0,
                },
                enter: {
                  y: 0,
                  opacity: 1,
                  transition: {
                    delay: 900,
                    duration: 1000,
                    ease: 'linear',
                  },
                },
              }"
            />
            <Icon
              v-motion="{
                initial: {
                  y: 10,
                  opacity: 0,
                },
                enter: {
                  y: 0,
                  opacity: 1,
                  transition: {
                    delay: 1000,
                    duration: 1000,
                    ease: 'linear',
                  },
                },
              }"
              class="text-3xl"
              name="devicon:svelte"
            />
            <Icon
              v-motion="{
                initial: {
                  y: 10,
                  opacity: 0,
                },
                enter: {
                  y: 0,
                  opacity: 1,
                  transition: {
                    delay: 1100,
                    duration: 1000,
                    ease: 'linear',
                  },
                },
              }"
              class="text-3xl"
              name="devicon:java"
            />
            <Icon
              v-motion="{
                initial: {
                  y: 10,
                  opacity: 0,
                },
                enter: {
                  y: 0,
                  opacity: 1,
                  transition: {
                    delay: 1200,
                    duration: 1000,
                    ease: 'linear',
                  },
                },
              }"
              class="text-3xl"
              name="devicon:git"
            />
            <Icon
              v-motion="{
                initial: {
                  y: 10,
                  opacity: 0,
                },
                enter: {
                  y: 0,
                  opacity: 1,
                  transition: {
                    delay: 1300,
                    duration: 1000,
                    ease: 'linear',
                  },
                },
              }"
              class="text-3xl"
              name="devicon:bootstrap"
            />
            <Icon
              v-motion="{
                initial: {
                  y: 10,
                  opacity: 0,
                },
                enter: {
                  y: 0,
                  opacity: 1,
                  transition: {
                    delay: 1400,
                    duration: 1000,
                    ease: 'linear',
                  },
                },
              }"
              class="text-3xl"
              name="devicon:github"
            />
            <Icon
              v-motion="{
                initial: {
                  y: 10,
                  opacity: 0,
                },
                enter: {
                  y: 0,
                  opacity: 1,
                  transition: {
                    delay: 1500,
                    duration: 1000,
                    ease: 'linear',
                  },
                },
              }"
              class="text-3xl"
              name="devicon:jquery"
            />
          </div>
        </div>
        <div class="mt-0">
          <h3 class="text-sm text-center text-slate-600 font-bold">LANGUAGES</h3>
          <div class="flex flex-row gap-x-8 justify-center p-10 uppercase">
            <p
              class="bg-slate-200 shadow rounded-full px-2"
              v-motion="{
                initial: {
                  y: 10,
                  opacity: 0,
                },
                enter: {
                  y: 0,
                  opacity: 1,
                  transition: {
                    delay: 1000,
                    duration: 500,
                    ease: 'circOut',
                  },
                },
              }"
            >
              French
            </p>
            <p
              class="bg-slate-200 shadow rounded-full px-2"
              v-motion="{
                initial: {
                  y: 10,
                  opacity: 0,
                },
                enter: {
                  y: 0,
                  opacity: 1,
                  transition: {
                    delay: 1000,
                    duration: 500,
                    ease: 'circOut',
                  },
                },
              }"
            >
              English
            </p>
            <p
              class="bg-slate-200 shadow rounded-full px-2"
              v-motion="{
                initial: {
                  y: 10,
                  opacity: 0,
                },
                enter: {
                  y: 0,
                  opacity: 1,
                  transition: {
                    delay: 1000,
                    duration: 500,
                    ease: 'circOut',
                  },
                },
              }"
            >
              Bengali
            </p>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6 w-full pt-8 relative">
        <h2 class="absolute -top-3 px-1 bg-slate-900 rounded-md text-primary">
          Experiences
        </h2>
        <div
          class="flex flex-col relative rounded-md border border-primary p-2 justify-start gap-y-1"
          v-motion="{
            initial: {
              x: -10,
              opacity: 0,
            },
            visible: {
              x: 0,
              opacity: 1,
              transition: {
                delay: 0,
                duration: 1000,
                ease: 'linear',
              },
            },
          }"
        >
          <div
            class="ring-2 ring-primary w-fit px-1 rounded-full bg-primary absolute -top-2 text-slate-100 text-xs"
          >
            <span>2022-2023</span>
          </div>
          <div><span>Stratocore</span></div>
          <div><p class="text-xs text-slate-400">Atlanta, Georgia - USA</p></div>
          <div class="mb-4">
            <p class="text-xs">
              As a Vue.js and TSQL developer for a SaaS tool catering to laboratories,
              schools, and research-based institutions, I played a pivotal role in coding
              a platform that facilitated tracking and pricing of rented scientiqc tools.
              Our solution enabled efqcient monitoring of scientiqc e'uipment,
              accommodating varying prices based on speciqc institutes requirements.
            </p>
          </div>
          <div
            class="absolute bottom-1 right-1 text-xs bg-slate-200 text-slate-400 rounded-full px-2"
          >
            <p>#vue #js #sql #tsql #.net #asp</p>
          </div>
        </div>
        <div
          class="flex flex-col relative rounded-md border border-primary p-2 justify-start gap-y-1"
          v-motion="{
            initial: {
              x: 10,
              opacity: 0,
            },
            visible: {
              x: 0,
              opacity: 1,
              transition: {
                delay: 0,
                duration: 1000,
                ease: 'linear',
              },
            },
          }"
        >
          <div
            class="ring-2 ring-primary w-fit px-1 rounded-full bg-primary absolute -top-2 text-slate-100 text-xs"
          >
            <span>2020-2021</span>
          </div>
          <div><span>Troov</span></div>
          <div>
            <p class="text-xs text-slate-400">Paris, France</p>
          </div>
          <div class="mb-4">
            <p class="text-xs">
              As a full-stack developer specializing in Nuxt.js and Node.js, I contributed
              to a company's platform aimed at locating lost items in specific cities and
              locations. My role involved designing and implementing back-end features and
              changes, creating intuitive user interfaces, and integrating external APIs
              for seamless functionality.
            </p>
          </div>
          <div
            class="absolute bottom-1 right-1 text-xs bg-slate-200 text-slate-400 rounded-full px-2"
          >
            <p>#nuxt #vue #js #node #i18n</p>
          </div>
        </div>
        <div
          class="flex flex-col relative rounded-md border border-primary p-2 justify-start gap-y-1"
          v-motion="{
            initial: {
              x: -10,
              opacity: 0,
            },
            visible: {
              x: 0,
              opacity: 1,
              transition: {
                delay: 0,
                duration: 1000,
                ease: 'linear',
              },
            },
          }"
        >
          <div
            class="ring-2 ring-primary w-fit px-1 rounded-full bg-primary absolute -top-2 text-slate-100 text-xs"
          >
            <span>2019-2020</span>
          </div>
          <div><span>TigerSun Media Group-Brennan&Fox</span></div>
          <div>
            <p class="text-xs text-slate-400">Paris, France</p>
          </div>
          <div class="mb-4">
            <p class="text-xs">
              As a JavaScript developer at an advertising agency, I specialized in coding
              various advertising banners for websites. I collaborated with the design
              team to understand their vision and objectives and then translated them into
              functional banners using JavaScript.
            </p>
          </div>
          <div
            class="absolute bottom-1 right-1 text-xs bg-slate-200 text-slate-400 rounded-full px-2"
          >
            <p>#js #angular #vue #mysql #sql</p>
          </div>
        </div>
        <div
          class="flex flex-col relative rounded-md border border-primary p-2 justify-start gap-y-1"
          v-motion="{
            initial: {
              x: 10,
              opacity: 0,
            },
            visible: {
              x: 0,
              opacity: 1,
              transition: {
                delay: 0,
                duration: 1000,
                ease: 'linear',
              },
            },
          }"
        >
          <div
            class="ring-2 ring-primary w-fit px-1 rounded-full bg-primary absolute -top-2 text-slate-100 text-xs"
          >
            <span>2018-2019</span>
          </div>
          <div><span>Aryga</span></div>
          <div>
            <p class="text-xs text-slate-400">Orry-La-Ville, France</p>
          </div>
          <div class="mb-4">
            <p class="text-xs">
              Coding a controlling application using VueJS for a machine, and coding
              little parts of their main website: http://www.dessinetonmeuble.fr.
            </p>
          </div>
          <div
            class="absolute bottom-1 right-1 text-xs bg-slate-200 text-slate-400 rounded-full px-2"
          >
            <p>#vue #js #laravel #frontend #canvas</p>
          </div>
        </div>
      </div>
      <div
        class="grid grid-cols-1 md:grid-cols-3 gap-y-2 md:flex-row items-center justify-between w-full pt-8 relative gap-x-2"
      >
        <h2 class="absolute -top-3 px-1 bg-slate-900 rounded-md text-primary">
          Educations
        </h2>
        <div
          class="flex flex-row items-center justify-between gap-x-4 border border-blue-400 rounded-md p-2 h-28"
          v-motion="{
            initial: {
              x: -40,
              opacity: 0,
            },
            enter: {
              x: 0,
              opacity: 1,
              transition: {
                duration: 500,
                ease: 'circOut',
              },
            },
          }"
        >
          <div class="avatar rounded-full">
            <div class="w-8 rounded-full">
              <img src="../../assets/images/ipssi.png" />
            </div>
          </div>
          <div class="flex flex-col text-xs">
            <p class="font-bold text-sm">IPSSI, Ingineering school</p>
            <p>Masters degree in Web & Big data</p>
            <p class="text-slate-400"><span>2019-2021</span></p>
          </div>
        </div>
        <div
          class="flex flex-row items-center justify-between gap-x-4 border border-blue-400 rounded-md p-2 h-28"
          v-motion="{
            initial: {
              x: -40,
              opacity: 0,
            },
            enter: {
              x: 0,
              opacity: 1,
              transition: {
                delay: 400,
                duration: 500,
                ease: 'circOut',
              },
            },
          }"
        >
          <div class="avatar rounded-full">
            <div class="w-8 rounded-full">
              <img src="../../assets/images/sorbonne.png" />
            </div>
          </div>
          <div class="flex flex-col text-xs">
            <p class="font-bold text-sm">Sorbonne</p>
            <p>Bachelors degree in Web project</p>
            <p class="text-slate-400"><span>2018-2019</span></p>
          </div>
        </div>
        <div
          class="flex flex-row items-center justify-between gap-x-4 border border-blue-400 rounded-md p-2 h-28"
          v-motion="{
            initial: {
              x: -40,
              opacity: 0,
            },
            enter: {
              x: 0,
              opacity: 1,
              transition: {
                delay: 900,
                duration: 500,
                ease: 'circOut',
              },
            },
          }"
        >
          <div class="avatar rounded-full">
            <div class="w-8 rounded-full">
              <img src="../../assets/images/oclock.png" />
            </div>
          </div>
          <div class="flex flex-col justify-between text-xs">
            <p class="font-bold text-sm">O'clock</p>
            <p>6 months Coding bootcamp</p>
            <p class="text-slate-400"><span>2018</span></p>
          </div>
        </div>
      </div>
      <div
        class="flex flex-row items-center justify-between w-full pt-8 relative gap-x-2"
      >
        <h2 class="absolute -top-3 px-1 bg-slate-900 rounded-md text-primary">Hobbies</h2>
        <div class="md:grid-cols-6 gap-x-8 md:justify-center mx-auto grid grid-cols-3">
          <Icon
            class="text-5xl text-green-700"
            v-motion="{
              initial: {
                opacity: 0,
              },
              enter: {
                opacity: 1,
                transition: {
                  duration: 1000,
                  ease: 'linear',
                },
              },
            }"
            name="ion:football"
          />
          <Icon
            class="text-5xl text-green-700"
            v-motion="{
              initial: {
                opacity: 0,
              },
              enter: {
                opacity: 1,
                transition: {
                  delay: 0,
                  duration: 1000,
                  ease: 'linear',
                },
              },
            }"
            name="bx:cricket-ball"
          />
          <Icon
            class="text-5xl text-green-700"
            v-motion="{
              initial: {
                opacity: 0,
              },
              enter: {
                opacity: 1,
                transition: {
                  delay: 0,
                  duration: 1000,
                  ease: 'linear',
                },
              },
            }"
            name="maki:gaming"
          />
          <Icon
            class="text-5xl text-green-700"
            v-motion="{
              initial: {
                opacity: 0,
              },
              enter: {
                opacity: 1,
                transition: {
                  delay: 0,
                  duration: 1000,
                  ease: 'linear',
                },
              },
            }"
            name="material-symbols:travel"
          />
          <Icon
            class="text-5xl text-green-700"
            v-motion="{
              initial: {
                opacity: 0,
              },
              enter: {
                opacity: 1,
                transition: {
                  delay: 0,
                  duration: 1000,
                  ease: 'linear',
                },
              },
            }"
            name="material-symbols:family-restroom"
          />
          <Icon
            class="text-5xl text-green-700"
            v-motion="{
              initial: {
                opacity: 0,
              },
              enter: {
                opacity: 1,
                transition: {
                  delay: 0,
                  duration: 1000,
                  ease: 'linear',
                },
              },
            }"
            name="zondicons:film"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped></style>
