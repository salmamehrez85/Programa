<template>
  <div class="bg-white p-8 max-w-6xl mx-auto">
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
                :src="ErrorFreeFeedback"
                alt=" ErrorFreeFeedback"
                class="w-full h-48 object-cover"
              />
              <div class="p-4">
                <h3 class="text-xl font-semibold mb-2">Error Free Feedback</h3>
                <p class="text-gray-600">
                  Minimise human error by instantly receiving feedback on
                  products directly into the Schedule.
                </p>
              </div>
            </div>
          </div>

          <!-- Item 2 -->
          <div class="w-full md:w-1/3 flex-shrink-0 px-4">
            <div class="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                :src="AlwaysLive"
                alt="AlwaysLive "
                class="w-full h-48 object-cover"
              />
              <div class="p-4">
                <h3 class="text-xl font-semibold mb-2">Always Live</h3>
                <p class="text-gray-600">
                  Clients can review and approve changes in real time, and teams
                  can track feedback and manage timelines.
                </p>
              </div>
            </div>
          </div>

          <!-- Item 3 -->
          <div class="w-full md:w-1/3 flex-shrink-0 px-4">
            <div class="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                :src="SubmitForClientApproval"
                alt="SubmitForClientApproval"
                class="w-full h-48 object-cover"
              />
              <div class="p-4">
                <h3 class="text-xl font-semibold mb-2">
                  Submit For Client Approval
                </h3>
                <p class="text-gray-600">
                  Client approvals are crucial for maintaining smooth and
                  efficient project workflows.
                </p>
              </div>
            </div>
          </div>

          <!-- Item 4 -->
          <div class="w-full md:w-1/3 flex-shrink-0 px-4 mb-5">
            <div class="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                :src="ErrorFreeFeedback"
                alt="ErrorFreeFeedback "
                class="w-full h-50"
              />
              <div class="p-4">
                <h3 class="text-xl font-semibold mb-2">Error Free Feedback</h3>
                <p class="text-gray-600">
                  Minimise human error by instantly receiving feedback on
                  products directly into the Schedule.
                </p>
              </div>
            </div>
          </div>

          <!-- Item 5 -->
          <div class="w-full md:w-1/3 flex-shrink-0 px-4">
            <div class="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                :src="AlwaysLive"
                alt="AlwaysLive "
                class="w-full h-48 object-cover"
              />
              <div class="p-4">
                <h3 class="text-xl font-semibold mb-2">Always Live</h3>
                <p class="text-gray-600">
                  Clients can review and approve changes in real time, and teams
                  can track feedback and manage timelines. .
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
import ErrorFreeFeedback from "@/assets/ErrorFreeFeedback.webp";
import AlwaysLive from "@/assets/AlwaysLive.webp";
import SubmitForClientApproval from "@/assets/SubmitForClientApproval.webp";

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
