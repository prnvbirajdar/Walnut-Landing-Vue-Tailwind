<template>
  <div :class="color" class="w-11/12 mx-auto rounded-lg py-20 px-6">
    <img class="h-40 object-cover mx-auto" :src="image" alt="stars picture" />
    <h3
      class="w-10/12 font-title mt-8 tracking-wide font-semibold text-gray-800 text-2xl mx-auto"
    >
      {{ title }}
    </h3>
    <p class="w-10/12 mx-auto text-lg mt-8">
      {{ body }}
    </p>
  </div>
</template>

<script>
export default {
  name: "BenefitCard",
  props: ["title", "image", "body", "color"],
};
</script>
