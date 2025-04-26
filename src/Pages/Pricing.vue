<script setup>
import DayTrial from "@/components/DayTrial.vue";
import Footer from "@/components/Footer.vue";
import DesignProjectsCarousel from "@/components/Home/DesignProjectsCarousel.vue";
import NavBar from "@/components/NavBar.vue";
import CustomerShowCase from "@/components/Pricing Page/CustomerShowCase.vue";
import EverythingInOnePlace from "@/components/Pricing Page/EverythingInOnePlace.vue";
import HeroPricing from "@/components/Pricing Page/HeroPricing.vue";
import IndustryPartnersSlideShow from "@/components/Pricing Page/IndustryPartnersSlideShow.vue";
import PricingFAQ from "@/components/Pricing Page/PricingFAQ.vue";
import PricingSection from "@/components/Pricing Page/PricingSection.vue";
import Statics from "@/components/Pricing Page/Statics.vue";
import VideoSlideShow from "@/components/Pricing Page/VideoSlideShow.vue";
</script>

<template>
  <NavBar />

  <HeroPricing />
  <PricingSection />
  <PricingFAQ />
  <CustomerShowCase
    header="Our Customer"
    paragraph="Hear from our designer success stories

"
  />
  <Statics />
  <DesignProjectsCarousel />
  <CustomerShowCase
    header="Award winning software servicing
"
    paragraph="designers & architects globally

"
  />

  <VideoSlideShow />

  <IndustryPartnersSlideShow />
  <EverythingInOnePlace />

  <DayTrial />
  <Footer />
</template>

<style scoped></style>
