<template>
  <section class="py-16 mx-100 bg-white overflow-hidden">
    <!-- Headings -->
    <div class="text-center mb-12">
      <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
        {{ header }}
      </h2>
      <p class="text-xl md:text-2xl text-gray-700">
        {{ paragraph }}
      </p>
    </div>

    <!-- First row - sliding right to left -->
    <div class="relative">
      <div class="flex animate-marquee-rtl">
        <div class="flex space-x-16 min-w-full py-6 px-4">
          <div
            v-for="index in 7"
            :key="`first-${index}`"
            class="flex items-center justify-center w-32 md:w-40 flex-shrink-0 grayscale opacity-70 hover:opacity-100 transition-opacity duration-300"
          >
            <!-- Replace the src attribute with your own image path -->
            <img :src="YSG" alt="Logo" class="h-12 object-contain" />
          </div>
        </div>
        <!-- Duplicate for seamless loop -->
        <div class="flex space-x-16 min-w-full py-6 px-4"></div>
      </div>
    </div>

    <!-- Second row - sliding left to right -->
    <div class="relative">
      <div class="flex animate-marquee-ltr">
        <div class="flex space-x-16 min-w-full py-6 px-4">
          <div
            v-for="index in 7"
            :key="`second-${index}`"
            class="flex items-center justify-center w-32 md:w-40 flex-shrink-0 grayscale opacity-70 hover:opacity-100 transition-opacity duration-300"
          >
            <!-- Replace the src attribute with your own image path -->
            <img :src="NHI" alt="Logo" class="h-12 object-contain" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import NHI from "@/assets/NKILogo.webp";
import YSG from "@/assets/YSGlogo.webp";
</script>

<script>
export default {
  props: {
    header: {
      type: String,
    },
    paragraph: {
      type: String,
    },
  },
};
</script>

<style>
@keyframes marquee-rtl {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}

@keyframes marquee-ltr {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
}

.animate-marquee-rtl {
  animation: marquee-rtl 30s linear infinite;
}

.animate-marquee-ltr {
  animation: marquee-ltr 30s linear infinite;
}

/* Pause animation on hover */
.animate-marquee-rtl:hover,
.animate-marquee-ltr:hover {
  animation-play-state: paused;
}
</style>
