<template>
  <div class="relative overflow-hidden">
    <!-- Left upper section with text and buttons -->
    <div class="container mx-auto px-4 py-10 lg:py-16">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <!-- Left content -->
        <div class="max-w-xl ml-40 mt-30">
          <h1 class="text-4xl md:text-4xl font-bold text-gray-900 mb-6">
            Straight from the Source
          </h1>
          <p class="text-xl md:text-xl text-gray-800 mb-8 leading-relaxed">
            Use Programa's integrated Web Clipper to pull product specs &
            imagery directly from supplier websites to keep your Schedules up to
            date.
          </p>
          <div class="flex flex-wrap gap-4">
            <button
              class="px-6 py-3 bg-gray-900 text-white font-medium rounded-md hover:bg-gray-800 transition-colors"
            >
              Try Programa Free
            </button>
            <button
              class="px-6 py-3 bg-white text-gray-900 font-medium rounded-md border border-gray-300 hover:bg-gray-50 transition-colors"
            >
              Watch a demo
            </button>
          </div>
        </div>

        <!-- Right section with single overlapping image -->
        <div class="relative">
          <div class="absolute right-40 top-50 z-10">
            <div class="w-full max-w-md">
              <img
                :src="StraightFromTheSourceImg1"
                alt="Featured product"
                class="w-10/12 h-auto rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom section with full-width image -->
    <div class="mt-64 lg:mt-20">
      <div class="w-full h-[700px]">
        <img
          :src="StraightFromTheSourceImg2"
          alt="Interior design showcase"
          class="w-full h-full object-cover px-60"
        />
        <!-- Optional overlay elements for the bottom image -->
        <div class="absolute"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import StraightFromTheSourceImg1 from "@/assets/StraightFromTheSourceImg1.webp";
import StraightFromTheSourceImg2 from "@/assets/StraightFromTheSourceImg2.webp";
</script>

<style>
/* Any additional custom styles can be added here */
</style>
