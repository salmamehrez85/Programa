<script setup>
import board from "@/assets/board.webp";
import sofa from "@/assets/sofa.webp";
</script>

<template>
  <div
    class="relative h-screen overflow-hidden mx-30 rounded-2xl my-20 bg-white"
  >
    <!-- Background Image -->
    <img
      :src="board"
      alt="Background"
      class="absolute inset-0 w-full h-170 object-cover rounded-4xl"
    />

    <!-- Overlay -->
    <div class="absolute inset-0 z-10"></div>

    <!-- Heading + Button -->
    <div
      class="relative z-20 flex flex-col items-center justify-center h-full text-white text-center bottom-30"
    >
      <h1 class="md:text-8xl font-semibold">Creativity, connected</h1>
      <button
        class="cursor-pointer mt-10 px-6 py-3 bg-white/50 text-black rounded-lg font-semibold hover:bg-gray-200 transition"
      >
        Creative tools
      </button>
    </div>

    <!-- Card  -->
    <div
      class="flex flex-col absolute bottom-1 left-1/2 transform -translate-x-1/2 z-30 top-130"
    >
      <img :src="sofa" alt="paint" class="w-80 h-90 rounded-2xl" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
