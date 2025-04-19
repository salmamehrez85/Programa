<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import schedules from "@/assets/schedules.webp";
import light from "@/assets/light.webp";
import board from "@/assets/board.webp";
import quickbooks from "@/assets/quickbooks.webp";
import clientDashboard from "@/assets/clientDashboard.webp";
import productApproval from "@/assets/productApproval.webp";
</script>

<template>
  <div class="w-full py-12 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Slideshow container -->
      <div class="relative overflow-hidden">
        <!-- Slides -->
        <div
          class="flex transition-transform duration-500 ease-in-out"
          :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
        >
          <!-- Slide 1 -->
          <div class="w-full flex-shrink-0">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
              <!-- Feature 1 -->
              <div class="flex flex-col items-center">
                <div
                  class="relative mb-6 w-full h-64 bg-gray-100 rounded-lg overflow-hidden"
                >
                  <img
                    :src="schedules"
                    alt="Product cards showing Marble and Feature Sofa"
                    class="w-full h-full object-cover"
                  />
                </div>
                <h3 class="text-xl font-semibold text-center mb-2">
                  Schedules
                </h3>
                <p class="text-center text-gray-600">
                  Goodbye spreadsheets. Hello cloud.
                </p>
              </div>

              <!-- Feature 2 -->
              <div class="flex flex-col items-center">
                <div
                  class="relative mb-6 w-full h-64 bg-gray-100 rounded-lg overflow-hidden"
                >
                  <img
                    :src="light"
                    alt="Project management board with timeline view"
                    class="w-full h-full object-cover"
                  />
                </div>
                <h3 class="text-xl font-semibold text-center mb-2">
                  Project Management
                </h3>
                <p class="text-center text-gray-600">
                  Keep your team and your projects, all in one place.
                </p>
              </div>

              <!-- Feature 3 -->
              <div class="flex flex-col items-center">
                <div
                  class="relative mb-6 w-full h-64 bg-gray-100 rounded-lg overflow-hidden"
                >
                  <img
                    :src="board"
                    alt="Colorful artwork on wall"
                    class="w-full h-full object-cover"
                  />
                </div>
                <h3 class="text-xl font-semibold text-center mb-2">
                  Pinboards
                </h3>
                <p class="text-center text-gray-600">
                  Easily refine visual concepts, share ideas, and showcase your
                  design in a collaborative online space.
                </p>
              </div>
            </div>
          </div>

          <!-- Slide 2 -->
          <div class="w-full flex-shrink-0">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
              <!-- Feature 4 -->
              <div class="flex flex-col items-center">
                <div
                  class="relative mb-6 w-full h-64 bg-gray-100 rounded-lg overflow-hidden"
                >
                  <img
                    :src="quickbooks"
                    alt="Quick Books"
                    class="w-full h-full object-cover"
                  />
                </div>
                <h3 class="text-xl font-semibold text-center mb-2">
                  Invoicing & Quickbooks Integration
                </h3>
                <p class="text-center text-gray-600">
                  Invoice directly from your Schedules and Time Tracking
                  entries.
                </p>
              </div>

              <!-- Feature 5 -->
              <div class="flex flex-col items-center">
                <div
                  class="relative mb-6 w-full h-64 bg-gray-100 rounded-lg overflow-hidden"
                >
                  <img
                    :src="clientDashboard"
                    alt="Client Dashboard"
                    class="w-full h-full object-cover"
                  />
                </div>
                <h3 class="text-xl font-semibold text-center mb-2">
                  Client Dashboard
                </h3>
                <p class="text-center text-gray-600">
                  All project stakeholders, together on one page, accessible
                  through a single link.
                </p>
              </div>

              <!-- Feature 6 -->
              <div class="flex flex-col items-center">
                <div
                  class="relative mb-6 w-full h-64 bg-gray-100 rounded-lg overflow-hidden"
                >
                  <img
                    :src="productApproval"
                    alt="Product Approval"
                    class="w-full h-full object-cover"
                  />
                </div>
                <h3 class="text-xl font-semibold text-center mb-2">
                  Product Approval
                </h3>
                <p class="text-center text-gray-600">
                  Easy approvals within one platform can Reduce delays and
                  enhance client satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Navigation dots -->
        <div class="flex justify-center mt-8">
          <div class="flex space-x-2">
            <button
              v-for="(_, index) in 2"
              :key="index"
              @click="goToSlide(index)"
              class="cursor-pointer w-3 h-3 rounded-full transition-colors duration-200"
              :class="
                currentSlide === index
                  ? 'bg-gray-800'
                  : 'bg-gray-300 hover:bg-gray-400'
              "
              aria-label="Go to slide"
            ></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const currentSlide = ref(0);
function goToSlide(index) {
  currentSlide.value = index;
}

export default {};
</script>

<style scoped></style>
