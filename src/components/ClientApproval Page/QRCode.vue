<template>
  <div class="max-w-4xl mx-auto p-4">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- Left Section -->
      <div class="relative rounded-2xl overflow-hidden shadow-lg">
        <div
          class="absolute inset-0 bg-gradient-to-b from-black/20 to-black/10 z-10"
        ></div>
        <img
          :src="QRCode"
          alt="Bathroom with marble sink"
          class="w-full h-full object-cover"
        />
        <div class="absolute top-80 left-0 p-8 z-20">
          <h2 class="text-2xl font-bold text-white mb-2">QR Codes</h2>
          <p class="text-white mb-6 max-w-xs">
            Use QR codes to share with clients, colleagues, builders, and
            suppliers anywhere, at any time.
          </p>
          <button
            class="cursor-pointer bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors"
          >
            Try Programa Now
          </button>
        </div>
      </div>

      <!-- Right Section -->
      <div class="flex flex-col">
        <div class="h-full w-full flex justify-center items-center">
          <img
            :src="LiveScheduleOnMobile"
            alt="Brass bathroom fixtures"
            class="max-h-full rounded-2xl"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import LiveScheduleOnMobile from "@/assets/LiveScheduleOnMobile.webp";
import QRCode from "@/assets/QRCode.webp";
</script>

<style scoped></style>
