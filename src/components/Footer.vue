<script setup>
import logo from "@/assets/logo.webp";
import { ref } from "vue";
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

<template>
  <footer class="bg-white text-black text-sm w-full">
    <!-- Top links section -->
    <div
      class="max-w-7xl mx-auto py-12 grid grid-cols-2 md:grid-cols-6 gap-8 text-md"
    >
      <!-- Column 1 -->
      <div>
        <h4 class="font-semibold mb-2">Product</h4>
        <ul class="space-y-1">
          <li class="cursor-pointer hover:underline">Specification tools</li>
          <li class="cursor-pointer hover:underline">Management tools</li>
          <li class="cursor-pointer hover:underline">Creative tools</li>
          <li class="cursor-pointer hover:underline">Presentation tools</li>
          <li class="cursor-pointer hover:underline">All features</li>
        </ul>
      </div>

      <!-- Column 2 -->
      <div>
        <h4 class="font-semibold mb-2">For Designers</h4>
        <ul class="space-y-1">
          <li class="cursor-pointer hover:underline">Web Clipper</li>
          <li class="cursor-pointer hover:underline">Schedules</li>
          <li class="cursor-pointer hover:underline">Product Library</li>
          <li class="cursor-pointer hover:underline">Client Dashboard</li>
          <li class="cursor-pointer hover:underline">Mood Boards</li>
          <li class="cursor-pointer hover:underline">Purchase Orders</li>
          <li class="cursor-pointer hover:underline">Invoicing</li>
          <li class="cursor-pointer hover:underline">Project Management</li>
        </ul>
      </div>

      <!-- Column 3 -->
      <div>
        <h4 class="font-semibold mb-2">For Suppliers</h4>
        <ul class="space-y-1">
          <li class="cursor-pointer hover:underline">Programa For Brands</li>
          <li class="cursor-pointer hover:underline">All Features</li>
        </ul>
      </div>

      <!-- Column 4 -->
      <div>
        <h4 class="font-semibold mb-2">Resources</h4>
        <ul class="space-y-1">
          <li class="cursor-pointer hover:underline">Blog</li>
          <li class="cursor-pointer hover:underline">Made with Programa</li>
          <li class="cursor-pointer hover:underline">Editorial</li>
          <li class="cursor-pointer hover:underline">Pricing</li>
        </ul>
      </div>

      <!-- Column 5 -->
      <div>
        <h4 class="font-semibold mb-2">About</h4>
        <ul class="space-y-1">
          <li class="cursor-pointer hover:underline">Company</li>
          <li class="cursor-pointer hover:underline">Contact</li>
        </ul>
      </div>
    </div>

    <hr class="mt-10 text-gray-300" />
    <!-- Middle row: logo + slogan + email -->
    <div
      class="py-20 px-2 max-w-7xl mx-30 flex flex-col lg:flex-row items-center justify-between"
    >
      <!-- Logo and title -->
      <div class="flex items-center">
        <img :src="logo" alt="Logo" class="w-4/12" />
      </div>

      <div class="text-center text-lg">Freedom, by design</div>

      <!-- Email signup -->
      <div
        class="bg-gray-100 relative flex items-center gap-20 backdrop-blur-sm px-2 py-2 rounded-2xl mr-10 left-50 focus-within:ring-1 shadow-xl focus-within:ring-pink-700 focus-within:border focus-within:border-red-500 transition-all duration-200"
        tabindex="0"
      >
        <input
          type="email"
          v-model="email"
          placeholder="Enter your email"
          class="pl-3 bg-transparent outline-none text-black placeholder-gray-300 text-sm"
        />
        <button
          @click="submitForm"
          class="cursor-pointer bg-black text-white text-sm font-medium px-4 py-1.5 rounded-lg hover:bg-gray-400 transition"
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

    <hr class="mt-10 text-gray-300" />

    <!-- Bottom: links and copyright -->
    <div
      class="py-6 px-8 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-400 text-xs"
    >
      <!-- Left -->
      <div class="space-y-1">
        <p>© Programa 2025</p>
        <ul class="space-y-1">
          <li>What is Programa?</li>
          <li>Help Centre</li>
          <li>Download Web Clipper</li>
        </ul>
      </div>

      <!-- Center -->
      <div class="flex flex-wrap gap-4 justify-center md:justify-start">
        <p>Instagram</p>
        <p>Facebook</p>
        <p>Pinterest</p>
        <p>Linkedin</p>
        <p>YouTube</p>
      </div>

      <!-- Right -->
      <div class="space-y-1 md:text-right">
        <p>Terms & Conditions</p>
        <p>Privacy Policy</p>
        <p>Cookie Policy</p>
        <p>In App Payments Services</p>
        <p>Acceptable Use Policy</p>
        <p>Data Processing Addendum</p>
      </div>
    </div>
  </footer>
</template>
