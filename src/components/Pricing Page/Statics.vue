<template>
  <section class="py-6 px-5 md:px-2 max-w-7xl mx-80">
    <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
      <!-- Heading -->
      <div class="flex items-center">
        <h2
          class="text-xl md:text-lg font-bold text-gray-700 leading-tight mb-60"
        >
          Trusted by thousands of A&D professionals worldwide
        </h2>
      </div>

      <!-- Stats Cards -->
      <div
        v-for="(stat, index) in stats"
        :key="index"
        class="bg-gray-100 h-70 rounded-lg p-8 flex flex-col justify-between"
      >
        <div class="mb-auto">
          <p class="text-6xl md:text-7xl font-bold text-gray-900 mb-4">
            {{ stat.percentage }}
          </p>
        </div>
        <p class="text-gray-800 font-medium">{{ stat.description }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
const stats = [
  {
    percentage: "99%",
    description: "Saved time with Programa",
  },
  {
    percentage: "86%",
    description: "Replaced 2+ other tools with Programa",
  },
  {
    percentage: "94%",
    description: "Would highly recommend Programa",
  },
];
</script>
