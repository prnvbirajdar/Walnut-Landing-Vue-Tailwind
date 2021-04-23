<template>
  <header class="mt-28 w-11/12 md:w-10/12 mx-auto flex flex-col lg:flex-row md:h-screen">
     <div class="mb-16 hidden md:block lg:hidden">
      <img class="object-cover h-96" src="/phone.png" alt="Phone Image" />
    </div>
    <div class="text-left flex flex-col justify-center">
      <div class="md:w-3/4">
        <h1 class="text-salmon font-bold text-4xl sm:text-5xl">
          Life insurance — now a premium membership you'll love
        </h1>
        <p class="mt-6 text-lg text-gray-600">
          Introducing a new era of life insurance. Affordable plans, instant
          coverage and exciting member benefits.
        </p>

        <div class="text-center sm:text-left mt-6">
          <input
            class="border border-gray-400 hover:border-blue-500 focus:border-blue-500 w-full sm:w-1/2 md:w-3/5 px-6 py-4 rounded-full outline-none focus:outline-none mr-1 mb-1"
            style="transition: all 0.15s ease 0s"
            placeholder="Enter your email"
          />
        </div>
        <div class="text-center sm:text-left mt-2">
          <button
            class="bg-new-blue w-full sm:w-1/2 md:w-3/5 hover:bg-new-blue-hover transition-colors text-white active:bg-gray-700 text px-6 py-4 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
            type="button"
          >
            Join Waitlist
          </button>
        </div>
      </div>
    </div>
    <div class="mt-16 mx-auto md:mx-0 block md:hidden lg:block">
      <img class="object-cover h-96 md:h-96 lg:h-auto" src="/phone.png" alt="Phone Image" />
    </div>
  </header>
</template>
