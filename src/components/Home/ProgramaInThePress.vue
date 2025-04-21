<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import vogueliving from "@/assets/vogueliving.webp";
import vogue from "@/assets/vogue.webp";
import ad from "@/assets/ad.webp";
import ad2 from "@/assets/ad2.webp";
import dezeen from "@/assets/dezeen.webp";
import dezeen2 from "@/assets/dezeen2.webp";
</script>

<template>
  <div class="max-w-6xl mx-auto px-4 py-30">
    <!-- Heading and Navigation Buttons -->
    <div class="flex justify-between items-center mb-4">
      <div>
        <h2 class="text-3xl font-semibold text-gray-800">
          Programa in the Press
        </h2>
        <p class="text-2xl text-gray-700 mt-2 max-w-5xl pb-10">
          Explore the impact Programa is making in the Architecture & Design
          industry with features in top publications.
        </p>
      </div>
      <div class="flex gap-4">
        <button
          @click="prevSlide"
          class="w-10 h-10 rounded-lg bg-gray-50 border-2 border-black/10 hover:bg-gray-200 flex items-center justify-center transition-colors"
          aria-label="Previous slide"
        >
          <p class="text-2xl h-10 cursor-pointer"><</p>
        </button>
        <button
          @click="nextSlide"
          class="w-10 h-10 rounded-lg bg-gray-50 border-2 border-black/10 hover:bg-gray-200 flex items-center justify-center transition-colors"
          aria-label="Next slide"
        >
          <p class="text-2xl h-10 cursor-pointer">></p>
        </button>
      </div>
    </div>

    <!-- Slideshow Container -->
    <div class="relative overflow-hidden rounded-2xl">
      <div
        class="w-full flex transition-transform duration-500 ease-in-out"
        :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
      >
        <div
          v-for="(slide, index) in slides"
          :key="index"
          class="w-full flex-shrink-0"
        >
          <div
            class="relative md:h-[400px] rounded-2xl overflow-hidden flex items-center"
            :style="{
              background: `linear-gradient(to right, ${slide.gradientStart}, ${slide.gradientEnd})`,
            }"
          >
            <div class="w-6/12 px-8 text-white z-10">
              <h3 class="text-2xl font-semibold mb-5">{{ slide.title }}</h3>
              <a
                href="#"
                class="inline-block px-6 py-2 text-white rounded-xl bg-black/20 bg-opacity-20 hover:bg-opacity-30 hover:bg-white hover:text-black transition-colors"
              >
                {{ slide.buttonText }}
              </a>
              <div class="mt-35">
                <img :src="slide.logoSrc" :alt="slide.logoAlt" class="h-10" />
              </div>
            </div>
            <div class="absolute right-0 top-0 h-full w-full">
              <img
                :src="slide.imageSrc"
                :alt="slide.imageAlt"
                class="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Optional: Slide Indicators -->
    <div class="flex justify-center mt-4 gap-2">
      <button
        v-for="(slide, index) in slides"
        :key="`indicator-${index}`"
        @click="NavigateToSlide(index)"
        class="w-2 h-2 rounded-full transition-colors"
        :class="index === currentIndex ? 'bg-gray-800' : 'bg-gray-300'"
        :aria-label="`Go to slide ${index + 1}`"
      ></button>
    </div>
  </div>
</template>

<script>
const slides = [
  {
    title:
      "Featured in Vogue Living: Beautiful Software for Interior Designers.",
    buttonText: "View the feature",
    imageSrc: vogueliving,
    imageAlt: "Vogue magazine cover",
    logoSrc: vogue,
    logoAlt: "Vogue logo",
    gradientStart: "rgba(60, 60, 60, 0.9)",
    gradientEnd: "rgba(30, 150, 30, 0.7)",
  },
  {
    title:
      "Featured in Architectural Digest: 26 Top Interior Design Software Programs to Download in 2024",

    buttonText: "View the feature",
    imageSrc: ad2,
    imageAlt: "Architectural Digest cover",
    logoSrc: ad,
    logoAlt: "Architectural Digest logo",
    gradientStart: "rgba(40, 40, 100, 0.9)",
    gradientEnd: "rgba(100, 40, 120, 0.7)",
  },
  {
    title: "Featured in Dezeen: Smac Studio X Made with Programa",

    buttonText: "View the feature",
    imageSrc: dezeen2,
    imageAlt: "Elle Decor magazine cover",
    logoSrc: dezeen,
    logoAlt: "Elle Decor logo",
    gradientStart: "rgba(120, 40, 40, 0.9)",
    gradientEnd: "rgba(180, 60, 60, 0.7)",
  },
];

const currentIndex = ref(0);
const autoplayInterval = ref(null);

// Navigation methods
const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % slides.length;
};

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + slides.length) % slides.length;
};

const NavigateToSlide = (index) => {
  currentIndex.value = index;
};

export default {};
</script>

<style lang="scss" scoped></style>
