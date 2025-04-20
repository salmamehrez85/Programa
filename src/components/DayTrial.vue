<template>
  <div class="mt-30 relative w-full h-[600px] overflow-hidden">
    <!-- Background Image -->
    <img
      :src="programaDayTrial"
      alt="Promo background"
      class="absolute inset-0 w-full h-full object-cover"
    />
    <!-- Black/50 Overlay -->
    <div class="absolute inset-0 bg-black/40 z-10"></div>
    <!-- Overlay Content -->
    <div
      class="relative z-10 w-full h-full flex flex-col md:flex-row md:items-center justify-between px-4 md:px-10 pt-30 md:pb-90"
    >
      <!-- Left Text -->
      <div class="text-white mx-4 md:ml-20 mb-6 md:mb-0">
        <h2 class="text-xl md:text-2xl font-bold mb-2">
          Try Programa for free with a 7 day trial
        </h2>
        <p class="text-lg md:text-xl">Join the world's best studios</p>
      </div>

      <!-- Right Form -->
      <div
        class="relative flex flex-col md:flex-row items-center gap-4 md:gap-30 bg-white/30 backdrop-blur-sm px-2 py-4 md:py-2 rounded-2xl mx-4 my-40 md:mr-20 focus-within:ring-1 shadow-lg focus-within:ring-pink-700 focus-within:border focus-within:border-sky-500 transition-all duration-200 w-auto md:w-auto"
        tabindex="0"
      >
        <input
          type="email"
          v-model="email"
          placeholder="Enter your email"
          class="pl-3 bg-transparent outline-none text-white placeholder-gray-300 text-sm w-full md:w-auto"
        />
        <button
          @click="submitForm"
          class="cursor-pointer bg-yellow-300 text-black text-sm font-medium px-4 py-1.5 rounded-lg hover:bg-yellow-400 transition w-full md:w-auto"
        >
          Get started
        </button>
        <!-- Error Message -->
        <div
          v-if="showError"
          class="absolute top-14 md:top-13 left-3 text-red-500 text-sm"
        >
          Email is required
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import programaDayTrial from "@/assets/programaDayTrial.jpg"; // replace with your image path

const email = ref("");
const showError = ref(false);

const submitForm = () => {
  if (!email.value) {
    showError.value = true;
    setTimeout(() => {
      showError.value = false;
    }, 3000);
  } else {
    alert("Email submitted: " + email.value);
    email.value = "";
  }
};
</script>
