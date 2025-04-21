<script setup>
import Specificationbg from "@/assets/Specificationbg.jpg";
import paint from "@/assets/paint.webp";
import productApproval from "@/assets/productApproval.webp";
import chair from "@/assets/chair.webp";
</script>

<template>
  <div
    class="relative h-screen overflow-hidden mx-30 rounded-2xl my-20 bg-white"
  >
    <!-- Background Image -->
    <img
      :src="Specificationbg"
      alt="Background"
      class="absolute inset-0 w-full h-180 object-cover z-0"
    />

    <!-- Overlay -->
    <div class="absolute inset-0 z-10"></div>

    <!-- Heading + Button -->
    <div
      class="relative z-20 flex flex-col items-center justify-center h-full text-white text-center"
    >
      <h1
        class="text-4xl sm:text-6xl md:text-8xl font-semibold mb-6 sm:mb-10 md:mb-15"
      >
        Specification, streamlined
      </h1>
      <button
        class="cursor-pointer px-4 sm:px-6 py-2 sm:py-3 bg-white/50 text-black rounded-lg font-semibold hover:bg-gray-200 transition"
      >
        Specification tools
      </button>
    </div>

    <!-- Floating Cards - Hidden on small screens, shown in original position on large screens -->
    <div
      class="hidden md:flex flex-col absolute bottom-1 left-1/2 transform -translate-x-1/2 z-30 top-150"
    >
      <!-- Card 1 -->
      <div
        class="relative w-150 h-70 backdrop-blur-md bg-white/20 rounded-xl shadow-lg p-4 flex items-center gap-3"
      >
        <img
          :src="productApproval"
          alt="productApproval"
          class="w-40 h-50 rounded blur-sm"
        />
        <div>
          <h3 class="text-sm font-semibold">Sofa</h3>
          <p class="text-xs">Olive</p>
        </div>
      </div>
      <!-- Card 2 -->
      <div
        class="absolute w-150 h-65 backdrop-blur-md left-10 top-10 bg-white/60 rounded-xl shadow flex items-center gap-3"
      >
        <img
          :src="paint"
          alt="productApproval"
          class="w-40 h-50 rounded blur-xs"
        />
        <div>
          <h3 class="text-sm font-semibold">Sofa</h3>
          <p class="text-xs">Olive</p>
        </div>
      </div>
      <!-- Card 3 -->
      <div
        class="absolute w-160 h-70 backdrop-blur-s left-20 top-20 bg-white/90 rounded-xl shadow flex items-center gap-3"
      >
        <img :src="chair" alt="paint" class="w-40 h-50 ml-10 rounded-2xl" />
        <div>
          <h3 class="text-3xl font-semibold pl-40">Chair</h3>
          <p class="text-xl pl-42 pt-2">Brown</p>
        </div>
      </div>
    </div>

    <!-- Mobile Floating Cards - Only visible on small screens -->
    <div
      class="md:hidden flex flex-col absolute bottom-35 left-1/2 transform -translate-x-1/2 z-30"
    >
      <!-- Mobile Card 1 -->
      <div
        class="relative w-64 h-16 backdrop-blur-md bg-white/20 rounded-xl shadow-lg p-2 flex items-center gap-2"
      >
        <img
          :src="productApproval"
          alt="productApproval"
          class="w-12 h-12 rounded blur-sm"
        />
        <div>
          <h3 class="text-sm font-semibold">Sofa</h3>
          <p class="text-xs">Olive</p>
        </div>
      </div>
      <!-- Mobile Card 2 -->
      <div
        class="absolute w-64 h-16 backdrop-blur-md left-4 top-4 bg-white/60 rounded-xl shadow flex items-center gap-2"
      >
        <img
          :src="paint"
          alt="productApproval"
          class="w-12 h-12 rounded blur-xs"
        />
        <div>
          <h3 class="text-sm font-semibold">Sofa</h3>
          <p class="text-xs">Olive</p>
        </div>
      </div>
      <!-- Mobile Card 3 -->
      <div
        class="absolute w-72 h-16 backdrop-blur-s left-8 top-8 bg-white/90 rounded-xl shadow flex items-center gap-2"
      >
        <img :src="chair" alt="paint" class="w-12 h-12 ml-2 rounded-lg" />
        <div>
          <h3 class="text-lg font-semibold ml-2">Chair</h3>
          <p class="text-sm ml-4">Brown</p>
        </div>
      </div>
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
