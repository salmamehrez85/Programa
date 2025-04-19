<script setup>
import chair from "@/assets/chair.webp";
import light from "@/assets/light.webp";
import schedule from "@/assets/schedule.webp";
import interior from "@/assets/interior.webp";
import meeting from "@/assets/meeting.webp";
import paint from "@/assets/paint.webp";
</script>

<template>
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
</template>

<script>
export default {};
</script>

<style scoped></style>
