<template>
  <section class="py-16 bg-white overflow-hidden mx-90">
    <!-- Heading -->
    <div class="text-center mb-12">
      <h2 class="text-3xl md:text-4xl font-bold text-gray-900">
        Our industry partners
      </h2>
    </div>

    <!-- Logo Slideshow -->
    <div class="relative">
      <div class="flex animate-marquee">
        <div class="flex space-x-16 min-w-full py-6 px-4">
          <div
            v-for="(logo, index) in partnerLogos"
            :key="`logo-${index}`"
            class="flex items-center justify-center w-32 md:w-48 flex-shrink-0 grayscale opacity-70 hover:opacity-100 transition-opacity duration-300"
          >
            <!-- Replace the src attribute with your own image path -->
            <img
              :src="`https://placehold.co/200x80?text=${logo}`"
              :alt="`${logo} logo`"
              class="h-12 md:h-16 object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import VOGUE from "@/assets/VOGUE.webp";

// Partner logos data
const partnerLogos = [
  "Design Institute",
  "IDS",
  "VOGUE",
  "AD",
  "ADPRO",
  "ASID",
  "dezeen",
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
  animation: marquee 30s linear infinite;
}

/* Pause animation on hover */
.animate-marquee:hover {
  animation-play-state: paused;
}
</style>
