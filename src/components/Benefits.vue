<template>
  <section class="w-11/12 md:full mx-auto flex flex-col md:flex-row md:mt-96">
  <!-- This div is sticky for medium + screens when scrolling through this section -->
    <div
      class="mt-60 mb-10 flex flex-wrap justify-center md:w-1/2 lg:w-10/12 md:mt-0 md:h-full md:sticky md:top-56"
    >
      <div class="w-full sm:w-11/12 px-4">
        <h2
          class="text-4xl sm:text-5xl font-title tracking-wide font-medium text-gray-800 text-left leading-12"
        >
          A membership with exclusive content and amazing benefits
        </h2>
        <p class="text-lg leading-relaxed mt-8 mb-8 text-left text-gray-600">
          Get exclusive perks, content and benefits to help support your
          lifestyle.
        </p>
      </div>
    </div>
    <!-- Props passed down to BenefitCard components -->
    <div class="md:w-11/12 mx-auto space-y-6 md:mt-60">
      <BenefitCard
        image="/stars.png"
        color="bg-light-yellow"
        title="Exclusive perks and discounts at premium health partners"
        body="Gain access to premium digital health programs and discounts at your
          local health providers."
      />
      <BenefitCard
        image="/heart.png"
        color="bg-light-pink"
        title="Personalized content and journeys to support your health goals"
        body="Discover personalized journeys and exclusive content to support your health and lifestyle."
      />
      <BenefitCard
        image="/lock.png"
        color="bg-light-blue"
        title="Protection to keep your digital assets safe"
        body="Get access to industry-leading services that help manage your passwords, digital assets and online identity."
      />
    </div>
  </section>
</template>

<script>
import BenefitCard from "./ResuableComponents/BenfitCard.vue";

export default {
  name: "benefits",
  components: {
    BenefitCard,
  },
};
</script>
