<template>
  <div class="bg-white p-6">
    <!-- Main Image -->
    <div class="mb-12 flex justify-center">
      <img
        :src="ProductSchedule"
        alt="Product Schedule"
        class="w-9/12 rounded-lg shadow-md object-cover"
      />
    </div>

    <!-- Features Section -->
    <div class="flex flex-col md:flex-row gap-8 justify-between mx-60">
      <div class="space-y-2 flex-1">
        <h3 class="text-xl font-semibold">Always up-to-date</h3>
        <p class="text-gray-600">
          Schedules that stay live, ensuring minimal double handling
        </p>
      </div>

      <div class="space-y-2 flex-1">
        <h3 class="text-xl font-semibold">Cloud-enabled</h3>
        <p class="text-gray-600">
          Up to date schedules, kept live using the cloud
        </p>
      </div>

      <div class="space-y-2 flex-1">
        <h3 class="text-xl font-semibold">Seamless to share</h3>
        <p class="text-gray-600">Share with clients, builders, and trades</p>
      </div>

      <div class="space-y-2 flex-1">
        <h3 class="text-xl font-semibold">Product libraries</h3>
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

<style scoped>
@media (max-width: 768px) {
  .flex-col {
    gap: 2rem;
  }
}
</style>
