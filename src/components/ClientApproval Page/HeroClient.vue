<template>
  <div class="min-h-screen flex flex-col pt-20">
    <!-- Main Content -->
    <main class="flex-grow">
      <!-- Header Section -->
      <div class="text-center py-8 md:py-16">
        <div class="text-md mb-5 border-1 w-60 text-center ml-175 py-2 px-3">
          Client Communications
        </div>
        <h1
          class="text-4xl md:text-6xl lg:text-7xl font-bold max-w-5xl mx-auto px-4"
        >
          Easy Approvals & Sharing with our Client Comms
        </h1>
      </div>

      <!-- Hero Section with CTA -->
      <div
        class="bg-[#0f1224] text-white py-12 md:py-20 px-4 rounded-3xl mx-4 md:mx-8 lg:mx-16"
      >
        <div class="text-center">
          <p class="text-xl md:text-2xl mb-10">
            Easy approvals within one platform can Reduce delays and enhance
            client satisfaction.
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
              Book a call
            </button>
          </div>
        </div>

        <!-- Product Library Preview -->
        <div class="mt-16 max-w-8xl mx-auto">
          <img :src="Approvals" alt="Approvals" />
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
