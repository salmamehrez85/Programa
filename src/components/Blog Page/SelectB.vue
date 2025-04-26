<template>
  <!-- .select-container -->
  <div class="flex justify-center my-3 sm:my-2 pt-40">
    <!-- .select-items -->
    <div class="flex gap-2 sm:gap-5">
      <button
        v-for="(item, index) in selectItems"
        :key="index"
        class="px-3 py-1.5 sm:px-4 sm:py-3 rounded-lg border-0 hover:bg-gray-300 hover:border-1 cursor-pointer text-sm sm:text-base transition-colors"
        :class="{ 'bg-gray-300 font-medium': item.active }"
      >
        {{ item.label }}
      </button>
    </div>
  </div>
</template>

<script setup>
// Select items at the top
const selectItems = [
  { label: "Editorial", active: false },
  { label: "Made with Programa", active: false },
  { label: "Blog", active: true },
];
</script>
