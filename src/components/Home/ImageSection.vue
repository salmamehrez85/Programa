<script setup>
import chair from "@/assets/chair.webp";
import light from "@/assets/light.webp";
import schedule from "@/assets/schedule.webp";
import interior from "@/assets/interior.webp";
import meeting from "@/assets/meeting.webp";
import paint from "@/assets/paint.webp";
</script>

<template>
  <div class="container mx-auto">
    <div
      class="relative flex flex-col lg:flex-row flex-wrap justify-start w-full"
    >
      <!-- Left Section -->
      <div class="relative w-full lg:w-1/3 h-[450px] mb-12 lg:mb-0 lg:-ml-15">
        <img
          :src="chair"
          class="rounded-3xl w-8/12 h-full object-cover lg:-ml-10"
        />
        <img :src="light" class="absolute top-16 left-1/4 w-7/12 rounded-lg" />
      </div>

      <!-- Middle Section -->
      <div class="relative w-full lg:w-1/3 h-[400px] mb-12 lg:mb-0 lg:mt-60">
        <img
          :src="interior"
          class="rounded-3xl w-full h-full object-cover lg:ml-10"
        />
        <img
          :src="schedule"
          class="absolute top-16 w-7/12 rounded-lg -left-12"
        />
      </div>

      <!-- Right Section -->
      <div class="relative w-full lg:w-1/3 h-[350px] lg:pt-20 lg:ml-15">
        <img
          :src="meeting"
          class="w-full h-full object-cover rounded-3xl lg:ml-30"
        />
        <img :src="paint" class="absolute top-40 w-8/12 rounded-lg -left-16" />
      </div>
    </div>
  </div>
</template>

<style scoped>
@media (max-width: 1024px) {
  .container {
    padding: 2rem;
  }
}
</style>
