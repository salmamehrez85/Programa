<script setup>
import NavBar from "./components/NavBar.vue";
import chair from "@/assets/chair.webp";
import interior from "@/assets/interior.webp";
import light from "@/assets/light.webp";
import meeting from "@/assets/meeting.webp";
import paint from "@/assets/paint.webp";
import schedule from "@/assets/schedule.webp";
import schedules from "@/assets/schedules.webp";
import board from "@/assets/board.webp";
import quickbooks from "@/assets/quickbooks.webp";
import clientDashboard from "@/assets/clientDashboard.webp";
import productApproval from "@/assets/productApproval.webp";
import sofa from "@/assets/sofa.webp";
import presentationPacks from "@/assets/presentationPacks.webp";
import vogue from "@/assets/vogue.webp";
import vogueliving from "@/assets/vogueliving.webp";
import ad from "@/assets/ad.webp";
import ad2 from "@/assets/ad2.webp";
import dezeen from "@/assets/dezeen.webp";
import dezeen2 from "@/assets/dezeen2.webp";

import managementbg from "@/assets/managementbg.jpg";
import Specificationbg from "@/assets/Specificationbg.jpg";
import presentaionbg from "@/assets/presentaionbg.jpg";
import { ref, onMounted, onBeforeUnmount } from "vue";
import DesignProjectsCarousel from "./components/DesignProjectsCarousel.vue";
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

    <!-- Book a Demo -->
    <div
      class="flex flex-col items-center justify-center px-4 py-16 text-center mt-50"
    >
      <h1 class="text-4xl font-semibold">
        Built by &amp; for interior designers
      </h1>
      <p class="text-3xl max-w-3xl pb-10">
        Powerful tools to elevate your design process from concept to completion
      </p>
      <div class="flex flex-row gap-4 items-center">
        <button
          class="cursor-pointer bg-gray-900 text-white px-6 py-3 rounded-md font-medium hover:bg-gray-600 transition-colors"
        >
          Get started
        </button>
        <button
          class="cursor-pointer px-6 py-3 font-medium rounded-md border border-neutral-400 hover:bg-gray-200 transition-colors"
        >
          Book a demo
        </button>
      </div>
    </div>

    <!-- Features -->
    <div class="w-full py-12 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Slideshow container -->
        <div class="relative overflow-hidden">
          <!-- Slides -->
          <div
            class="flex transition-transform duration-500 ease-in-out"
            :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
          >
            <!-- Slide 1 -->
            <div class="w-full flex-shrink-0">
              <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <!-- Feature 1 -->
                <div class="flex flex-col items-center">
                  <div
                    class="relative mb-6 w-full h-64 bg-gray-100 rounded-lg overflow-hidden"
                  >
                    <img
                      :src="schedules"
                      alt="Product cards showing Marble and Feature Sofa"
                      class="w-full h-full object-cover"
                    />
                  </div>
                  <h3 class="text-xl font-semibold text-center mb-2">
                    Schedules
                  </h3>
                  <p class="text-center text-gray-600">
                    Goodbye spreadsheets. Hello cloud.
                  </p>
                </div>

                <!-- Feature 2 -->
                <div class="flex flex-col items-center">
                  <div
                    class="relative mb-6 w-full h-64 bg-gray-100 rounded-lg overflow-hidden"
                  >
                    <img
                      :src="light"
                      alt="Project management board with timeline view"
                      class="w-full h-full object-cover"
                    />
                  </div>
                  <h3 class="text-xl font-semibold text-center mb-2">
                    Project Management
                  </h3>
                  <p class="text-center text-gray-600">
                    Keep your team and your projects, all in one place.
                  </p>
                </div>

                <!-- Feature 3 -->
                <div class="flex flex-col items-center">
                  <div
                    class="relative mb-6 w-full h-64 bg-gray-100 rounded-lg overflow-hidden"
                  >
                    <img
                      :src="board"
                      alt="Colorful artwork on wall"
                      class="w-full h-full object-cover"
                    />
                  </div>
                  <h3 class="text-xl font-semibold text-center mb-2">
                    Pinboards
                  </h3>
                  <p class="text-center text-gray-600">
                    Easily refine visual concepts, share ideas, and showcase
                    your design in a collaborative online space.
                  </p>
                </div>
              </div>
            </div>

            <!-- Slide 2 -->
            <div class="w-full flex-shrink-0">
              <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <!-- Feature 4 -->
                <div class="flex flex-col items-center">
                  <div
                    class="relative mb-6 w-full h-64 bg-gray-100 rounded-lg overflow-hidden"
                  >
                    <img
                      :src="quickbooks"
                      alt="Quick Books"
                      class="w-full h-full object-cover"
                    />
                  </div>
                  <h3 class="text-xl font-semibold text-center mb-2">
                    Invoicing & Quickbooks Integration
                  </h3>
                  <p class="text-center text-gray-600">
                    Invoice directly from your Schedules and Time Tracking
                    entries.
                  </p>
                </div>

                <!-- Feature 5 -->
                <div class="flex flex-col items-center">
                  <div
                    class="relative mb-6 w-full h-64 bg-gray-100 rounded-lg overflow-hidden"
                  >
                    <img
                      :src="clientDashboard"
                      alt="Client Dashboard"
                      class="w-full h-full object-cover"
                    />
                  </div>
                  <h3 class="text-xl font-semibold text-center mb-2">
                    Client Dashboard
                  </h3>
                  <p class="text-center text-gray-600">
                    All project stakeholders, together on one page, accessible
                    through a single link.
                  </p>
                </div>

                <!-- Feature 6 -->
                <div class="flex flex-col items-center">
                  <div
                    class="relative mb-6 w-full h-64 bg-gray-100 rounded-lg overflow-hidden"
                  >
                    <img
                      :src="productApproval"
                      alt="Product Approval"
                      class="w-full h-full object-cover"
                    />
                  </div>
                  <h3 class="text-xl font-semibold text-center mb-2">
                    Product Approval
                  </h3>
                  <p class="text-center text-gray-600">
                    Easy approvals within one platform can Reduce delays and
                    enhance client satisfaction.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Navigation dots -->
          <div class="flex justify-center mt-8">
            <div class="flex space-x-2">
              <button
                v-for="(_, index) in 2"
                :key="index"
                @click="goToSlide(index)"
                class="cursor-pointer w-3 h-3 rounded-full transition-colors duration-200"
                :class="
                  currentSlide === index
                    ? 'bg-gray-800'
                    : 'bg-gray-300 hover:bg-gray-400'
                "
                aria-label="Go to slide"
              ></button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Specification and streamlined  -->

    <div
      class="relative h-screen overflow-hidden mx-30 rounded-2xl my-20 bg-white"
    >
      <!-- Background Image -->
      <img
        :src="Specificationbg"
        alt="Background"
        class="absolute inset-0 w-full h-180 object-cover z-0"
      />

      <!-- Overlay -->
      <div class="absolute inset-0 z-10"></div>

      <!-- Heading + Button -->
      <div
        class="relative z-20 flex flex-col items-center justify-center h-full text-white text-center"
      >
        <h1 class="md:text-8xl font-semibold mb-15">
          Specification, streamlined
        </h1>
        <button
          class="cursor-pointer px-6 py-3 bg-white/50 text-black rounded-lg font-semibold hover:bg-gray-200 transition"
        >
          Specification tools
        </button>
      </div>

      <!-- Floating Cards -->
      <div
        class="flex flex-col absolute bottom-1 left-1/2 transform -translate-x-1/2 z-30 top-150"
      >
        <!-- Card 1 -->
        <div
          class="relative w-150 h-70 backdrop-blur-md bg-white/20 rounded-xl shadow-lg p-4 flex items-center gap-3"
        >
          <img
            :src="productApproval"
            alt="productApproval"
            class="w-40 h-50 rounded blur-sm"
          />
          <div>
            <h3 class="text-sm font-semibold">Sofa</h3>
            <p class="text-xs">Olive</p>
          </div>
        </div>
        <!-- Card 2 -->
        <div
          class="absolute w-150 h-65 backdrop-blur-md left-10 top-10 bg-white/60 rounded-xl shadow flex items-center gap-3"
        >
          <img
            :src="paint"
            alt="productApproval"
            class="w-40 h-50 rounded blur-xs"
          />
          <div>
            <h3 class="text-sm font-semibold">Sofa</h3>
            <p class="text-xs">Olive</p>
          </div>
        </div>
        <!-- Card 3 -->
        <div
          class="absolute w-160 h-70 backdrop-blur-s left-20 top-20 bg-white/90 rounded-xl shadow flex items-center gap-3"
        >
          <img :src="chair" alt="paint" class="w-40 h-50 ml-10 rounded-2xl" />
          <div>
            <h3 class="text-3xl font-semibold pl-40">Chair</h3>
            <p class="text-xl pl-42 pt-2">Brown</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Book a Demo 2-->
    <div
      class="flex flex-col items-center justify-center px-4 py-10 text-center"
    >
      <h1 class="text-4xl font-semibold">
        Real-Time Specification, No Double Handling
      </h1>
      <p class="text-4xl pb-10">
        Streamline your workflow with instant, accurate data
      </p>
      <div class="flex flex-row gap-4 items-center">
        <button
          class="cursor-pointer bg-gray-900 text-white px-6 py-3 rounded-md font-medium hover:bg-gray-600 transition-colors"
        >
          Get started
        </button>
        <button
          class="cursor-pointer px-6 py-3 font-medium rounded-md border border-neutral-400 hover:bg-gray-200 transition-colors"
        >
          Book a demo
        </button>
      </div>
    </div>

    <!-- Management, minimised -->
    <div
      class="relative h-screen overflow-hidden mx-30 rounded-2xl my-20 bg-white"
    >
      <!-- Background Image -->
      <img
        :src="managementbg"
        alt="Background"
        class="absolute inset-0 w-full h-170 object-cover z-0"
      />

      <!-- Overlay -->
      <div class="absolute inset-0 z-10"></div>

      <!-- Heading + Button -->
      <div
        class="relative z-20 flex flex-col items-center justify-center h-full text-white text-center bottom-30"
      >
        <h1 class="md:text-8xl font-semibold">Management, minimised</h1>
        <button
          class="cursor-pointer mt-10 px-6 py-3 bg-white/50 text-black rounded-lg font-semibold hover:bg-gray-200 transition"
        >
          Management tools
        </button>
      </div>

      <!-- Card  -->
      <div
        class="flex flex-col absolute bottom-1 left-1/2 transform -translate-x-1/2 z-30 top-130"
      >
        <img :src="light" alt="paint" class="w-80 h-90 rounded-2xl" />
      </div>
    </div>

    <!-- Book a Demo 3-->
    <div class="flex flex-col items-center justify-center px-4 text-center">
      <h1 class="text-4xl font-semibold">Effortless Project Management</h1>
      <p class="text-4xl pb-10">
        Simplify your workflow with an intuitive, user-friendly platform
      </p>
      <div class="flex flex-row gap-4 items-center">
        <button
          class="cursor-pointer bg-gray-900 text-white px-6 py-3 rounded-md font-medium hover:bg-gray-600 transition-colors"
        >
          Get started
        </button>
        <button
          class="cursor-pointer px-6 py-3 font-medium rounded-md border border-neutral-400 hover:bg-gray-200 transition-colors"
        >
          Book a demo
        </button>
      </div>
    </div>

    <!--Creativity, connected-->
    <div
      class="relative h-screen overflow-hidden mx-30 rounded-2xl my-20 bg-white"
    >
      <!-- Background Image -->
      <img
        :src="board"
        alt="Background"
        class="absolute inset-0 w-full h-170 object-cover rounded-4xl"
      />

      <!-- Overlay -->
      <div class="absolute inset-0 z-10"></div>

      <!-- Heading + Button -->
      <div
        class="relative z-20 flex flex-col items-center justify-center h-full text-white text-center bottom-30"
      >
        <h1 class="md:text-8xl font-semibold">Creativity, connected</h1>
        <button
          class="cursor-pointer mt-10 px-6 py-3 bg-white/50 text-black rounded-lg font-semibold hover:bg-gray-200 transition"
        >
          Creative tools
        </button>
      </div>

      <!-- Card  -->
      <div
        class="flex flex-col absolute bottom-1 left-1/2 transform -translate-x-1/2 z-30 top-130"
      >
        <img :src="sofa" alt="paint" class="w-80 h-90 rounded-2xl" />
      </div>
    </div>

    <!-- Book a Demo 4-->
    <div class="flex flex-col items-center justify-center px-4 text-center">
      <h1 class="text-4xl font-semibold">
        Collaborative Tools, One Shared Space
      </h1>
      <p class="text-4xl pb-10 max-w-4xl">
        Bring your studio together to ideate, iterate, and create seamlessly
      </p>
      <div class="flex flex-row gap-4 items-center">
        <button
          class="cursor-pointer bg-gray-900 text-white px-6 py-3 rounded-md font-medium hover:bg-gray-600 transition-colors"
        >
          Get started
        </button>
        <button
          class="cursor-pointer px-6 py-3 font-medium rounded-md border border-neutral-400 hover:bg-gray-200 transition-colors"
        >
          Book a demo
        </button>
      </div>
    </div>

    <!-- Presentations, perfected -->
    <div
      class="relative h-screen overflow-hidden mx-30 rounded-2xl my-20 bg-white"
    >
      <!-- Background Image -->
      <img
        :src="presentaionbg"
        alt="Background"
        class="absolute inset-0 w-full h-170 object-cover rounded-4xl"
      />

      <!-- Overlay -->
      <div class="absolute inset-0 z-10"></div>

      <!-- Heading + Button -->
      <div
        class="relative z-20 flex flex-col items-center justify-center h-full text-white text-center bottom-30"
      >
        <h1 class="md:text-8xl font-semibold">Presentations, perfected</h1>
        <button
          class="cursor-pointer mt-10 px-6 py-3 bg-white/50 text-black rounded-lg font-semibold hover:bg-gray-200 transition"
        >
          Presentation tools
        </button>
      </div>

      <!-- Card  -->
      <div
        class="flex flex-col absolute bottom-1 left-1/2 transform -translate-x-1/2 z-30 top-130"
      >
        <img
          :src="presentationPacks"
          alt="paint"
          class="w-80 h-90 rounded-2xl"
        />
      </div>
    </div>

    <!-- Book a Demo 5-->
    <div class="flex flex-col items-center justify-center px-4 text-center">
      <h1 class="text-4xl font-semibold">
        Purpose-Built Presentation for One Source of Truth
      </h1>
      <p class="text-4xl pb-10 max-w-4xl">
        Seamlessly manage every stage of your project with unified tools
      </p>
      <div class="flex flex-row gap-4 items-center">
        <button
          class="cursor-pointer bg-gray-900 text-white px-6 py-3 rounded-md font-medium hover:bg-gray-600 transition-colors"
        >
          Get started
        </button>
        <button
          class="cursor-pointer px-6 py-3 font-medium rounded-md border border-neutral-400 hover:bg-gray-200 transition-colors"
        >
          Book a demo
        </button>
      </div>
    </div>
    <hr class="mt-30 text-gray-300" />

    <!-- Programa in the Press -->
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

    <!--  -->
    <DesignProjectsCarousel />
  </div>
</template>

<script>
// SlideShow
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

const currentSlide = ref(0);
// SlideShow
function goToSlide(index) {
  currentSlide.value = index;
}

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
