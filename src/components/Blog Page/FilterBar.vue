<template>
    <!-- .filter-bar-container -->
    <div class="fixed bottom-0 left-0 right-0 flex justify-center px-2 sm:px-3 md:px-5 mb-3 sm:mb-4 md:mb-5 z-100 pointer-events-none">
      <!-- .filter-bar -->
      <div class="flex gap-1.5 sm:gap-2 md:gap-2.5 bg-white rounded-[20px] sm:rounded-[25px] md:rounded-[30px] py-2 px-3 sm:py-2.5 sm:px-4 md:py-3 md:px-5 shadow-lg overflow-x-auto max-w-full pointer-events-auto">
        <button 
          v-for="category in categories" 
          :key="category" 
          class="px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 rounded-[15px] sm:rounded-[18px] md:rounded-[20px] border-none cursor-pointer text-xs sm:text-sm whitespace-nowrap transition-colors"
          :class="{ 'bg-[#333] text-white': modelValue === category }"
          @click="$emit('update:modelValue', category)"
        >
          {{ category }}
        </button>
      </div>
    </div>
  </template>
  
  <script setup>
  // Define props using defineProps
  const props = defineProps({
    // Using v-model pattern with modelValue
    modelValue: {
      type: String,
      required: true
    },
    categories: {
      type: Array,
      required: true
    }
  });
  
  // Define emits
  defineEmits(['update:modelValue']);
  </script>