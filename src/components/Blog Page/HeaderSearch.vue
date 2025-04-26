<template>
  <div>
    <!-- .header -->
    <header class="text-center my-6 sm:my-8 md:my-10">
      <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-[5.375rem] font-bold m-0">Tools, tips and resources</h1>
    </header>

    <!-- .search-container -->
    <div class="flex justify-center my-5 sm:my-7.5">
      <!-- .search-bar -->
      <div class="flex items-center w-full max-w-[90%] sm:max-w-[500px] bg-[#f0f0f0] rounded-[25px] px-4 sm:px-5 py-2 sm:py-2.5">
        <!-- .search-icon -->
        <span class="mr-2 sm:mr-2.5 text-[#666]">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="sm:w-5 sm:h-5"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
        </span>
        <input 
          type="text" 
          :placeholder="placeholder" 
          v-model="searchInputValue"
          class="flex-1 border-none bg-transparent text-sm sm:text-base outline-none"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';

// Props for customization
const props = defineProps({
  placeholder: {
    type: String,
    default: 'Explore the blog'
  },
  modelValue: {
    type: String,
    default: ''
  }
});

// Emit events
const emit = defineEmits(['update:modelValue', 'search']);

// Two-way binding for input value
const searchInputValue = ref(props.modelValue);

// Watch for changes from parent
watch(() => props.modelValue, (newValue) => {
  searchInputValue.value = newValue;
});

// Watch for local changes and emit to parent
watch(searchInputValue, (newValue) => {
  emit('update:modelValue', newValue);
  emit('search', newValue);
});
</script>