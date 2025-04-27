<template>
  <div
    class="mx-2 sm:mx-8 md:mx-16 lg:mx-24 xl:mx-30 bg-gradient-to-br from-neutral-700 to-pink-100 p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl md:rounded-3xl"
  >
    <div class="container mx-auto max-w-7xl">
      <!-- Text and buttons section -->
      <div
        class="mt-6 sm:mt-10 md:mt-15 mb-10 sm:mb-16 md:mb-25 text-white mx-2 sm:mx-6 md:mx-12 lg:mx-20 ml-2 sm:ml-6 md:ml-16 lg:ml-30"
      >
        <h1 class="text-xl sm:text-2xl md:text-3xl font-bold">
          Submit For Client Approval
        </h1>
        <p
          class="text-base sm:text-lg md:text-xl max-w-xs sm:max-w-xl md:max-w-2xl"
        >
          Client approvals are crucial for maintaining smooth and efficient
          project workflows.
        </p>
      </div>

      <!-- Slideshow section -->
      <div
        class="relative max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-auto"
      >
        <div class="overflow-hidden rounded-lg md:rounded-xl">
          <div
            class="flex transition-transform duration-500 ease-in-out"
            :style="`transform: translateX(-${currentIndex * 100}%);`"
          >
            <div
              v-for="(slide, index) in slides"
              :key="index"
              class="w-full h-80 sm:h-96 md:h-128 lg:h-160 xl:h-180 flex-shrink-0"
            >
              <img
                :src="slide.image"
                :alt="slide.title"
                class="w-full h-full object-cover rounded-lg md:rounded-xl"
              />
            </div>
          </div>
        </div>

        <!-- Navigation buttons -->
        <div
          class="absolute right-2 sm:right-4 md:right-6 lg:right-10 -top-12 sm:-top-16 md:-top-20 flex space-x-3 sm:space-x-5"
        >
          <button
            @click="prevSlide"
            class="cursor-pointer hover:bg-gray-300 bg-white bg-opacity-90 hover:bg-opacity-100 p-1 sm:p-2 rounded md:rounded-md shadow-md transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            @click="nextSlide"
            class="cursor-pointer hover:bg-gray-300 bg-white bg-opacity-90 hover:bg-opacity-100 p-1 sm:p-2 rounded md:rounded-md shadow-md transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import ProjectDashboard from "@/assets/ProjectDashboard.webp";
import ScheduleApproval from "@/assets/ScheduleApproval.webp";
import ApprovalView from "@/assets/ApprovalView.webp";

const slides = ref([
  {
    id: 1,
    title: "Handles and Tapware",
    image: ProjectDashboard,
    category: "handles",
  },
  {
    id: 2,
    title: "Ceiling and Pendant Lights",
    image: ScheduleApproval,
    category: "ceiling",
  },
  {
    id: 3,
    title: "Seating Collection",
    image: ApprovalView,
    category: "seating",
  },
]);

const currentIndex = ref(0);

// Navigation methods
const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % slides.value.length;
};

const prevSlide = () => {
  currentIndex.value =
    (currentIndex.value - 1 + slides.value.length) % slides.value.length;
};

const navigateToSlide = (index) => {
  currentIndex.value = index;
};
</script>
