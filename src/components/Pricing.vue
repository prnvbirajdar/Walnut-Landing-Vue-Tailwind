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
  <section class="h-screen">
    <div class="mt-32 mb-10 flex flex-wrap justify-center">
      <div class="w-full sm:w-11/12 md:w-8/12 lg:w-6/12 2xl:w-5/12 px-4">
        <h2
          class="text-5xl font-title tracking-wide font-medium text-gray-800 text-left sm:text-center leading-12"
        >
          Simple and affordable plans starting at only $5
        </h2>
        <p
          class="text-lg leading-relaxed mt-8 mb-8 text-left text-gray-600 sm:text-center"
        >
          We're putting the power in your hands with 100% transparent pricing.
          Simply select your plan, see your coverage and purchase in just five
          minutes.
        </p>
      </div>
    </div>
    <!-- <div class="md:mx-6 mx-auto flex flex-col lg:flex-row"></div> -->
    <div class="flex flex-wrap">
      <Price plan="$5 Monthly Plan" coverage="$20,000+" />
      <PriceCenter plan="$10 Monthly Plan" coverage="$60,000+" />
      <Price plan="$15 Monthly Plan" coverage="$110,000+" />
    </div>

    <!-- <div class="flex flex-wrap">
 <Price plan="$5 Monthly Plan" coverage="$20,000+" />
      <div class="w-full md:w-4/12 px-4 text-center">
        <div
          class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
        >
          <div class="px-4 py-20 flex-auto">
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
                class="h-7 w-7 lg:h-10"
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
      <div class="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
        <div
          class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
        >
          <div class="px-4 py-5 flex-auto">
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
                class="h-7 w-7 lg:h-10"
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
    </div> -->
    <p class="w-full text-sm mt-8 text-gray-600 md:w-5/12 lg:w-4/12 mx-auto">
      Estimated coverage amounts for customers under 20-35 years of age with no
      pre-existing conditions.
    </p>
  </section>
</template>

<script>
import Price from "./ResuableComponents/Price.vue";
import PriceCenter from "./ResuableComponents/PriceCenter.vue";

export default {
  name: "pricing",
  components: {
    Price,
    PriceCenter,
  },
};
</script>
