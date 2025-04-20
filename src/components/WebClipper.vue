<template>
  <div class="max-w-7xl mx-auto p-4">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- Left Section -->
      <div class="relative rounded-2xl overflow-hidden shadow-lg">
        <div
          class="absolute inset-0 bg-gradient-to-b from-black/20 to-black/10 z-10"
        ></div>
        <img
          :src="faucet"
          alt="Bathroom with marble sink"
          class="w-full h-full object-cover"
        />
        <div class="absolute top-0 left-0 p-8 z-20">
          <h2 class="text-2xl font-bold text-gray-800 mb-2">
            Programa Web Clipper
          </h2>
          <p class="text-gray-800 mb-6 max-w-xs">
            Use the Programa Web Clipper to add products from anywhere online.
          </p>
          <button
            class="cursor-pointer bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
          >
            Try Programa Now
          </button>
        </div>
      </div>

      <!-- Right Section -->
      <div class="flex flex-col">
        <div
          class="relative bg-gray-100 rounded-2xl overflow-hidden shadow-lg flex-grow"
        >
          <!-- Green status indicator -->
          <div
            class="absolute top-6 right-6 w-4 h-4 bg-green-500 rounded-full z-20"
          ></div>

          <div class="h-3/5 flex justify-center items-center p-8">
            <img
              :src="faucetgold"
              alt="Brass bathroom fixtures"
              class="max-h-full object-contain"
            />
          </div>

          <div class="p-8">
            <h2 class="text-2xl font-bold text-gray-800 mb-2">
              Straight from the Source
            </h2>
            <p class="text-gray-700 mb-6">
              Quickly populate Schedules with precise specs using Programa's Web
              Clipper.
            </p>
            <button
              class="cursor-pointer bg-gray-500 text-white px-6 py-3 rounded-md hover:bg-gray-600 transition-colors"
            >
              Install Web Clipper
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import faucet from "@/assets/faucet.webp";
import faucetgold from "@/assets/faucetgold.webp";
</script>

<style scoped></style>
