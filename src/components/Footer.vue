<template>
  <footer class="flex flex-col w-11/12 mx-auto">
    <div class="flex pt-6 py-2">
      <div class="flex w-full">
        <img class="h-7 w-6" src="/logo.png" alt="Logo" />
        <a
          href="#"
          class="text-xl font-title font-extrabold text-salmon cursor-pointer select-none"
          >&nbsp;&nbsp;walnut</a
        >
      </div>

      <div class="flex items-center space-x-2">
        <a
          href="#"
          class="mr-4 text-gray-800 hover:text-blue-800"
          aria-label="Facebook"
        >
          <svg
            class="w-7 h-7 fill-current"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z"
            ></path>
          </svg>
        </a>

        <a
          href="#"
          class="text-gray-800 hover:text-blue-800"
          aria-label="Github"
        >
          <svg
            class="w-6 h-6 fill-current"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
            />
          </svg>
        </a>
      </div>
    </div>
    <!--TODO: Create components for each button below. Lots of repetition. -->
    <div class="text-left pt-2 flex flex-wrap md:flex-row flex-col">
      <a
        href="#"
        class="mr-4 mt-4 py-3 px-6 text-green-new rounded hover:bg-gray-100 self-start focus:bg-gray-100"
        aria-label="Digital Protection"
      >
        Digital Protection
      </a>
      <a
        href="#"
        class="mr-4 mt-4 py-3 px-6 rounded hover:bg-gray-100 self-start focus:bg-gray-100"
        aria-label="Terms of Use"
      >
        Terms of Use
      </a>
      <a
        href="#"
        class="mr-4 mt-4 py-3 px-6 rounded hover:bg-gray-100 self-start focus:bg-gray-100"
        aria-label="Privacy Policy"
      >
        Privacy Policy</a
      >
      <a
        href="#"
        class="mr-4 mt-4 py-3 px-6 rounded hover:bg-gray-100 self-start focus:bg-gray-100"
        aria-label="Blog"
        >Blog</a
      >
      <a
        href="#"
        class="mr-4 mt-4 py-3 px-6 rounded hover:bg-gray-100 self-start focus:bg-gray-100"
        aria-label="For Businesses"
      >
        For Businesses
      </a>
      <a
        href="#"
        class="mr-4 mt-4 py-3 px-6 rounded hover:bg-gray-100 self-start focus:bg-gray-100"
        aria-label="Contact"
      >
        Contact
      </a>
      <a
        href="#"
        class="mr-4 mt-4 py-3 px-6 rounded hover:bg-gray-100 self-start focus:bg-gray-100"
        aria-label="Careers"
      >
        Careers
      </a>
    </div>
    <div class="text-xs text-left text-gray-600 py-6">
      © 2021 Walnut Insurance, Inc.
      <p>All rights reserved.</p>
    </div>
  </footer>
</template>
