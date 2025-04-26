<template>
  <section class="py-16 bg-white overflow-hidden mx-80 px-4">
    <!-- Heading -->
    <div class="text-center mb-12">
      <h2 class="text-3xl md:text-4xl font-bold text-gray-900">
        Our industry partners
      </h2>
    </div>

    <!-- Logo Slideshow -->
    <div class="relative">
      <div class="flex animate-marquee space-x-10">
        <div
          v-for="(logo, index) in partnerLogos"
          :key="`logo-${index}`"
          class="flex items-center justify-center flex-shrink-10 w-32 md:w-1/5 opacity-70 hover:opacity-100 transition-opacity duration-500"
        >
          <!-- Use the dynamic src for each logo -->
          <img
            :src="logo.src"
            :alt="logo.alt"
            class="h-12 md:h-12 object-contain"
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
  { src: vogue, alt: "adpro" },

  { src: ad, alt: "ad" }, // Change this if you want a different logo for "VOGUE"
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
