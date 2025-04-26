<template>
  <div class="min-h-screen flex flex-col pt-12 sm:pt-16 md:pt-20">
    <!-- Main Content -->
    <main class="flex-grow">
      <!-- Header Section -->
      <div class="text-center py-6 sm:py-8 md:py-12 lg:py-16 px-4">
        <div
          class="text-md mb-4 border border-gray-300 rounded-md py-2 px-4 inline-block mx-auto"
        >
          Specification Tools
        </div>
        <h1
          class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold max-w-5xl mx-auto"
        >
          Spreadsheets weren't built for interior design
        </h1>
      </div>

      <!-- Hero Section with CTA -->
      <div
        class="bg-[#5d4a47] text-white py-10 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 rounded-2xl sm:rounded-3xl mx-4 sm:mx-6 md:mx-8 lg:mx-12 xl:mx-16"
      >
        <div class="text-center max-w-4xl mx-auto">
          <p class="text-lg sm:text-xl md:text-2xl mb-8 md:mb-10">
            Eliminate arduous data entry from your workflow so you can focus on
            the work that matters
          </p>
          <div class="flex flex-col sm:flex-row justify-center gap-4">
            <button
              class="cursor-pointer bg-yellow-300 hover:bg-yellow-400 text-black px-6 py-3 rounded-full font-medium"
            >
              Get started
            </button>
            <button
              class="cursor-pointer border border-white hover:bg-white/10 px-6 py-3 rounded-full font-medium"
            >
              Watch a demo
            </button>
          </div>
        </div>

        <!-- Product Library Preview -->
        <div class="mt-10 sm:mt-12 md:mt-16 max-w-5xl mx-auto">
          <img
            :src="productlibrary"
            alt="Product library interface"
            class="w-full rounded-lg shadow-lg"
          />
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import productlibrary from "@/assets/productlibrary.png";
</script>

<style>
/* Additional styles can be added here if needed */
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif;
}
</style>
