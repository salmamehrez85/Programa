<template>
  <div class="min-h-screen flex flex-col pt-8 sm:pt-12 md:pt-16 lg:pt-20">
    <!-- Main Content -->
    <main class="flex-grow">
      <!-- Header Section -->
      <div class="text-center py-6 sm:py-8 md:py-12 lg:py-16">
        <div
          class="text-sm sm:text-md mb-3 sm:mb-5 border mx-auto sm:mx-auto md:w-48 lg:w-60 text-center sm:ml-0 md:ml-20 lg:ml-60 xl:ml-175 py-1 sm:py-2 px-2 sm:px-3 max-w-xs"
        >
          Client Communications
        </div>
        <h1
          class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold max-w-xs sm:max-w-lg md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto px-2 sm:px-4"
        >
          Easy Approvals & Sharing with our Client Comms
        </h1>
      </div>

      <!-- Hero Section with CTA -->
      <div
        class="bg-[#0f1224] text-white py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20 px-3 sm:px-4 rounded-xl sm:rounded-2xl md:rounded-3xl mx-2 sm:mx-4 md:mx-6 lg:mx-10 xl:mx-16"
      >
        <div class="text-center">
          <p
            class="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 md:mb-10 max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto"
          >
            Easy approvals within one platform can Reduce delays and enhance
            client satisfaction.
          </p>
          <div class="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <button
              class="cursor-pointer bg-yellow-300 hover:bg-yellow-400 text-black px-4 sm:px-5 md:px-6 py-2 sm:py-3 rounded-full font-medium"
            >
              Get started
            </button>
            <button
              class="cursor-pointer border border-white hover:bg-white/10 px-4 sm:px-5 md:px-6 py-2 sm:py-3 rounded-full font-medium"
            >
              Book a call
            </button>
          </div>
        </div>

        <!-- Product Library Preview -->
        <div
          class="mt-8 sm:mt-10 md:mt-12 lg:mt-16 max-w-full sm:max-w-2xl md:max-w-4xl lg:max-w-6xl xl:max-w-8xl mx-auto px-2 sm:px-4"
        >
          <img
            :src="Approvals"
            alt="Approvals"
            class="w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import Approvals from "@/assets/Approvals.webp";
</script>

<style>
/* Additional styles can be added here if needed */
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif;
}
</style>
