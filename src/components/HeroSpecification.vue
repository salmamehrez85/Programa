<template>
  <div class="min-h-screen flex flex-col pt-20">
    <!-- Main Content -->
    <main class="flex-grow">
      <!-- Header Section -->
      <div class="text-center py-8 md:py-16">
        <div class="text-md mb-2 border-1 w-40 text-center ml-185 py-2 px-2">
          Specification Tools
        </div>
        <h1
          class="text-4xl md:text-6xl lg:text-7xl font-bold max-w-5xl mx-auto px-4"
        >
          Spreadsheets weren't built for interior design
        </h1>
      </div>

      <!-- Hero Section with CTA -->
      <div
        class="bg-[#5d4a47] text-white py-12 md:py-20 px-4 rounded-3xl mx-4 md:mx-8 lg:mx-16"
      >
        <div class="text-center">
          <p class="text-xl md:text-2xl mb-10">
            Eliminate arduous data entry from your workflow so you can focus on
            the work that matters
          </p>
          <div class="flex flex-col sm:flex-row justify-center gap-4">
            <button
              class="bg-yellow-300 hover:bg-yellow-400 text-black px-6 py-3 rounded-full font-medium"
            >
              Get started
            </button>
            <button
              class="border border-white hover:bg-white/10 px-6 py-3 rounded-full font-medium"
            >
              Watch a demo
            </button>
          </div>
        </div>

        <!-- Product Library Preview -->
        <div class="mt-16 max-w-5xl mx-auto">
          <img :src="productlibrary" alt="productlibrary" />
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
