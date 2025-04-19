<template>
  <div
    class="mt-30 py-80 mx-25 relative overflow-hidden bg-black text-white rounded-4xl flex items-center justify-center"
  >
    <!-- Background -->
    <div class="absolute inset-0 z-0">
      <img
        :src="blackGlobalBG"
        alt="Earth from space"
        class="w-full h-full object-cover opacity-80"
      />
    </div>

    <!-- Looping vertical city names in a fixed box -->
    <div class="absolute top-1/2 -translate-y-3/12 h-[700px] overflow-hidden">
      <div
        class="flex flex-col animate-loop"
        :style="{ animationDuration: `${cities.length * 5}s` }"
      >
        <div
          v-for="(city, index) in cities.concat(cities)"
          :key="index"
          class="h-[120px] flex items-center justify-center text-8xl font-bold text-gray-300"
        >
          {{ city }}
        </div>
      </div>
    </div>

    <!-- Top Text Overlay -->
    <div class="absolute top-4 w-full text-center z-20">
      <p class="text-2xl font-light">
        Trusted by thousands of studios in 80+ countries
      </p>
      <p class="text-xl">Managing 50,000+ projects</p>
    </div>
  </div>
</template>

<script setup>
import blackGlobalBG from "@/assets/blackGlobalBG.jpg";

const cities = ["Hong Kong", "Chicago", "Florence", "California", "Shanghai"];
</script>

<style scoped>
@keyframes loop {
  0% {
    transform: translateY(0%);
  }
  100% {
    transform: translateY(-50%);
  }
}

.animate-loop {
  animation-name: loop;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}
</style>
