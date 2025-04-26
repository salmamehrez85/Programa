<script setup>
import productlibrary from "@/assets/productlibrary.png";
</script>

<template>
  <div class="min-h-screen flex flex-col pt-16 sm:pt-20 md:pt-28 lg:pt-40">
    <!-- Main Content -->
    <main class="flex-grow">
      <!-- Header Section -->
      <div class="text-center py-6 md:py-8 lg:py-12 px-4">
        <div
          class="inline-block text-sm sm:text-md mb-2 sm:mb-3 border border-gray-300 rounded-full py-1 px-3 sm:px-4 mx-auto"
        >
          Interior Design
        </div>
        <h1
          class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold max-w-xs sm:max-w-lg md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto"
        >
          Switch to Programa and Save
        </h1>
      </div>
    </main>
  </div>
</template>

<style scoped>
/* Use scoped styles to avoid affecting other components */
@media (max-width: 640px) {
  h1 {
    letter-spacing: -0.5px; /* Tighter letter spacing on mobile for better readability */
  }
}
</style>
