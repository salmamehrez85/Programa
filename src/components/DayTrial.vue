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
      class="relative z-10 w-full h-50 flex items-center justify-between px-10"
    >
      <!-- Left Text -->
      <div class="text-white ml-20">
        <h2 class="text-2xl font-bold mb-2">
          Try Programa for free with a 7 day trial
        </h2>
        <p class="text-xl">Join the world’s best studios</p>
      </div>

      <!-- Right Form -->
      <div
        class="relative flex items-center gap-30 bg-white/30 backdrop-blur-sm px-2 py-2 rounded-2xl mr-20 focus-within:ring-1 shadow-lg focus-within:ring-pink-700 focus-within:border focus-within:border-sky-500 transition-all duration-200"
        tabindex="0"
      >
        <input
          type="email"
          v-model="email"
          placeholder="Enter your email"
          class="pl-3 bg-transparent outline-none text-white placeholder-gray-300 text-sm"
        />
        <button
          @click="submitForm"
          class="cursor-pointer bg-yellow-300 text-black text-sm font-medium px-4 py-1.5 rounded-lg hover:bg-yellow-400 transition"
        >
          Get started
        </button>
        <!-- Error Message -->
        <div
          v-if="showError"
          class="absolute top-13 left-3 text-red-500 text-sm"
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
