<template>
  <div
    class="bg-[#0f1224] text-white max-w-5xl mx-auto my-16 rounded-xl overflow-hidden"
  >
    <div class="flex flex-col lg:flex-row">
      <!-- Left section -->
      <div class="flex-1 p-10 flex flex-col justify-between">
        <div>
          <h2 class="text-2xl lg:text-3xl font-semibold mb-6">
            “As a designer, we need to be on top of everything going into a
            project. Live updating schedules, where clients can approve,
            decline, or comment, make the process so much easier.”
          </h2>
          <div class="text-gray-400 font-semibold">
            <p>Shona McElroy</p>
            <p>Interior Architect</p>
          </div>
        </div>
        <div class="mt-10">
          <img :src="logo" alt="Logo" class="h-10 w-auto" />
        </div>
      </div>

      <!-- Right section -->
      <div class="relative flex-1">
        <div v-if="!showVideo">
          <img
            :src="videoImage"
            alt="Video Thumbnail"
            class="h-full w-10/12 mt-5 mb-5 ml-10"
          />
          <button
            @click="showVideo = true"
            class="cursor-pointer absolute bottom-15 left-20 bg-white text-black px-4 py-2 rounded-md font-medium text-sm hover:bg-gray-200 flex items-center"
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
