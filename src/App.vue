<script setup>
import NavBar from "./components/NavBar.vue";
import chair from "@/assets/chair.webp";
import interior from "@/assets/interior.webp";
import light from "@/assets/light.webp";
import meeting from "@/assets/meeting.webp";
import paint from "@/assets/paint.webp";
import schedule from "@/assets/schedule.webp";
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
    <div class="py-15 pl-150">
      <div
        :class="[
          'flex items-center border-2 hover:border-red-200 hover:shadow-xl rounded-2xl p-1 w-[500px] transition-all',
          isError ? 'border-pink-400' : 'border-gray-200',
        ]"
      >
        <input
          v-model="email"
          type="text"
          placeholder="Enter your email"
          class="flex-grow px-4 py-2 rounded-full outline-none"
        />
        <button
          @click="validateEmail"
          class="cursor-pointer bg-yellow-300 hover:bg-yellow-400 text-black px-4 py-2 rounded-full font-medium"
        >
          Get started
        </button>
      </div>
      <p v-if="isError" class="text-pink-600 text-m px-2">Email is required</p>
    </div>

    <!-- Image Section -->

    <div class="w-full relative flex flex-wrap justify-around gap-30">
      <div class="relative w-[400px] h-[300px]">
        <img
          :src="chair"
          class="rounded-xl shadow-lg w-full h-full object-cover"
        />
        <img
          :src="light"
          class="absolute top-4 left-4 w-3/4 rounded-lg shadow-md"
        />
      </div>
      <div class="relative w-[300px] h-[300px]">
        <img
          :src="interior"
          class="rounded-xl shadow-lg w-full h-full object-cover"
        />
        <img
          :src="schedule"
          class="absolute top-4 left-4 w-3/4 rounded-lg shadow-md"
        />
      </div>
      <div class="relative w-[300px] h-[300px]">
        <img
          :src="meeting"
          class="rounded-xl shadow-lg w-full h-full object-cover"
        />
        <img
          :src="paint"
          class="absolute top-4 left-4 w-3/4 rounded-lg shadow-md"
        />
      </div>
    </div>
  </div>
</template>

<script>
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

const email = ref("");
const isError = ref(false);

const validateEmail = () => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  isError.value = !regex.test(email.value.trim());
  if (!isError.value) {
    alert("Email submitted: " + email.value);
    email.value = "";
  }
};
</script>

<style scoped></style>
