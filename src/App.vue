<script setup>
import NavBar from "./components/NavBar.vue";
import chair from "@/assets/chair.webp";
import interior from "@/assets/interior.webp";
import light from "@/assets/light.webp";
import meeting from "@/assets/meeting.webp";
import paint from "@/assets/paint.webp";
import schedule from "@/assets/schedule.webp";
import schedules from "@/assets/schedules.webp";
import board from "@/assets/board.webp";
import quickbooks from "@/assets/quickbooks.webp";
import clientDashboard from "@/assets/clientDashboard.webp";
import productApproval from "@/assets/productApproval.webp";

import { ref } from "vue";
</script>

<template>
  <NavBar />

  <div class="bg-white py-60 w-full">
    <h1 class="text-8xl mx-auto font-bold mb-6 text-center leading-tight">
      Beautiful software for interior designers & architects
    </h1>
    <p class="text-2xl font-semibold py-8 text-center">
      Streamline your workflow and unlock your studio's potential. <br />
      Start your 7 day trial
    </p>

    <!-- Email Checker -->
    <form @submit.prevent="submitEmail">
      <div class="py-15 pl-150">
        <div
          :class="[
            'flex items-center border-2 hover:border-red-200 hover:shadow-xl rounded-2xl p-1 w-[500px] transition-all',
            isError ? 'border-pink-400' : 'border-gray-200',
          ]"
        >
          <input
            v-model="email"
            type="email"
            placeholder="Enter your email"
            class="flex-grow px-4 py-2 rounded-full outline-none"
            required
          />
          <button
            type="submit"
            class="cursor-pointer bg-yellow-300 hover:bg-yellow-400 text-black px-4 py-2 rounded-full font-medium"
          >
            Get started
          </button>
        </div>
      </div>
    </form>

    <!-- Image Section -->
    <div class="relative flex flex-wrap justify-start w-full">
      <!-- LeFft Section -->
      <div class="relative w-[600px] h-[450px] top-30">
        <img
          :src="chair"
          class="rounded-3xl = w-8/12 h-full object-cover -ml-10"
        />
        <img :src="light" class="absolute top-15 left-40 w-7/12 rounded-lg" />
      </div>

      <!-- Middle Section -->
      <div class="relative w-[600px] h-[400px] top-60">
        <img :src="interior" class="rounded-3xl w-full h-full object-cover" />
        <img :src="schedule" class="absolute top-17 w-7/12 rounded-lg -ml-15" />
      </div>

      <!-- Right Section -->
      <div class="relative w-[490px] h-[350px] pt-20">
        <img
          :src="meeting"
          class="w-full h-full object-cover rounded-4xl ml-20"
        />
        <img :src="paint" class="absolute top-40 w-8/12 rounded-lg -ml-20" />
      </div>
    </div>

    <!-- Book a Demo -->
    <div
      class="flex flex-col items-center justify-center px-4 py-16 text-center mt-50"
    >
      <h1 class="text-4xl font-semibold">
        Built by &amp; for interior designers
      </h1>
      <p class="text-3xl max-w-3xl pb-10">
        Powerful tools to elevate your design process from concept to completion
      </p>
      <div class="flex flex-row gap-4 items-center">
        <button
          class="cursor-pointer bg-gray-900 text-white px-6 py-3 rounded-md font-medium hover:bg-gray-600 transition-colors"
        >
          Get started
        </button>
        <button
          class="cursor-pointer px-6 py-3 font-medium rounded-md border border-neutral-400 hover:bg-gray-200 transition-colors"
        >
          Book a demo
        </button>
      </div>
    </div>

    <!-- Features -->
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
                    Easily refine visual concepts, share ideas, and showcase
                    your design in a collaborative online space.
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
  </div>
</template>

<script>
const currentSlide = ref(0);
// SlideShow
function goToSlide(index) {
  currentSlide.value = index;
}

export default {
  data() {
    return {
      items: ["Product", "Solutions", "Pricing", "Resources", "Editorial"],
      email: "",
    };
  },
  components: {
    NavBar,
  },
  methods: {
    submitEmail() {
      if (!this.email) {
        alert("Please enter a valid email.");
        return;
      }
      // Here you can handle the email submission, like sending it to an API.
      console.log("Submitted email:", this.email);
      alert(`Thanks for signing up with ${this.email}`);
      this.email = "";
    },
  },
};
</script>

<style scoped></style>
