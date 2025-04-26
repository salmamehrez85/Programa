<template>
  <section class="py-6 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
    <div class="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
      <!-- Heading -->
      <div class="flex items-start md:items-center">
        <h2
          class="text-xl sm:text-2xl md:text-lg lg:text-xl font-bold text-gray-700 leading-tight mb-4 md:mb-50"
        >
          Trusted by thousands of A&D professionals worldwide
        </h2>
      </div>

      <!-- Stats Cards -->
      <div
        v-for="(stat, index) in stats"
        :key="index"
        class="bg-gray-100 rounded-lg p-6 md:p-8 flex flex-col justify-between"
      >
        <div class="mb-4">
          <p
            class="text-5xl sm:text-6xl md:text-5xl lg:text-6xl font-bold text-gray-900"
          >
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
