<template>
  <div
    class="mx-30 min-h-screen bg-gradient-to-br from-neutral-400 to-rose-300 p-8 rounded-3xl"
  >
    <div class="container mx-auto max-w-7xl">
      <!-- Text and buttons section -->
      <div class="mb-16 space-y-6 text-white mx-20">
        <h1 class="text-4xl font-bold">Track, manage, deliver.</h1>
        <p class="text-xl max-w-2xl">
          Track feedback, manage timelines all in the client dashboard to keep
          your projects on track and delivered on time.
        </p>
        <div class="flex gap-4">
          <button
            class="cursor-pointer bg-white text-gray-800 px-6 py-3 rounded-full font-medium hover:bg-opacity-90 transition"
          >
            Try Programa Free
          </button>
          <button
            class="cursor-pointer text-black bg-transparent border border-white px-6 py-3 rounded-full font-medium hover:bg-white hover:bg-opacity-10 transition"
          >
            Book a demo
          </button>
        </div>
      </div>

      <!-- Slideshow section -->
      <div class="relative max-w-5xl mx-auto">
        <div class="overflow-hidden rounded-xl">
          <div
            class="flex transition-transform duration-500 ease-in-out"
            :style="`transform: translateX(-${currentIndex * 100}%);`"
          >
            <div
              v-for="(slide, index) in slides"
              :key="index"
              class="w-full h-200 flex-shrink-0"
            >
              <img
                :src="slide.image"
                :alt="slide.title"
                class="w-full object-cover rounded-xl"
              />
            </div>
          </div>
        </div>

        <!-- Navigation buttons -->
        <div class="absolute right-10 -top-20 flex space-x-5">
          <button
            @click="prevSlide"
            class="cursor-pointer hover:bg-gray-300 bg-white bg-opacity-90 hover:bg-opacity-100 p-2 rounded-md shadow-md transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-gray-600"
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
            class="cursor-pointer hover:bg-gray-300 bg-white bg-opacity-90 hover:bg-opacity-100 p-2 rounded-md shadow-md transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-gray-600"
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

import ProductsSchedule3 from "@/assets/ProductsSchedule3.webp";
import ProductsSchedule from "@/assets/ProductsSchedule.webp";
import ProductsSchedule2 from "@/assets/ProductsSchedule2.webp";
const slides = ref([
  {
    id: 1,
    title: "Handles and Tapware",
    image: ProductsSchedule3,
    category: "handles",
  },
  {
    id: 2,
    title: "Ceiling and Pendant Lights",
    image: ProductsSchedule,
    category: "ceiling",
  },
  {
    id: 3,
    title: "Seating Collection",
    image: ProductsSchedule2,
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
