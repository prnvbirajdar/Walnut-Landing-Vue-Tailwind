<template>
  <Disclosure
    as="nav"
    class="bg-white fixed top-0 left-0 right-0 shadow h-20 pt-2 z-50"
    v-slot="{ open }"
  >
    <div class="max-w-7xl mx-auto px-2">
      <div class="relative flex items-center justify-between h-16">
        <div class="absolute inset-y-0 right-0 flex items-center lg:hidden">
          <!-- Mobile menu button-->
          <DisclosureButton class="inline-flex items-center justify-center">
            <span class="sr-only">Open main menu</span>
            <div
              class="p-2 hover:bg-gray-100 rounded text-gray-600 hover:text-gray-800"
            >
              <MenuIcon v-if="!open" class="block h-6 w-6" aria-hidden="true" />

              <XIcon v-else class="block h-6 w-6" aria-hidden="true" />
            </div>
          </DisclosureButton>
        </div>
        <div class="px-4 lg:px-0 flex-1 flex items-center sm:justify-between">
          <div class="flex-shrink-0 flex items-center">
            <div class="flex w-full">
              <img class="h-8 w-7" src="/logo.png" alt="Logo" />
              <a
                href="#"
                class="text-2xl font-title font-extrabold text-salmon cursor-pointer select-none"
                >&nbsp;walnut</a
              >
            </div>
          </div>
          <div class="hidden lg:block sm:ml-6">
            <div class="flex">
              <a
                v-for="item in navigation"
                :key="item.name"
                :href="item.href"
                :class="[
                  item.current
                    ? 'bg-white text-green-new'
                    : 'text-gray-600 hover:text-gray-800',
                  'font-medium py-3 px-5 rounded hover:bg-gray-100 self-start focus:bg-gray-100',
                ]"
                :aria-current="item.current ? 'page' : undefined"
                >{{ item.name }}</a
              >
              <button
                class="ml-4 bg-new-blue w-44 hover:bg-new-blue-hover transition-colors font-bold text-white active:bg-gray-700 text px-3 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                type="button"
              >
                Join Waitlist
              </button>
            </div>
          </div>
        </div>
        <div
          class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
        ></div>
      </div>
    </div>

    <DisclosurePanel class="lg:hidden bg-white shadow">
      <div class="px-2 pt-2 pb-8 space-y-6">
        <a
          v-for="item in navigation"
          :key="item.name"
          :href="item.href"
          :class="[
            item.current
              ? 'bg-white text-green-new'
              : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100',
            'block px-3 py-2 rounded-md text-base font-medium',
          ]"
          :aria-current="item.current ? 'page' : undefined"
          >{{ item.name }}</a
        >
      </div>
      <button
        class="ml-4 mb-3 bg-new-blue w-44 hover:bg-new-blue-hover transition-colors font-bold text-white active:bg-gray-700 text px-3 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1"
        type="button"
      >
        Join Waitlist
      </button>
    </DisclosurePanel>
  </Disclosure>
</template>

<script>
import { ref } from "vue";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/vue";
import { MenuIcon, XIcon } from "@heroicons/vue/outline";

const navigation = [
  { name: "Digital Protection", href: "#", current: true },
  { name: "Blog", href: "#", current: false },
  { name: "For Businesses", href: "#", current: false },
  { name: "Log In", href: "#", current: false },
];

export default {
  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    MenuIcon,
    XIcon,
  },
  setup() {
    const open = ref(false);

    return {
      navigation,
      open,
    };
  },
};
</script>
