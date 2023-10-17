<template>
  <!-- <nav
    class="bg-slate-900 h-20 text-slate-300 flex flex-row justify-between items-center px-10 fixed top-0 w-screen z-50"
  >
    <nuxt-link to="/">
      <h1
        class="text-3xl font-extrabold"
        v-motion="{
          initial: {
            x: -5,
            opacity: 0,
          },
          enter: {
            x: 0,
            opacity: 1,
            transition: {
              duration: 1500,
              ease: 'linear',
            },
          },
        }"
      >
        Mueen Hossain.
      </h1>
    </nuxt-link>
    <div class="flex-1"></div>
    <ul class="flex flex-row mr-4">
      <li class="xl:text-sm font-bold mx-4 text-slate-300 hover:text-primary duration-200">
        <nuxt-link :to="{ path: '/', hash: '#skills' }">
          <span class="text-primary">01.</span>Skills
        </nuxt-link>
      </li>
      <li class="xl:text-sm font-bold mx-4 text-slate-300 hover:text-primary duration-200">
        <nuxt-link :to="{ path: '/', hash: '#experience' }">
          <span class="text-primary">02.</span>Experience
        </nuxt-link>
      </li>
      <li class="xl:text-sm font-bold mx-4 text-slate-300 hover:text-primary duration-200">
        <nuxt-link :to="{ path: '/', hash: '#work' }">
          <span class="text-primary">03.</span>Work
        </nuxt-link>
      </li>
      <li class="xl:text-sm font-bold mx-4 text-slate-300 hover:text-primary duration-200">
        <nuxt-link :to="{ path: '/', hash: '#contact' }">
          <span class="text-primary">04.</span>Contact
        </nuxt-link>
      </li>
    </ul>
    <nuxt-link to="/resume">
      <button
        class="rounded py-2 px-3 text-sm bg-slate-900 text-primary hover:bg-green-400/10 border border-green-400 duration-200 hover:translate-x-3"
      >
        Resume
      </button>
    </nuxt-link>
  </nav> -->
  <div class="drawer fixed top-0 z-[100]">
    <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content flex flex-col">
      <!-- Navbar -->
      <div class="w-full navbar bg-slate-900 h-[80px]">
        <div class="flex-none lg:hidden">
          <label for="my-drawer-3" class="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="inline-block w-6 h-6 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
        </div>
        <div class="flex-1 px-2 mx-2">
          <nuxt-link to="/">
            <h1
              class="text-3xl font-extrabold"
              v-motion="{
                initial: {
                  x: -5,
                  opacity: 0,
                },
                enter: {
                  x: 0,
                  opacity: 1,
                  transition: {
                    duration: 1500,
                    ease: 'linear',
                  },
                },
              }"
            >
              Mueen Hossain.
            </h1>
          </nuxt-link>
        </div>
        <div class="flex-none hidden lg:block">
          <ul class="flex flex-row mr-4 menu-horizontal h-full items-center gap-x-8 pt-2">
            <li
              class="xl:text-sm font-bold mx-4 text-slate-300 hover:text-primary duration-200"
            >
              <nuxt-link :to="{ path: '/', hash: '#home' }">
                <span class="text-primary">01.</span>Home
              </nuxt-link>
            </li>
            <li
              class="xl:text-sm font-bold mx-4 text-slate-300 hover:text-primary duration-200"
            >
              <nuxt-link :to="{ path: '/', hash: '#about-me' }">
                <span class="text-primary">02.</span>About me
              </nuxt-link>
            </li>
            <li
              class="xl:text-sm font-bold mx-4 text-slate-300 hover:text-primary duration-200"
            >
              <nuxt-link :to="{ path: '/', hash: '#skills' }">
                <span class="text-primary">03.</span>Skills
              </nuxt-link>
            </li>
            <li
              class="xl:text-sm font-bold mx-4 text-slate-300 hover:text-primary duration-200"
            >
              <nuxt-link :to="{ path: '/', hash: '#contact' }">
                <span class="text-primary">05.</span>Contact
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/resume">
                <button
                  class="rounded py-2 px-3 text-sm bg-slate-900 text-primary hover:bg-green-400/10 border border-green-400 duration-500 hover:translate-x-3 font-bold"
                >
                  My Resume
                </button>
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="drawer-side">
      <label for="my-drawer-3" class="drawer-overlay"></label>
      <ul class="menu p-4 w-80 min-h-full bg-slate-900">
        <!-- Sidebar content here -->
        <li
          class="xl:text-sm font-bold mx-4 text-slate-300 hover:text-primary duration-200"
        >
          <nuxt-link :to="{ path: '/', hash: '#home' }">
            <span class="text-primary">01.</span>Home
          </nuxt-link>
        </li>
        <li
          class="xl:text-sm font-bold mx-4 text-slate-300 hover:text-primary duration-200"
        >
          <nuxt-link :to="{ path: '/', hash: '#about-me' }">
            <span class="text-primary">02.</span>About me
          </nuxt-link>
        </li>
        <li
          class="xl:text-sm font-bold mx-4 text-slate-300 hover:text-primary duration-200"
        >
          <nuxt-link :to="{ path: '/', hash: '#skills' }">
            <span class="text-primary">03.</span>Skills
          </nuxt-link>
        </li>
        <li
          class="xl:text-sm font-bold mx-4 text-slate-300 hover:text-primary duration-200"
        >
          <nuxt-link :to="{ path: '/', hash: '#contact' }">
            <span class="text-primary">05.</span>Contact
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/resume">
            <button
              class="rounded py-2 px-3 text-sm bg-slate-900 text-primary hover:bg-green-400/10 border border-green-400 duration-500 hover:translate-x-3 font-bold"
            >
              My Resume
            </button>
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>
