<template>
  <section class="w-11/12 mx-auto">
    <div class="mt-60 mb-10 flex flex-wrap justify-center">
      <div class="w-full sm:w-11/12 md:w-8/12 lg:w-6/12 2xl:w-5/12 px-4">
        <h2
          class="text-5xl font-title tracking-wide font-medium text-gray-800 text-left leading-12"
        >
          A membership with exclusive content and amazing benefits
        </h2>
        <p class="text-lg leading-relaxed mt-8 mb-8 text-left text-gray-600">
          Get exclusive perks, content and benefits to help support your
          lifestyle.
        </p>
      </div>
    </div>
    <div class="w-11/12 mx-auto space-y-6">
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
  <section class="relative py-20">
    <div class="container mx-auto px-4">
      <div class="items-center flex flex-wrap">
        <div class="w-full md:w-4/12 ml-auto mr-auto px-4">
          <img
            alt="..."
            class="max-w-full rounded-lg shadow-lg"
            src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=634&amp;q=80"
          />
        </div>
      </div>
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
