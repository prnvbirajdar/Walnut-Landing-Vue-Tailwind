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
      <div class="px-2 py-6 mx-auto lg:w-1/3 md:w-full">
        <div class="py-10 border-2 shadow-md rounded-xl mx-auto w-10/12">
          <h2
            class="mb-1 text-2xl font-title tracking-wide font-semibold text-salmon lg:text-4xl"
          >
            $5 Monthly Plan
          </h2>
          <p class="mb-6 font-bold text-gray-600 lg:text-lg">
            Life Insurance Coverage
          </p>
          <div class="flex justify-center">
            <svg
              viewBox="0 0 551.147 551.147"
              xmlns="http://www.w3.org/2000/svg"
              class="h-7 w-7"
            >
              <path
                d="M275.574 551.147c-2.573 0-5.163-.572-7.535-1.749C159.084 496.35 68.9 439.098 68.9 275.582V86.131c0-7.232 4.524-13.724 11.336-16.18L269.687 1.06c3.801-1.413 7.972-1.413 11.773 0l189.451 68.891c6.812 2.456 11.336 8.948 11.336 16.18v189.451c0 163.516-90.184 220.768-199.139 273.816-2.371 1.177-4.961 1.749-7.534 1.749zM103.345 98.208v177.375c0 128.465 57.992 182.454 172.228 239.135 114.236-56.681 172.228-110.67 172.228-239.135V98.208L275.574 35.573 103.345 98.208z"
              />
            </svg>

            <h3
              class="mb-1 text-2xl font-title font-semibold text-gray-800 lg:text-4xl"
            >
              &nbsp;$20,000+
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
  </section>
  <!-- 
  <section class="pb-20 bg-gray-300 -mt-24">
    <div class="container mx-auto px-4">
      <div class="flex flex-wrap">
        <div class="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
          <div
            class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
          >
            <div class="px-4 py-5 flex-auto">
              <div
                class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400"
              >
                <i class="fas fa-award"></i>
              </div>
              <h6 class="text-xl font-semibold">Awarded Agency</h6>
              <p class="mt-2 mb-4 text-gray-600">
                Divide details about your product or agency work into parts. A
                paragraph describing a feature will be enough.
              </p>
            </div>
          </div>
        </div>
        <div class="w-full md:w-4/12 px-4 text-center">
          <div
            class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
          >
            <div class="px-4 py-5 flex-auto">
              <div
                class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400"
              >
                <i class="fas fa-retweet"></i>
              </div>
              <h6 class="text-xl font-semibold">Free Revisions</h6>
              <p class="mt-2 mb-4 text-gray-600">
                Keep you user engaged by providing meaningful information.
                Remember that by this time, the user is curious.
              </p>
            </div>
          </div>
        </div>
        <div class="pt-6 w-full md:w-4/12 px-4 text-center">
          <div
            class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
          >
            <div class="px-4 py-5 flex-auto">
              <div
                class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400"
              >
                <i class="fas fa-fingerprint"></i>
              </div>
              <h6 class="text-xl font-semibold">Verified Company</h6>
              <p class="mt-2 mb-4 text-gray-600">
                Write a few lines about each one. A paragraph describing a
                feature will be enough. Keep you user engaged!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap items-center mt-32">
        <div class="w-full md:w-5/12 px-4 mr-auto ml-auto">
          <div
            class="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100"
          >
            <i class="fas fa-user-friends text-xl"></i>
          </div>
          <h3 class="text-3xl mb-2 font-semibold leading-normal">
            Working with us is a pleasure
          </h3>
          <p class="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
            Don't let your uses guess by attaching tooltips and popoves to any
            element. Just make sure you enable them first via JavaScript.
          </p>
          <p class="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700">
            The kit comes with three pre-built pages to help you get started
            faster. You can change the text and images and you're good to go.
            Just make sure you enable them first via JavaScript.
          </p>
          <a
            href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit#/presentation"
            class="font-bold text-gray-800 mt-8"
            >Check Tailwind Starter Kit!</a
          >
        </div>
        <div class="w-full md:w-4/12 px-4 mr-auto ml-auto">
          <div
            class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-pink-600"
          >
            <img
              alt="..."
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1051&amp;q=80"
              class="w-full align-middle rounded-t-lg"
            />
            <blockquote class="relative p-8 mb-4">
              <svg
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 583 95"
                class="absolute left-0 w-full block"
                style="height: 95px; top: -94px"
              >
                <polygon
                  points="-30,95 583,95 583,65"
                  class="text-pink-600 fill-current"
                ></polygon>
              </svg>
              <h4 class="text-xl font-bold text-white">Top Notch Services</h4>
              <p class="text-md font-light mt-2 text-white">
                The Arctic Ocean freezes every winter and much of the sea-ice
                then thaws every summer, and that process will continue whatever
                happens.
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  </section> -->
</template>
