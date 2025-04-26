<template>
  <div class="bg-white p-4 sm:p-6 md:p-8 lg:p-10">
    <!-- Main Image -->
    <div class="mb-8 sm:mb-10 md:mb-12 flex justify-center">
      <img
        :src="ProductSchedule"
        alt="Product Schedule"
        class="w-full sm:w-10/12 md:w-9/12 lg:w-8/12 rounded-lg shadow-md object-cover"
      />
    </div>

    <!-- Features Section -->
    <div
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto px-4 sm:px-6 md:px-8"
    >
      <div class="space-y-2">
        <h3 class="text-lg sm:text-xl font-semibold">Always up-to-date</h3>
        <p class="text-gray-600">
          Schedules that stay live, ensuring minimal double handling
        </p>
      </div>

      <div class="space-y-2">
        <h3 class="text-lg sm:text-xl font-semibold">Cloud-enabled</h3>
        <p class="text-gray-600">
          Up to date schedules, kept live using the cloud
        </p>
      </div>

      <div class="space-y-2">
        <h3 class="text-lg sm:text-xl font-semibold">Seamless to share</h3>
        <p class="text-gray-600">Share with clients, builders, and trades</p>
      </div>

      <div class="space-y-2">
        <h3 class="text-lg sm:text-xl font-semibold">Product libraries</h3>
        <p class="text-gray-600">
          Build your own Product Library with the specs your projects need
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import ProductSchedule from "@/assets/ProductSchedule.webp";
</script>
