<template>
  <div
    class="bg-[#0f1224] text-white max-w-full sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-3 sm:mx-4 md:mx-8 lg:mx-auto my-6 sm:my-8 md:my-12 lg:my-16 rounded-lg md:rounded-xl overflow-hidden"
  >
    <div class="flex flex-col lg:flex-row">
      <!-- Left section -->
      <div
        class="flex-1 p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col justify-between"
      >
        <div>
          <h2
            class="text-xl sm:text-2xl lg:text-3xl font-semibold mb-3 sm:mb-4 md:mb-6"
          >
            "As a designer, we need to be on top of everything going into a
            project. Live updating schedules, where clients can approve,
            decline, or comment, make the process so much easier."
          </h2>
          <div class="text-gray-400 font-semibold text-sm sm:text-base">
            <p>Shona McElroy</p>
            <p>Interior Architect</p>
          </div>
        </div>
        <div class="mt-6 sm:mt-8 lg:mt-10">
          <img :src="logo" alt="Logo" class="h-6 sm:h-8 lg:h-10 w-auto" />
        </div>
      </div>

      <!-- Right section -->
      <div class="relative flex-1 min-h-48 sm:min-h-64 md:min-h-80">
        <div v-if="!showVideo" class="h-full">
          <img
            :src="videoImage"
            alt="Video Thumbnail"
            class="h-full w-full sm:w-11/12 lg:w-10/12 mt-2 sm:mt-3 md:mt-5 mb-2 sm:mb-3 md:mb-5 mx-auto sm:ml-2 md:ml-4 lg:ml-10"
          />
          <button
            @click="showVideo = true"
            class="cursor-pointer absolute bottom-4 sm:bottom-8 md:bottom-12 lg:bottom-15 left-4 sm:left-8 md:left-12 lg:left-20 bg-white text-black px-2 sm:px-3 md:px-4 py-1 sm:py-2 rounded md:rounded-md font-medium text-xs sm:text-sm hover:bg-gray-200 flex items-center"
          >
            ▶ Watch now
          </button>
        </div>
        <div v-else class="absolute inset-0 w-full h-full">
          <iframe
            class="w-full h-full"
            :src="youtubeEmbedUrl"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import logo from "@/assets/SMACLogo.webp";
import videoImage from "@/assets/videoImage.webp";

export default {
  name: "VideoTestimonial",
  data() {
    return {
      showVideo: false,
      logo,
      videoImage,
      youtubeEmbedUrl:
        "https://www.youtube.com/embed/1aL3J18kNJ0?autoplay=1&rel=0&modestbranding=1",
    };
  },
};
</script>

<style scoped></style>
