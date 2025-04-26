<template>
  <!-- .left-column-wrapper -->
  <div class="min-h-full" :style="{ width: `${columnWidth}px` }">
    <!-- .left-column -->
    <div class="relative" ref="leftColumn">
      <!-- .featured-item -->
      <div class="rounded-lg sm:rounded-xl overflow-hidden bg-white" ref="featuredItem">
        <!-- .featured-image -->
        <div class="h-[250px] sm:h-[350px] md:h-[400px] lg:h-[472px] bg-[#3a3a3a] relative rounded-lg sm:rounded-xl">
          <!-- .featured-title -->
          <div class="absolute top-4 left-4 sm:top-5 md:top-6 lg:top-7.5 sm:left-5 md:left-6 lg:left-7.5 text-2xl sm:text-3xl md:text-4xl lg:text-[60px] text-white/70 font-medium">Programa Webinar</div>
          <!-- .featured-tags -->
          <div class="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 md:bottom-5 md:left-5 flex gap-1.5 sm:gap-2 md:gap-2.5">
            <span v-for="(tag, index) in featuredTags" :key="index" class="px-2 py-1 sm:px-3 sm:py-1.5 md:px-3.5 md:py-1.5 bg-white/20 rounded-[20px] text-xs sm:text-sm text-white">{{ tag }}</span>
          </div>
        </div>
        <!-- .featured-content -->
        <div class="py-3 sm:py-4 md:py-5">
          <h2 class="m-0 mb-1.5 sm:mb-2 md:mb-2.5 font-semibold text-base sm:text-lg md:text-xl">Master your time and profits with Programa</h2>
          <h3 class="m-0 mb-3 sm:mb-4 md:mb-5 text-base sm:text-lg md:text-xl font-normal">Programa Online Webinar</h3>
          <!-- .featured-meta -->
          <div class="flex pt-2 sm:pt-3 md:pt-4 border-t border-[#eee] text-[10px] sm:text-xs">
            <!-- .program-label -->
            <div class="font-semibold mr-2 sm:mr-2.5">PROGRAMA</div>
            <!-- .date -->
            <div>2023-04-02</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const props = defineProps({
  navbarHeight: {
    type: Number,
    default: 80
  }
});

// Featured item tags
const featuredTags = ['Business', 'Templates'];

// Refs for scroll behavior
const leftColumn = ref(null);
const featuredItem = ref(null);
const isLeftColumnFixed = ref(false);
const columnWidth = ref(708); // Default width

// Scroll behavior state
let leftColumnHeight = 0;
let leftColumnTop = 0;
let documentHeight = 0;

// Set up scroll behavior
onMounted(() => {
  // Initial measurements
  updateMeasurements();
  
  // Add event listeners
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('resize', () => {
    updateMeasurements();
    handleScroll();
  });
  
  // Initial check
  handleScroll();
});

// Clean up event listeners on unmount
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  window.removeEventListener('resize', updateMeasurements);
});

// Update measurements function
const updateMeasurements = () => {
  if (!leftColumn.value) return;
  
  leftColumnHeight = leftColumn.value.offsetHeight;
  leftColumnTop = leftColumn.value.getBoundingClientRect().top + window.scrollY;
  documentHeight = document.documentElement.scrollHeight;
  
  // Responsive width adjustment
  if (window.innerWidth < 768) {
    columnWidth.value = '100%';
  } else {
    columnWidth.value = 708;
  }
};

// Handle scroll event
const handleScroll = () => {
  if (!leftColumn.value) return;
  
  // Don't apply sticky behavior on mobile
  if (window.innerWidth < 768) {
    if (isLeftColumnFixed.value) {
      isLeftColumnFixed.value = false;
      leftColumn.value.style.position = 'relative';
      leftColumn.value.style.top = 'auto';
      leftColumn.value.style.bottom = 'auto';
      leftColumn.value.style.width = '100%';
    }
    return;
  }
  
  const scrollY = window.scrollY;
  const windowHeight = window.innerHeight;
  
  // Check if the top of the left column is at or above the navbar
  const leftColumnRelativeTop = leftColumnTop - scrollY;
  const maxScroll = documentHeight - windowHeight;
  
  // Check if we're near the bottom of the page
  const isNearBottom = scrollY > maxScroll + 200;
  
  // Make column sticky when it reaches the navbar
  if (leftColumnRelativeTop <= props.navbarHeight && !isNearBottom) {
    if (!isLeftColumnFixed.value) {
      isLeftColumnFixed.value = true;
      
      // Fix the left column in place with the stored width
      leftColumn.value.style.position = 'fixed';
      leftColumn.value.style.top = `${props.navbarHeight}px`; // Position it right below navbar
      leftColumn.value.style.bottom = 'auto';
      leftColumn.value.style.width = `${columnWidth.value}px`;
    }
  } else {
    if (isLeftColumnFixed.value) {
      isLeftColumnFixed.value = false;
      
      // Return to normal flow but preserve width
      leftColumn.value.style.position = 'relative';
      leftColumn.value.style.top = 'auto';
      leftColumn.value.style.bottom = 'auto';
      leftColumn.value.style.width = `${columnWidth.value}px`;
    }
  }
};
</script>