<template> <div>
    <!-- <navbar-component></navbar-component> -->
    <main>
       <header-component></header-component> 
      <!-- <pricing-component></pricing-component>
    <benefits-component></benefits-component>
    <waitlist-component></waitlist-component> -->
    </main>
    <!-- <footer-component></footer-component> -->
  </div></template>

<script>
// import NavbarComponent from "./Navigation.vue";
 import HeaderComponent from "./Header.vue";
// import PricingComponent from "./Pricing.vue";
// import BenefitsComponent from "./Benefits.vue";
// import WaitlistComponent from "./Waitlist.vue";
// import FooterComponent from "./Footer.vue";

export default {
  name: "landing-page",
  components: {
     HeaderComponent,
    // PricingComponent,
    // NavbarComponent,
    // BenefitsComponent,
    // WaitlistComponent,
    // FooterComponent
  },
};
</script>
