<template>
  <section
    class="py-8 sm:py-12 md:py-16 bg-white overflow-hidden px-4 sm:px-6 md:px-8 max-w-7xl mx-auto"
  >
    <!-- Heading -->
    <div class="text-center mb-8 md:mb-12">
      <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
        Our industry partners
      </h2>
    </div>

    <!-- Logo Slideshow -->
    <div class="relative overflow-hidden">
      <div class="flex animate-marquee space-x-6 md:space-x-10">
        <div
          v-for="(logo, index) in partnerLogos"
          :key="`logo-${index}`"
          class="flex items-center justify-center flex-shrink-0 w-24 sm:w-32 md:w-40 opacity-70 hover:opacity-100 transition-opacity duration-500"
        >
          <!-- Use the dynamic src for each logo -->
          <img
            :src="logo.src"
            :alt="logo.alt"
            class="h-8 sm:h-10 md:h-12 object-contain"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Import your logos here
import adpro from "@/assets/ADPROLogo.webp";
import ad from "@/assets/ADLogo.webp";
import dezeen from "@/assets/DEZEENLogo.webp";
import ids from "@/assets/IDSLogo.webp";
import vogue from "@/assets/VOGUELogo.webp";

// Partner logos data with paths
const partnerLogos = [
  { src: adpro, alt: "adpro" },
  { src: ids, alt: "ids" },
  { src: vogue, alt: "vogue" }, // Fixed alt text
  { src: ad, alt: "ad" },
  { src: dezeen, alt: "dezeen" },
];
</script>

<style>
@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}

.animate-marquee {
  animation: marquee 20s linear infinite;
}
</style>
