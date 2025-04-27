<template>
  <div class="relative overflow-hidden">
    <!-- Left upper section with text and buttons -->
    <div class="container mx-auto px-4 py-6 sm:py-8 md:py-10 lg:py-16">
      <div
        class="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 items-start"
      >
        <!-- Left content -->
        <div
          class="max-w-xl mx-4 sm:mx-6 md:mx-10 lg:ml-20 xl:ml-40 mt-4 sm:mt-10 md:mt-20 lg:mt-30"
        >
          <h1
            class="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6"
          >
            Straight from the Source
          </h1>
          <p
            class="text-base sm:text-lg md:text-xl text-gray-800 mb-4 sm:mb-6 md:mb-8 leading-relaxed"
          >
            Use Programa's integrated Web Clipper to pull product specs &
            imagery directly from supplier websites to keep your Schedules up to
            date.
          </p>
          <div class="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
            <button
              class="cursor-pointer px-4 sm:px-5 md:px-6 py-2 sm:py-3 bg-gray-900 text-white font-medium rounded-md hover:bg-gray-800 transition-colors"
            >
              Try Programa Free
            </button>
            <button
              class="cursor-pointer px-4 sm:px-5 md:px-6 py-2 sm:py-3 bg-white text-gray-900 font-medium rounded-md border border-gray-300 hover:bg-gray-50 transition-colors"
            >
              Watch a demo
            </button>
          </div>
        </div>

        <!-- Right section with single overlapping image -->
        <div
          class="relative mt-12 sm:mt-16 md:mt-0 h-64 sm:h-80 md:h-96 lg:h-auto"
        >
          <div
            class="absolute sm:right-4 md:right-10 lg:right-20 xl:right-40 sm:top-0 md:top-10 lg:top-20 xl:top-50 z-10"
          >
            <div class="w-full max-w-xs sm:max-w-sm md:max-w-md">
              <img
                :src="StraightFromTheSourceImg1"
                alt="Featured product"
                class="w-full sm:w-11/12 md:w-10/12 h-auto rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom section with full-width image -->
    <div class="mt-20 sm:mt-32 md:mt-48 lg:mt-32 xl:mt-20">
      <div class="w-full h-48 sm:h-64 md:h-96 lg:h-[500px] xl:h-[700px]">
        <img
          :src="StraightFromTheSourceImg2"
          alt="Interior design showcase"
          class="w-full h-full object-cover px-2 sm:px-8 md:px-16 lg:px-40 xl:px-60"
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
