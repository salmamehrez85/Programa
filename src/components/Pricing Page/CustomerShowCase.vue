<template>
  <section
    class="py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-12 bg-white overflow-hidden max-w-screen-2xl mx-auto"
  >
    <!-- Headings -->
    <div class="text-center mb-8 sm:mb-10 md:mb-12 px-4">
      <h2
        class="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-3"
      >
        {{ header }}
      </h2>
      <p class="text-lg sm:text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
        {{ paragraph }}
      </p>
    </div>

    <!-- First row - sliding right to left -->
    <div class="relative overflow-hidden">
      <div class="flex animate-marquee-rtl">
        <div
          class="flex space-x-8 sm:space-x-12 md:space-x-16 min-w-full py-4 sm:py-5 md:py-6"
        >
          <div
            v-for="index in 7"
            :key="`first-${index}`"
            class="flex items-center justify-center w-24 sm:w-28 md:w-32 lg:w-40 flex-shrink-0 grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
          >
            <img
              :src="YSG"
              alt="Logo"
              class="h-8 sm:h-10 md:h-12 object-contain"
            />
          </div>
        </div>
        <!-- Duplicate for seamless loop -->
        <div
          class="flex space-x-8 sm:space-x-12 md:space-x-16 min-w-full py-4 sm:py-5 md:py-6"
        >
          <div
            v-for="index in 7"
            :key="`first-duplicate-${index}`"
            class="flex items-center justify-center w-24 sm:w-28 md:w-32 lg:w-40 flex-shrink-0 grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
          >
            <img
              :src="YSG"
              alt="Logo"
              class="h-8 sm:h-10 md:h-12 object-contain"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Second row - sliding left to right -->
    <div class="relative overflow-hidden mt-2 sm:mt-3 md:mt-4">
      <div class="flex animate-marquee-ltr">
        <div
          class="flex space-x-8 sm:space-x-12 md:space-x-16 min-w-full py-4 sm:py-5 md:py-6"
        >
          <div
            v-for="index in 7"
            :key="`second-${index}`"
            class="flex items-center justify-center w-24 sm:w-28 md:w-32 lg:w-40 flex-shrink-0 grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
          >
            <img
              :src="NHI"
              alt="Logo"
              class="h-8 sm:h-10 md:h-12 object-contain"
            />
          </div>
        </div>
        <!-- Duplicate for seamless loop -->
        <div
          class="flex space-x-8 sm:space-x-12 md:space-x-16 min-w-full py-4 sm:py-5 md:py-6"
        >
          <div
            v-for="index in 7"
            :key="`second-duplicate-${index}`"
            class="flex items-center justify-center w-24 sm:w-28 md:w-32 lg:w-40 flex-shrink-0 grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
          >
            <img
              :src="NHI"
              alt="Logo"
              class="h-8 sm:h-10 md:h-12 object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import NHI from "@/assets/NKILogo.webp";
import YSG from "@/assets/YSGlogo.webp";

defineProps({
  header: {
    type: String,
    default: "Trusted by Design Professionals",
  },
  paragraph: {
    type: String,
    default: "Join thousands of design professionals using our platform",
  },
});
</script>

<style scoped>
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

/* Responsive animation speeds */
@media (max-width: 640px) {
  .animate-marquee-rtl {
    animation-duration: 20s;
  }

  .animate-marquee-ltr {
    animation-duration: 20s;
  }
}
</style>
