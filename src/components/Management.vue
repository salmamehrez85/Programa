<script setup>
import managementbg from "@/assets/managementbg.jpg";
import light from "@/assets/light.webp";
</script>

<template>
  <div
    class="relative h-screen overflow-hidden mx-30 rounded-2xl my-20 bg-white"
  >
    <!-- Background Image -->
    <img
      :src="managementbg"
      alt="Background"
      class="absolute inset-0 w-full h-170 object-cover z-0"
    />

    <!-- Overlay -->
    <div class="absolute inset-0 z-10"></div>

    <!-- Heading + Button -->
    <div
      class="relative z-20 flex flex-col items-center justify-center h-full text-white text-center bottom-30"
    >
      <h1 class="text-4xl sm:text-6xl md:text-8xl font-semibold px-4 md:px-0">
        Management, minimised
      </h1>
      <button
        class="cursor-pointer mt-6 md:mt-10 px-4 md:px-6 py-2 md:py-3 bg-white/50 text-black rounded-lg font-semibold hover:bg-gray-200 transition"
      >
        Management tools
      </button>
    </div>

    <!-- Desktop Card - Hidden on mobile -->
    <div
      class="hidden md:flex flex-col absolute bottom-1 left-1/2 transform -translate-x-1/2 z-30 top-130"
    >
      <img :src="light" alt="paint" class="w-80 h-90 rounded-2xl" />
    </div>

    <!-- Mobile Card - Only visible on small screens -->
    <div
      class="md:hidden flex flex-col absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
    >
      <img :src="light" alt="paint" class="w-64 h-72 rounded-xl" />
    </div>
  </div>
</template>

<style scoped>
@media (max-width: 768px) {
  .relative.h-screen {
    height: 100vh;
    margin: 1rem;
    border-radius: 1rem;
  }
}
</style>
