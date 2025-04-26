<template>
  <section class="py-16 px-4 md:px-8 max-w-7xl mx-auto">
    <!-- Heading and Description -->
    <div class="max-w-2xl mb-12">
      <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Our customers
      </h2>
      <p class="text-xl text-gray-700 mb-8">
        Understand how thousands of designers are transforming their workflows
        with Programa.
      </p>
      <a
        href="#"
        class="inline-block bg-gray-900 text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800 transition-colors"
      >
        Discover Made with Programa
      </a>
    </div>

    <!-- Slideshow Navigation -->
    <div class="flex justify-end mb-6 space-x-2">
      <button
        @click="prevSlide"
        class="p-3 rounded-md border border-gray-200 hover:bg-gray-100 transition-colors"
        :disabled="currentSlide === 0"
        :class="{ 'opacity-50 cursor-not-allowed': currentSlide === 0 }"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        @click="nextSlide"
        class="p-3 rounded-md border border-gray-200 hover:bg-gray-100 transition-colors"
        :disabled="currentSlide === videos.length - 1"
        :class="{
          'opacity-50 cursor-not-allowed': currentSlide === videos.length - 1,
        }"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>

    <!-- Staggered Video Slideshow -->
    <div class="relative h-[500px] md:h-[400px] lg:h-[500px]">
      <!-- Background Videos (Next Videos) -->
      <div
        v-for="(video, index) in visibleBackgroundVideos"
        :key="`bg-${index}`"
        class="absolute transition-all duration-500 ease-in-out rounded-lg overflow-hidden shadow-lg"
        :style="{
          width: `${70 - index * 5}%`,
          height: `${90 - index * 5}%`,
          top: `${5 + index * 2.5}%`,
          right: `${5 - index * 10}%`,
          zIndex: 10 - index,
          transform: `translateX(${index * 10}%) scale(${1 - index * 0.05})`,
          opacity: 1 - index * 0.2,
        }"
      >
        <img
          :src="video.thumbnailUrl"
          :alt="video.title"
          class="w-full h-full object-cover"
        />
        <div class="absolute bottom-4 right-4">
          <img
            :src="video.logoUrl"
            :alt="video.company + ' logo'"
            class="h-8"
          />
        </div>
      </div>

      <!-- Main Video (Current) -->
      <div
        class="absolute left-0 top-0 w-full md:w-3/4 h-full rounded-lg overflow-hidden shadow-xl z-20 transition-all duration-500"
      >
        <!-- Video Player -->
        <div
          v-if="playingVideo === currentSlide"
          class="relative w-full h-full bg-black"
        >
          <video
            ref="videoPlayer"
            class="w-full h-full object-cover"
            controls
            @ended="stopVideo"
          >
            <source :src="currentVideo.videoUrl" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <!-- Video Thumbnail -->
        <div v-else class="relative w-full h-full">
          <img
            :src="currentVideo.thumbnailUrl"
            :alt="currentVideo.title"
            class="w-full h-full object-cover"
          />

          <!-- Company Logo and Location -->
          <div class="absolute top-6 left-6 text-white">
            <h3 class="text-2xl font-bold">{{ currentVideo.company }}</h3>
            <p>{{ currentVideo.location }}</p>
          </div>

          <!-- Watch Now Button -->
          <button
            @click="playVideo(currentSlide)"
            class="absolute bottom-6 left-6 bg-black/70 hover:bg-black text-white px-4 py-2 rounded-md flex items-center transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                clip-rule="evenodd"
              />
            </svg>
            Watch now
          </button>

          <!-- Company Logo Overlay -->
          <div class="absolute bottom-6 right-6">
            <img
              :src="currentVideo.logoUrl"
              :alt="currentVideo.company + ' logo'"
              class="h-12"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onBeforeUnmount } from "vue";

// Sample video data - replace with your actual videos
const videos = [
  {
    title: "MKCA Design Process",
    company: "MKCA",
    location: "New York, USA",
    thumbnailUrl: "https://placehold.co/1280x720?text=MKCA+Video+Thumbnail",
    videoUrl: "https://example.com/videos/mkca.mp4", // Replace with actual video URL
    logoUrl: "https://placehold.co/200x80?text=MKCA",
  },
  {
    title: "Hommeboys Interiors",
    company: "Hommeboys Interiors",
    location: "Los Angeles, USA",
    thumbnailUrl:
      "https://placehold.co/1280x720?text=Hommeboys+Video+Thumbnail",
    videoUrl: "https://example.com/videos/hommeboys.mp4", // Replace with actual video URL
    logoUrl: "https://placehold.co/200x80?text=Hommeboys",
  },
  {
    title: "Mitchell Eades Studio",
    company: "Mitchell Eades",
    location: "Sydney, Australia",
    thumbnailUrl: "https://placehold.co/1280x720?text=Mitchell+Eades+Thumbnail",
    videoUrl: "https://example.com/videos/mitchell-eades.mp4", // Replace with actual video URL
    logoUrl: "https://placehold.co/200x80?text=Mitchell+Eades",
  },
  {
    title: "Studio Minosa Design",
    company: "Studio Minosa",
    location: "Melbourne, Australia",
    thumbnailUrl: "https://placehold.co/1280x720?text=Studio+Minosa+Thumbnail",
    videoUrl: "https://example.com/videos/studio-minosa.mp4", // Replace with actual video URL
    logoUrl: "https://placehold.co/200x80?text=Studio+Minosa",
  },
];

const currentSlide = ref(0);
const playingVideo = ref(null);
const videoPlayer = ref(null);

// Computed properties
const currentVideo = computed(() => videos[currentSlide.value]);

const visibleBackgroundVideos = computed(() => {
  // Get the next 2 videos after the current one (wrapping around if needed)
  const nextVideos = [];
  for (let i = 1; i <= 2; i++) {
    const index = (currentSlide.value + i) % videos.length;
    nextVideos.push(videos[index]);
  }
  return nextVideos;
});

// Navigation functions
const nextSlide = () => {
  if (currentSlide.value < videos.length - 1) {
    currentSlide.value++;
    stopVideo();
  }
};

const prevSlide = () => {
  if (currentSlide.value > 0) {
    currentSlide.value--;
    stopVideo();
  }
};

// Video control functions
const playVideo = (index) => {
  playingVideo.value = index;

  // Start playing after a short delay to allow the video to load
  setTimeout(() => {
    if (videoPlayer.value) {
      videoPlayer.value.play().catch((error) => {
        console.error("Error playing video:", error);
      });
    }
  }, 100);
};

const stopVideo = () => {
  if (videoPlayer.value) {
    videoPlayer.value.pause();
  }
  playingVideo.value = null;
};

// Clean up on component unmount
onBeforeUnmount(() => {
  stopVideo();
});
</script>
