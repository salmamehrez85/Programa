<template>
  <div class="bg-white p-6 max-w-7xl mx-auto">
    <div class="relative">
      <!-- Carousel container -->
      <div class="overflow-hidden">
        <div
          class="flex transition-transform duration-500 ease-in-out"
          :style="{
            transform: `translateX(-${currentIndex * (100 / visibleItems)}%)`,
          }"
        >
          <!-- Item 1 -->
          <div class="w-full md:w-1/3 flex-shrink-0 px-4">
            <div class="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                :src="FurnitureSchedule"
                alt="Real-Time Updates"
                class="w-full h-48 object-cover"
              />
              <div class="p-4">
                <h3 class="text-xl font-semibold mb-2">Real-Time Updates</h3>
                <p class="text-gray-600">
                  Consolidate project details in one manageable dashboard,
                  eliminating the need for multiple exports.
                </p>
              </div>
            </div>
          </div>

          <!-- Item 2 -->
          <div class="w-full md:w-1/3 flex-shrink-0 px-4">
            <div class="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                :src="CentralizedManagement"
                alt="Centralized Management"
                class="w-full h-48 object-cover"
              />
              <div class="p-4">
                <h3 class="text-xl font-semibold mb-2">
                  Centralized Management
                </h3>
                <p class="text-gray-600">
                  Track progress, update specifications, and ensure everyone
                  involved has access to the latest information.
                </p>
              </div>
            </div>
          </div>

          <!-- Item 3 -->
          <div class="w-full md:w-1/3 flex-shrink-0 px-4">
            <div class="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                :src="ModularSofa"
                alt="Streamlined Approvals"
                class="w-full h-48 object-cover"
              />
              <div class="p-4">
                <h3 class="text-xl font-semibold mb-2">
                  Streamlined Approvals
                </h3>
                <p class="text-gray-600">
                  Clients can easily review and approve Schedules, reducing
                  delays and ensuring that projects stay on track.
                </p>
              </div>
            </div>
          </div>

          <!-- Item 4 -->
          <div class="w-full md:w-1/3 flex-shrink-0 px-4">
            <div class="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                :src="FurnitureSchedule"
                alt="Product Libraries"
                class="w-full h-48 object-cover"
              />
              <div class="p-4">
                <h3 class="text-xl font-semibold mb-2">Product Libraries</h3>
                <p class="text-gray-600">
                  Build your own Product Library with the specs your projects
                  need for consistent documentation.
                </p>
              </div>
            </div>
          </div>

          <!-- Item 5 -->
          <div class="w-full md:w-1/3 flex-shrink-0 px-4">
            <div class="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                :src="CentralizedManagement"
                alt="Accessible Everywhere"
                class="w-full h-48 object-cover"
              />
              <div class="p-4">
                <h3 class="text-xl font-semibold mb-2">
                  Accessible Everywhere
                </h3>
                <p class="text-gray-600">
                  Access your project details from anywhere, on any device,
                  ensuring you're never without critical information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Pagination indicators -->
    <div class="flex justify-center mt-6 space-x-2">
      <button
        v-for="index in totalItems - visibleItems + 1"
        :key="index - 1"
        @click="goToSlide(index - 1)"
        class="w-3 h-3 rounded-full transition-colors duration-200 cursor-pointer"
        :class="currentIndex === index - 1 ? 'bg-black' : 'bg-gray-300'"
        :aria-label="`Go to slide group ${index}`"
      ></button>
    </div>
  </div>
</template>

<script setup>
import FurnitureSchedule from "@/assets/FurnitureSchedule.webp";
import CentralizedManagement from "@/assets/CentralizedManagement.webp";
import ModularSofa from "@/assets/ModularSofa.webp";

import { ref, computed } from "vue";

// Configuration
const totalItems = 5;
const visibleItems = 3;
const currentIndex = ref(0);

// Navigation methods
const nextSlide = () => {
  if (currentIndex.value < totalItems - visibleItems) {
    currentIndex.value++;
  }
};

const prevSlide = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--;
  }
};

const goToSlide = (index) => {
  if (index >= 0 && index <= totalItems - visibleItems) {
    currentIndex.value = index;
  }
};

// Data for the carousel items
const items = [
  {
    title: "Real-Time Updates",
    description:
      "Consolidate project details in one manageable dashboard, eliminating the need for multiple exports.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Centralized Management",
    description:
      "Track progress, update specifications, and ensure everyone involved has access to the latest information.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Streamlined Approvals",
    description:
      "Clients can easily review and approve Schedules, reducing delays and ensuring that projects stay on track.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Product Libraries",
    description:
      "Build your own Product Library with the specs your projects need for consistent documentation.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Accessible Everywhere",
    description:
      "Access your project details from anywhere, on any device, ensuring you're never without critical information.",
    image: "/placeholder.svg?height=300&width=400",
  },
];
</script>

<style scoped>
/* Mobile responsiveness */
@media (max-width: 768px) {
  [class*="md:w-1/3"] {
    width: 100%;
  }

  .flex {
    flex-wrap: nowrap;
  }
}
</style>
