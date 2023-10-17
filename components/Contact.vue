<template>
  <div class="lg:w-3/4 md:min-w-fit w-full md:p-32 mx-auto mt-20">
    <div class="flex flex-row justify-between items-center md:mb-8">
      <h2 class="text-3xl font-bold">Contact Me</h2>
      <div
        class="relative group rounded-full w-8 h-8 border border-primary grid items-center justify-center cursor-pointer hover:bg-primary/10"
      >
        <Icon name="ion:call-outline" class="text-" />
        <div
          class="md:opacity-0 group-hover:opacity-100 group-hover:block absolute text-xs group-hover:-left-32 rounded-md -left-16 top-1 scale-0 group-hover:scale-100 transition-all duration-300 ease-out bg-green-950 text-primary p-1"
        >
          06.20.29.70.62
        </div>
      </div>
    </div>
    <form
      action="https://formsubmit.co/5acb1b8f4ff7d6ad7184938ec81d96b8"
      method="POST"
      class="flex flex-col mx-auto w-full gap-y-2 md:gap-y-4 mt-4"
    >
      <div class="flex flex-col md:flex-row md:gap-x-4 w-full gap-y-2">
        <div class="relative w-full md:mb-4">
          <input
            type="text"
            name="First name"
            id="firstname_input"
            placeholder="FIRST NAME"
            class="input input-bordered input-accent border border-primary md:placeholder-transparent w-full peer placeholder-slate-600"
          />
          <label
            for="firstname_input"
            class="text-base text-slate-400 absolute left-4 -top-7 peer-placeholder-shown:text-slate-600 peer-placeholder-shown:text-sm peer-placeholder-shown:top-[13px] transition-all uppercase hidden md:block"
            >First name</label
          >
        </div>
        <div class="relative w-full">
          <input
            type="text"
            name="Last name"
            id="lastname_input"
            placeholder="LAST NAME"
            class="input input-bordered input-accent border border-primary md:placeholder-transparent w-full peer placeholder-slate-600"
          />
          <label
            for="lastname_input"
            class="text-base text-slate-400 absolute left-4 -top-7 peer-placeholder-shown:text-slate-600 peer-placeholder-shown:text-sm peer-placeholder-shown:top-[13px] transition-all uppercase hidden md:block"
            >last name</label
          >
        </div>
      </div>
      <div class="relative w-full mb-4">
        <input
          type="email"
          name="Email"
          id="email_input"
          placeholder="Email"
          class="input input-bordered input-accent border border-primary md:placeholder-transparent w-full peer placeholder-slate-600"
        />
        <label
          for="email_input"
          class="text-base text-slate-400 absolute left-4 -top-7 peer-placeholder-shown:text-slate-600 peer-placeholder-shown:text-sm peer-placeholder-shown:top-[13px] transition-all uppercase hidden md:block"
          >Email</label
        >
      </div>
      <div class="relative">
        <textarea
          name="Message"
          class="text-base textarea textarea-bordered border border-primary w-full min-h-[250px] md:placeholder-transparent placeholder-slate-600 peer"
          placeholder="YOUR MESSAGE"
          id="message_textarea"
        ></textarea>
        <label
          for="message_textarea"
          class="text-base text-slate-400 absolute left-4 -top-7 peer-placeholder-shown:text-slate-600 peer-placeholder-shown:text-sm peer-placeholder-shown:top-[13px] transition-all uppercase hidden md:block"
          >Your message</label
        >
      </div>
      <div class="mx-auto">
        <input
          type="submit"
          class="rounded py-2 px-3 text-sm bg-slate-900 text-primary hover:cursor-pointer hover:bg-green-400/10 border border-green-400 duration-500 font-bold"
        />
      </div>
    </form>
  </div>
</template>

<script setup></script>

<style scoped></style>
