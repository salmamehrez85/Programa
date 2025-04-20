<template>
  <div
    class="mt-30 relative w-full max-w-7xl mx-auto h-[500px] md:h-[500px] rounded-3xl overflow-hidden"
  >
    <!-- Background Image -->
    <img
      :src="office"
      alt="Office Team"
      class="absolute inset-0 w-full h-full object-cover"
    />

    <!-- Text Content -->
    <div class="absolute left-6 top-6 z-10 max-w-md text-white pr-20 sm:pr-0">
      <h2 class="text-2xl font-bold leading-snug mb-2 md:text-2xl sm:text-xl">
        Wherever you are, we're here to help
      </h2>
      <p class="text-base md:text-2xl leading-snug">
        Have questions or need assistance? <br class="hidden sm:block" />
        Chat with us today or book a demo <br class="hidden sm:block" />
        with our team of experienced designers.
      </p>
    </div>

    <!-- Chat Button - Repositioned for mobile -->
    <button
      class="cursor-pointer absolute bottom-6 left-6 sm:bottom-auto sm:left-auto sm:top-10 sm:right-15 z-10 bg-white/20 backdrop-blur-sm text-white px-3 md:px-4 py-1 md:py-2 rounded-lg text-base md:text-lg hover:bg-white hover:text-black transition"
    >
      Chat with our team
    </button>

    <!-- Optional: dark overlay -->
    <div class="absolute inset-0 bg-black/30"></div>
  </div>
</template>

<script setup>
import office from "@/assets/office.webp"; // replace with your actual image path
</script>
