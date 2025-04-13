<template>
  <div class="max-w-7xl mx-auto px-4 py-12">
    <!-- Heading and Navigation -->
    <div class="flex justify-between items-end mb-8">
      <div>
        <h2 class="text-3xl font-semibold text-gray-800">Made with Programa</h2>
        <p class="text-lg text-gray-700 mt-2">
          See how top designers are using Programa
        </p>
      </div>
      <div class="flex items-center gap-6">
        <a href="#" class="text-gray-700 hover:text-gray-900 font-medium">
          See all
        </a>
        <div class="flex gap-2">
          <button
            @click="prevSlide"
            class="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
            aria-label="Previous projects"
            :disabled="currentIndex === 0"
            :class="{ 'opacity-50 cursor-not-allowed': currentIndex === 0 }"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="text-gray-600 cursor-pointer"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>
          <button
            @click="nextSlide"
            class="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
            aria-label="Next projects"
            :disabled="currentIndex >= projects.length - visibleItems"
            :class="{
              'opacity-50 cursor-not-allowed':
                currentIndex >= projects.length - visibleItems,
            }"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="text-gray-600 cursor-pointer"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Carousel Container -->
    <div class="relative">
      <div
        class="flex transition-transform duration-500 ease-in-out gap-5"
        :style="{
          transform: `translateX(-${currentIndex * (100 / visibleItems)}%)`,
        }"
      >
        <div
          v-for="(project, index) in projects"
          :key="index"
          class="flex-shrink-0"
          :style="{
            width: `calc(${100 / visibleItems}% - ${
              ((visibleItems - 1) * 5) / visibleItems
            }px)`,
          }"
        >
          <div class="relative h-[400px] rounded-lg overflow-hidden group">
            <img
              :src="project.imageSrc"
              :alt="project.name"
              class="h-full w-full object-cover"
            />
            <div
              class="absolute inset-0 bg-opacity-20 flex items-center justify-center"
            >
              <h3
                class="text-white text-3xl font-bold tracking-wider text-center whitespace-pre-line"
              >
                {{ project.logo }}
              </h3>
            </div>
          </div>
          <div class="mt-4">
            <h4 class="text-xl font-semibold text-gray-900">
              {{ project.name }}
            </h4>
            <p class="text-gray-700">{{ project.subtitle }}</p>
            <div class="mt-2 flex items-center text-sm text-gray-500">
              <span class="uppercase">{{ project.location }}</span>
              <span class="mx-1">·</span>
              <span>{{ project.category }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import specificationbg from "@/assets/specificationbg.jpg";
import MKCA from "@/assets/MKCA.webp";
import CUAIK from "@/assets/CUAIK.webp";
import S8A from "@/assets/S8A.webp";
import Mitchell from "@/assets/Mitchell.webp";
import AKI from "@/assets/AKI.webp";
import interiorParis from "@/assets/interiorParis.webp";
import DeanDyson from "@/assets/DeanDyson.webp";
import MII from "@/assets/MII.webp";
import SMAC from "@/assets/SMAC.webp";

// Sample project data - 10 items total
const projects = [
  {
    name: "MKCA",
    imageSrc: MKCA,
    subtitle: "In Practice",
    location: "NEW YORK, USA",
    category: "ARCHITECTURE FIRM",
  },
  {
    name: "Hommeboys Interiors",
    logo: "HOMMEBOYS\nINTERIORS",
    subtitle: "Made with Programa",
    location: "CALIFORNIA, USA",
    category: "MULTIDISCIPLINARY",
    imageSrc: specificationbg,
  },
  {
    name: "CUAIK | CDS",

    subtitle: "Made with Programa",
    location: "MEXICO CITY, MEX",
    category: "MULTIDISCIPLINARY",
    imageSrc: CUAIK,
  },
  {
    name: "STUDIO 8 ARCHITECT",

    subtitle: "In Practice",
    location: "NEW YORK CITY, USA",
    category: "RESIDENTIAL",
    imageSrc: S8A,
  },
  {
    name: "Mitchell Design",
    subtitle: "In Practice",
    location: "DUBAI, UAE",
    category: "HOSPITALITY & RESIDENTIAL",
    imageSrc: Mitchell,
  },
  {
    name: "Atelier Studio",
    subtitle: "Made with Programa",
    location: "PARIS, FRANCE",
    category: "INTERIOR DESIGN",
    imageSrc: AKI,
  },
  {
    name: "Forma Design",
    subtitle: "In Practice",
    location: "MILAN, ITALY",
    category: "FURNITURE & SPACES",
    imageSrc: interiorParis,
  },
  {
    name: "Nordic House",
    subtitle: "Made with Programa",
    location: "COPENHAGEN, DENMARK",
    category: "RESIDENTIAL DESIGN",
    imageSrc: DeanDyson,
  },
  {
    name: "Osaka Studio",
    subtitle: "In Practice",
    location: "TOKYO, JAPAN",
    category: "COMMERCIAL SPACES",
    imageSrc: MII,
  },
  {
    name: "Bauhaus Modern",
    subtitle: "Made with Programa",
    location: "BERLIN, GERMANY",
    category: "ARCHITECTURE & DESIGN",
    imageSrc: SMAC,
  },
];

// Fixed number of visible items (4)
const visibleItems = ref(4);
const currentIndex = ref(0);

// Navigation methods
const nextSlide = () => {
  // Move forward by 1 item, but don't exceed the maximum
  if (currentIndex.value < projects.length - visibleItems.value) {
    currentIndex.value += 1;
  }
};

const prevSlide = () => {
  // Move backward by 1 item, but don't go below 0
  if (currentIndex.value > 0) {
    currentIndex.value -= 1;
  }
};
</script>
