<script setup>
import NavBar from "./components/NavBar.vue";
import chair from "@/assets/chair.webp";
import interior from "@/assets/interior.webp";
import light from "@/assets/light.webp";
import meeting from "@/assets/meeting.webp";
import paint from "@/assets/paint.webp";
import schedule from "@/assets/schedule.webp";
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
</script>

<style scoped></style>
