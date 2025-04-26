<template>
  <!-- .left-column-wrapper -->
  <div class="min-h-full w-full" :style="{ maxWidth: columnWidth }">
    <!-- .left-column -->
    <div class="relative w-full" ref="leftColumn">
      <!-- .featured-item -->
      <div
        class="rounded-lg sm:rounded-xl overflow-hidden bg-white shadow-sm"
        ref="featuredItem"
      >
        <!-- .featured-image -->
        <div
          class="h-[200px] sm:h-[250px] md:h-[350px] lg:h-[472px] bg-[#3a3a3a] relative rounded-lg sm:rounded-xl"
        >
          <!-- .featured-title -->
          <div
            class="absolute top-3 left-3 sm:top-4 md:top-6 lg:top-7 sm:left-4 md:left-6 lg:left-7 text-xl sm:text-2xl md:text-3xl lg:text-5xl text-white/70 font-medium"
          >
            Programa Webinar
          </div>
          <!-- .featured-tags -->
          <div
            class="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 md:bottom-5 md:left-5 flex flex-wrap gap-1 sm:gap-2 md:gap-2.5"
          >
            <span
              v-for="(tag, index) in featuredTags"
              :key="index"
              class="px-2 py-1 sm:px-2.5 sm:py-1 md:px-3 md:py-1.5 bg-white/20 rounded-full text-xs sm:text-sm text-white"
              >{{ tag }}</span
            >
          </div>
        </div>
        <!-- .featured-content -->
        <div class="px-3 sm:px-4 md:px-5 py-3 sm:py-4 md:py-5">
          <h2
            class="m-0 mb-1.5 sm:mb-2 md:mb-2.5 font-semibold text-base sm:text-lg md:text-xl"
          >
            Master your time and profits with Programa
          </h2>
          <h3
            class="m-0 mb-3 sm:mb-4 md:mb-5 text-sm sm:text-base md:text-lg font-normal text-gray-600"
          >
            Programa Online Webinar
          </h3>
          <!-- .featured-meta -->
          <div
            class="flex pt-2 sm:pt-3 md:pt-4 border-t border-[#eee] text-[10px] sm:text-xs"
          >
            <!-- .program-label -->
            <div class="font-semibold mr-2 sm:mr-2.5">PROGRAMA</div>
            <!-- .date -->
            <div class="text-gray-500">2023-04-02</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";

const props = defineProps({
  navbarHeight: {
    type: Number,
    default: 80,
  },
});

// Featured item tags
const featuredTags = ["Business", "Templates"];

// Refs for scroll behavior
const leftColumn = ref(null);
const featuredItem = ref(null);
const isLeftColumnFixed = ref(false);

// Responsive column width
const columnWidth = computed(() => {
  if (window.innerWidth < 640) {
    return "100%";
  } else if (window.innerWidth < 768) {
    return "100%";
  } else if (window.innerWidth < 1024) {
    return "648px";
  } else {
    return "650px";
  }
});

// Scroll behavior state
let leftColumnHeight = 0;
let leftColumnTop = 0;
let documentHeight = 0;
let windowWidth = 0;

// Set up scroll behavior
onMounted(() => {
  // Initial measurements
  updateMeasurements();

  // Add event listeners
  window.addEventListener("scroll", handleScroll);
  window.addEventListener("resize", handleResize);

  // Initial check
  handleScroll();
});

// Clean up event listeners on unmount
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
  window.removeEventListener("resize", handleResize);
});

// Handle resize event
const handleResize = () => {
  updateMeasurements();
  handleScroll();
};

// Update measurements function
const updateMeasurements = () => {
  if (!leftColumn.value) return;

  leftColumnHeight = leftColumn.value.offsetHeight;
  leftColumnTop = leftColumn.value.getBoundingClientRect().top + window.scrollY;
  documentHeight = document.documentElement.scrollHeight;
  windowWidth = window.innerWidth;
};

// Handle scroll event
const handleScroll = () => {
  if (!leftColumn.value) return;

  // Don't apply sticky behavior on mobile
  if (windowWidth < 768) {
    if (isLeftColumnFixed.value) {
      isLeftColumnFixed.value = false;
      leftColumn.value.style.position = "relative";
      leftColumn.value.style.top = "auto";
      leftColumn.value.style.bottom = "auto";
      leftColumn.value.style.width = "100%";
    }
    return;
  }

  const scrollY = window.scrollY;
  const windowHeight = window.innerHeight;

  // Check if the top of the left column is at or above the navbar
  const leftColumnRelativeTop = leftColumnTop - scrollY;
  const maxScroll = documentHeight - windowHeight;

  // Check if we're near the bottom of the page
  const isNearBottom = scrollY > maxScroll - 200;

  // Make column sticky when it reaches the navbar
  if (leftColumnRelativeTop <= props.navbarHeight && !isNearBottom) {
    if (!isLeftColumnFixed.value) {
      isLeftColumnFixed.value = true;

      // Fix the left column in place with the calculated width
      leftColumn.value.style.position = "fixed";
      leftColumn.value.style.top = `${props.navbarHeight}px`; // Position it right below navbar
      leftColumn.value.style.bottom = "auto";
      leftColumn.value.style.width =
        columnWidth.value === "100%" ? "100%" : columnWidth.value;
    }
  } else {
    if (isLeftColumnFixed.value) {
      isLeftColumnFixed.value = false;

      // Return to normal flow but preserve width
      leftColumn.value.style.position = "relative";
      leftColumn.value.style.top = "auto";
      leftColumn.value.style.bottom = "auto";
      leftColumn.value.style.width = "100%";
    }
  }
};
</script>
