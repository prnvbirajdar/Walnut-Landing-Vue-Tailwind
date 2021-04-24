<template>
  <div class="text-black px-5">
    <p class="px-5 rounded py-1 bg-gray-300 block sm:hidden">Mobile</p>
    <p class="px-5 rounded py-1 bg-red-300 hidden sm:block md:hidden">Sm</p>
    <p
      class="px-5 rounded py-1 bg-green-300 hidden sm:hidden md:block lg:hidden"
    >
      Md
    </p>
    <p
      class="px-5 rounded py-1 bg-blue-300 hidden sm:hidden md:hidden lg:block xl:hidden"
    >
      Lg
    </p>
    <p
      class="px-5 rounded py-1 bg-yellow-300 hidden sm:hidden md:hidden lg:hidden xl:block 2xl:hidden"
    >
      xl
    </p>
    <p
      class="px-5 rounded py-1 bg-purple-300 hidden sm:hidden md:hidden lg:hidden xl:hidden 2xl:block"
    >
      2xl
    </p>
  </div>
  <section class="bg-salmon dark:bg-gray-800 mt-96 h-96">
    <div
      class="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20"
    >
      <p class="text-2xl mt-4 mb-6 max-w-md mx-auto text-white">
        Join the waitlist
      </p>
      <h2
        class="text-5xl font-extrabold text-white dark:text-white sm:text-4xl"
      >
        <span class="block"> Get notified when we are live! </span>
      </h2>

      <div class="flex justify-center sm:text-left mt-12">
        <button
          class="text-new-blue transform transition hover:scale-105 w-44 font-bold bg-white active:bg-gray-700 text px-6 py-4 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
          type="button"
        >
          Join Waitlist
        </button>
      </div>
    </div>
  </section>
</template>
