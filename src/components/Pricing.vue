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
      <div class="w-full sm:w-11/12 md:w-3/5 lg:w-6/12 2xl:w-5/12 px-4">
        <h2
          class="text-5xl font-title tracking-wide font-medium text-gray-800 text-left sm:text-center leading-12"
        >
          Simple and affordable plans starting at only $5
        </h2>
        <p
          class="text-lg leading-relaxed mt-8 mb-4 text-left text-gray-600 sm:text-center"
        >
          We're putting the power in your hands with 100% transparent pricing.
          Simply select your plan, see your coverage and purchase in just five
          minutes.
        </p>
      </div>
    </div>
    <div>
      <div class=" md:mx-6 mx-auto flex flex-col lg:flex-row">
        <Price plan="$5 Monthly Plan" coverage="$20,000+" />
        <Price plan="$10 Monthly Plan" coverage="$60,000+" />
        <Price plan="$15 Monthly Plan" coverage="$110,000+" />
      </div>
    </div>
  </section>
</template>

<script>
import Price from "./ResuableComponents/Price.vue";

export default {
  name: "pricing",
  components: {
    Price,
  },
};
</script>
