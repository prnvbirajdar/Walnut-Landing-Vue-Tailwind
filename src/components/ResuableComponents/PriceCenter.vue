<template>
  <div
    class="w-11/12 lg:w-4/12 md:w-8/12 mx-auto px-4 text-center lg:transform lg:transition lg:hover:scale-105"
  >
  <!-- Walnut logo only visible for large screens -->
    <div class="hidden lg:block mx-auto h-40 w-40">
      <img src="/logo.png" alt="Logo" />
    </div>

    <div class="lg:-mt-10 mb-8 shadow hover:shadow-lg rounded-lg">
      <div class="px-4 py-16 lg:py-28 flex-auto">
        <h2
          class="mb-1 text-2xl md:text-3xl font-title tracking-wide font-semibold text-salmon lg:text-3xl"
        >
          {{ plan }}
        </h2>
        <p class="mb-6 font-bold text-gray-600 lg:text-lg">
          Life Insurance Coverage
        </p>
        <div class="flex justify-center">
          <svg
            viewBox="0 0 551.147 551.147"
            xmlns="http://www.w3.org/2000/svg"
            class="h-7 w-7 lg:h-8"
          >
            <path
              d="M275.574 551.147c-2.573 0-5.163-.572-7.535-1.749C159.084 496.35 68.9 439.098 68.9 275.582V86.131c0-7.232 4.524-13.724 11.336-16.18L269.687 1.06c3.801-1.413 7.972-1.413 11.773 0l189.451 68.891c6.812 2.456 11.336 8.948 11.336 16.18v189.451c0 163.516-90.184 220.768-199.139 273.816-2.371 1.177-4.961 1.749-7.534 1.749zM103.345 98.208v177.375c0 128.465 57.992 182.454 172.228 239.135 114.236-56.681 172.228-110.67 172.228-239.135V98.208L275.574 35.573 103.345 98.208z"
            />
          </svg>

          <h3
            class="mb-1 text-2xl font-title font-semibold text-gray-800 lg:text-2xl"
          >
            &nbsp;{{ coverage }}
          </h3>
        </div>
        <p class="mb-4 text-gray-600 w-40 mx-auto text-xs leading-relaxed">
          Access to our member platform and exclusive perks
        </p>

        <div class="flex justify-center sm:text-left mt-8">
          <button
            class="bg-new-blue w-44 hover:bg-new-blue-hover transition-colors font-bold text-white active:bg-gray-700 text px-6 py-4 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
            type="button"
          >
            Join Waitlist
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PriceCenter",
  props: ["plan", "coverage"],
};
</script>
